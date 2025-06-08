import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader2, ShieldCheck, Bolt, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet";
import { logPrediction } from "@/lib/api";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

// Define type for API response
type PredictionResponse = {
  result: "spam" | "ham";
  confidence: number;
  threshold_used: number;
};

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<"spam" | "ham" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [threshold, setThreshold] = useState(0.6); // Default threshold
  const [confidence, setConfidence] = useState<number | null>(null);

  const MAX_LENGTH = 500;
  const isMessageValid =
    message.trim().length >= 10 && message.trim().length <= MAX_LENGTH;

  const handleSubmit = async (): Promise<void> => {
    if (!isMessageValid) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    if (message.trim().length > MAX_LENGTH) {
      toast.error(`Message must be under ${MAX_LENGTH} characters.`);
      return;
    }

    setIsLoading(true);
    setResult(null);
    setConfidence(null);

    try {
      const response = await axios.post<PredictionResponse>(
        `${import.meta.env.VITE_API_URL}/predict?threshold=${threshold}`,
        {
          message,
        }
      );

      const predictionResult = response.data.result;
      const predictionConfidence = response.data.confidence;

      setResult(predictionResult);
      setConfidence(predictionConfidence);

      const logError = await logPrediction(
        message,
        predictionResult,
        predictionConfidence,
        threshold
      );

      if (logError) {
        console.error(
          "Error logging prediction:",
          logError.message || logError
        );
        toast.error("Failed to log the prediction.");
      } else {
        toast.success("Message classified and logged successfully!");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const errorMessage =
          err.response.data?.message || "Something went wrong.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to classify message. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getResultStyles = () => {
    return result === "spam"
      ? "bg-gradient-to-r from-red-500 to-red-600"
      : "bg-gradient-to-r from-green-500 to-green-600";
  };

  useEffect(() => {
    setIsLoading(true);
    setResult(null);
    setConfidence(null);

    // Optional: simulate short delay to show spinner
    const timeout = setTimeout(() => setIsLoading(false), 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Helmet>
        <title>InboxIQ - Spam/Ham Classifier</title>
        <meta
          name="description"
          content="Classify messages as spam or ham using AI."
        />
        <meta property="og:title" content="InboxIQ - Spam/Ham Classifier" />
        <meta property="og:description" content="Classify messages using AI" />
        <meta property="og:image" content="/spamDetectionIllustration.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
        {/* Header / Navbar */}
        <header className="w-full fixed bg-white shadow-md">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-2 text-blue-600">
              <img src="/logo.svg" alt="logo" className="w-12 h-12 py-0" />
              <Link to="/">InboxIQ</Link>
            </div>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <section className="w-full max-w-4xl px-4 mt-20 py-12 flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Spam/Ham Message Classifier
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Check if your message is spam or not using AI-powered
              classification
            </p>
          </div>

          {/* Spam Threshold Section */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-sm text-gray-700">
              Spam Threshold: {threshold}
            </label>
            <input
              type="range"
              min={0.0}
              max={1.0}
              step={0.01}
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Input Section */}
          <Card className="w-full max-w-2xl p-6 shadow-md bg-white border-none">
            <div className="">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your message
              </label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                maxLength={MAX_LENGTH}
                className="w-full min-h-[150px] p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>
                  {message.trim().length < 10 &&
                    "Minimum 10 characters required"}
                </span>
                <span>
                  {message.trim().length}/{MAX_LENGTH}
                </span>
              </div>

              {message.trim().length > 0 && !isMessageValid && (
                <p className="text-red-500 text-sm mt-1">
                  Message must be at least 10 characters.
                </p>
              )}
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading || !isMessageValid}
              className="w-full  bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-lg !rounded-button"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Checking...
                </>
              ) : (
                "Check Message"
              )}
            </Button>

            <Button
              variant="outline"
              className="-mt-3"
              disabled={isLoading}
              onClick={() => {
                setMessage("");
                setResult(null);
                setConfidence(null);
                setIsLoading(true);

                // Optional: reset after short delay to mimic loading
                setTimeout(() => setIsLoading(false), 300);
              }}
            >
              Reset
            </Button>

            {/* Result Display */}
            {result && (
              <section
                aria-live="polite"
                className=" animate-in fade-in duration-500"
              >
                <Card
                  className={`p-6 text-center ${getResultStyles()} text-white shadow-lg border-4 border-white`}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-5xl mb-4">
                      {result === "spam" ? (
                        <i className="fas fa-exclamation-triangle"></i>
                      ) : (
                        <i className="fas fa-check-circle"></i>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {result === "spam" ? "Spam Detected!" : "Ham (Not Spam)"}
                    </h2>
                    <p className="text-lg mb-2">
                      {result === "spam"
                        ? "This message has been classified as spam."
                        : "This message appears to be legitimate."}
                    </p>
                    {confidence !== null && (
                      <p className="text-sm italic">
                        Confidence Score: {(confidence * 100).toFixed(2)}%
                      </p>
                    )}
                  </div>
                </Card>
              </section>
            )}
          </Card>

          {/* Features Section */}
          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              {
                icon: <Bolt />,
                title: "Fast Analysis",
                desc: "Get instant results with our powerful AI algorithm",
              },
              {
                icon: <ShieldCheck />,
                title: "High Accuracy",
                desc: "Advanced ML models for precise detection",
              },
              {
                icon: <Lock />,
                title: "Secure",
                desc: "Your messages are processed securely and never stored",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {React.cloneElement(item.icon, {
                    className: "w-8 h-8 text-blue-600",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* How It Works */}
          <section className="mt-16 w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Enter Your Message", "AI Analysis", "Get Results"].map(
                (step, i) => (
                  <article
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold mb-2">{step}</h3>
                    <p className="text-gray-600">
                      {i === 0
                        ? "Paste or type the message you want to analyze"
                        : i === 1
                        ? "Our model analyzes text patterns and content"
                        : "Receive instant classification as spam or ham"}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          {/* Illustration */}
          <section className="mt-16 w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
            <img
              src="/spamDetectionIllustration.jpg"
              alt="Spam detection illustration"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </section>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 bg-gray-50 mt-auto">
          <div className="text-center text-gray-600 text-sm">
            <p>Made by Sarthak Garg</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Spam/Ham Classifier. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
