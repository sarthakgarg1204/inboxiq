import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Contact Us - InboxIQ</title>
        <meta
          name="description"
          content="Learn about InboxIQ, our mission, vision, and the team behind the innovative spam/ham message classification app that enhances communication security."
        />
      </Helmet>

      <div className="min-h-[1024px] w-full bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/technologyBackground.jpg"
              alt="Technology background"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Back to Home Button */}
          <div className="absolute top-20 left-66 z-20">
            <Button
              onClick={() => navigate("/")}
              className="!rounded-button whitespace-nowrap bg-white text-indigo-700 hover:bg-white/90 mt-4 cursor-pointer"
            >
              <i className="fas fa-arrow-left text-sm"></i>
              Back to Home
            </Button>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto mt-16 px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1 text-sm">
                AI Technology
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About This Project
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Leveraging advanced machine learning to revolutionize message
                classification, helping users identify and filter unwanted
                content with unprecedented accuracy.
              </p>
              <Button className="!rounded-button whitespace-nowrap bg-white text-indigo-700 hover:bg-white/90 mt-4 cursor-pointer">
                <i className="fas fa-rocket mr-2"></i>
                Explore Our Technology
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-indigo-600 mb-4">
                <i className="fas fa-bullseye text-4xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <div className="relative max-w-3xl mx-auto">
                <i className="fas fa-quote-left text-6xl text-gray-100 absolute -top-8 -left-4"></i>
                <p className="text-xl md:text-2xl font-medium text-gray-700 italic tracking-wide leading-relaxed">
                  To create a safer digital communication environment by
                  developing intelligent systems that accurately distinguish
                  between legitimate and unwanted messages, empowering users to
                  take control of their digital interactions.
                </p>
                <i className="fas fa-quote-right text-6xl text-gray-100 absolute -bottom-8 -right-4"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Problem & Our Solution
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In today's digital world, unwanted messages pose significant
                challenges to productivity and security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 shadow-lg border-0 bg-white relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="bg-red-100 text-red-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <i className="fas fa-exclamation-triangle text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                  <p className="text-gray-600 mb-4">
                    Every day, billions of unwanted messages flood inboxes
                    worldwide, causing:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>
                        Wasted time sorting through irrelevant content
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>
                        Security risks from phishing attempts and malware
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>
                        Missed important communications buried in spam
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                      <span>
                        Cognitive overload from excessive message processing
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-0 bg-white relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="bg-green-100 text-green-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                  <p className="text-gray-600 mb-4">
                    We've developed an advanced AI-powered message classifier
                    that:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>
                        Uses state-of-the-art Natural Language Processing (NLP)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>
                        Achieves over 99% accuracy in message classification
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>
                        Continuously learns and adapts to new spam patterns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>
                        Integrates seamlessly with existing communication tools
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our advanced AI system uses a sophisticated process to
                accurately classify messages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-blue-50 rounded-lg p-8 h-full">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-envelope-open-text text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">
                    1. Message Analysis
                  </h3>
                  <p className="text-gray-600 text-center">
                    When a message arrives, our system breaks it down into key
                    components, analyzing text patterns, sender information, and
                    contextual clues.
                  </p>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <i className="fas fa-chevron-right text-2xl text-gray-300"></i>
                </div>
              </div>

              <div className="relative">
                <div className="bg-purple-50 rounded-lg p-8 h-full">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-brain text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">
                    2. AI Processing
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our machine learning algorithms evaluate hundreds of factors
                    simultaneously, comparing against millions of previously
                    analyzed messages to make intelligent decisions.
                  </p>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <i className="fas fa-chevron-right text-2xl text-gray-300"></i>
                </div>
              </div>

              <div>
                <div className="bg-green-50 rounded-lg p-8 h-full">
                  <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check-double text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">
                    3. Smart Classification
                  </h3>
                  <p className="text-gray-600 text-center">
                    Messages are instantly categorized with remarkable
                    precision, ensuring legitimate communications reach you
                    while unwanted content is filtered out.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-3xl mx-auto p-6 bg-indigo-50 border-0">
                <h4 className="text-lg font-semibold mb-2">
                  Technical Excellence
                </h4>
                <p className="text-gray-700">
                  Our classifier employs advanced techniques including
                  transformer neural networks, contextual embeddings, and
                  ensemble learning methods to achieve industry-leading accuracy
                  rates of 99.7% in controlled testing environments.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">99.7%</div>
                <p className="text-white/80 text-lg">Classification Accuracy</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
                <p className="text-white/80 text-lg">
                  Messages Processed Daily
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <p className="text-white/80 text-lg">Integration Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from organizations that have transformed their
                communication with our technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img
                      src="/techNova.jpg"
                      alt="TechNova Inc."
                      className="w-16 h-16 rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">TechNova Inc.</h3>
                    <p className="text-gray-600">Enterprise Software</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "This AI classifier has revolutionized our customer support
                  workflow. We've seen a 78% reduction in spam reaching our
                  support team, allowing them to focus on genuine customer
                  issues."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="text-yellow-400 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
              </Card>

              <Card className="p-8 shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img
                      src="/healthFirst.jpg"
                      alt="HealthFirst"
                      className="w-16 h-16 rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">HealthFirst</h3>
                    <p className="text-gray-600">Healthcare Provider</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Patient communication security is paramount for us. This
                  solution has not only improved our message filtering but has
                  helped us maintain HIPAA compliance with its advanced security
                  features."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="text-yellow-400 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={
                          star === 5 ? "fas fa-star-half-alt" : "fas fa-star"
                        }
                      ></i>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.8</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <img
              src="/aiTechnology.jpg"
              alt="AI Technology"
              className="w-32 h-32 mx-auto mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Intelligent Message Classification?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of organizations that have transformed their
              communication efficiency with our AI-powered solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-8 py-6 text-lg cursor-pointer">
                <i className="fas fa-play-circle mr-2"></i>
                Try the Classifier
              </Button>
              <Button className="!rounded-button whitespace-nowrap bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg cursor-pointer">
                <i className="fas fa-calendar-alt mr-2"></i>
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">
                  We're on a mission to create safer digital communication
                  through advanced AI technology.
                </p>
                <div className="flex space-x-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-github"></i>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      GDPR Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-8 bg-gray-800" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500">
                © 2025 Message Classifier AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center text-gray-400">
                  <i className="fas fa-shield-alt mr-2"></i>
                  <span>SOC 2 Certified</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <i className="fas fa-lock mr-2"></i>
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="!rounded-button whitespace-nowrap fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default About;
