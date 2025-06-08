import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { saveContact } from "@/lib/api";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const isFormValid =
    formData.name.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim().length > 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please complete the form with valid data.");
      return;
    }
    setIsSubmitting(true);

    const error = await saveContact(
      formData.name,
      formData.email,
      formData.message
    );

    setIsSubmitting(false);

    if (error) {
      toast.error("Submission failed. Please try again.");
    } else {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Toaster />

      <Helmet>
        <title>Contact Us - InboxIQ</title>
        <meta
          name="description"
          content="Reach out to the InboxIQ team with your queries or feedback."
        />
      </Helmet>

      <div className="min-h-[1024px] w-full bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:py-24">
          <div className="w-full mb-8">
            <Button
              onClick={() => navigate("/")}
              className="!rounded-button whitespace-nowrap flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm"
            >
              <i className="fas fa-arrow-left text-sm"></i>
              Back to Home
            </Button>
          </div>

          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>
            <p className="text-lg text-slate-700 max-w-2xl">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form Section */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-t-lg"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-t-lg">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                      Send us a message
                    </h2>
                    <p className="text-slate-600 mb-0">
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-white">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          className="w-full border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="w-full min-h-[150px] border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          required
                        />
                        {formData.message &&
                          formData.message.trim().length <= 10 && (
                            <p className="text-red-500 text-sm mt-1">
                              Message must be at least 10 characters.
                            </p>
                          )}
                      </div>

                      <div>
                        <Button
                          type="submit"
                          disabled={isSubmitting || !isFormValid}
                          className="!rounded-button whitespace-nowrap w-full sm:w-auto px-8 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <i className="fas fa-circle-notch fa-spin mr-2"></i>
                              Sending...
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Information Section */}
            <div className="lg:col-span-2">
              <Card className="h-full border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                      Contact Information
                    </h2>
                    <p className="text-slate-600">
                      Have questions or need assistance? Reach out to us through
                      any of these channels.
                    </p>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-slate-900">
                          Email
                        </h3>
                        <p className="mt-1 text-slate-700">
                          <a
                            href="mailto:contact@company.com"
                            className="hover:text-blue-600 transition-colors"
                          >
                            contact@company.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-slate-900">
                          Phone
                        </h3>
                        <p className="mt-1 text-slate-700">
                          <a
                            href="tel:+15551234567"
                            className="hover:text-blue-600 transition-colors"
                          >
                            +1 (555) 123-4567
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-slate-900">
                          Office
                        </h3>
                        <p className="mt-1 text-slate-700">
                          123 Business Avenue
                          <br />
                          Suite 500
                          <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-medium text-slate-900 mb-4">
                      Connect with us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-all duration-200 cursor-pointer"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition-all duration-200 cursor-pointer"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-200 cursor-pointer"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-medium text-slate-900 mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-slate-700">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and
                support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What are your response times?
                </h3>
                <p className="text-slate-700">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call our support
                  line for immediate assistance.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Do you offer technical support?
                </h3>
                <p className="text-slate-700">
                  Yes, we provide comprehensive technical support for all our
                  products and services. Our support team is available Monday
                  through Friday from 9 AM to 6 PM.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Can I schedule a consultation?
                </h3>
                <p className="text-slate-700">
                  Absolutely! You can request a consultation through our contact
                  form or by calling our office. We'll arrange a time that works
                  best for your schedule.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  How can I provide feedback?
                </h3>
                <p className="text-slate-700">
                  We value your feedback! You can share your thoughts through
                  our contact form, email, or by participating in our customer
                  satisfaction surveys.
                </p>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-24 text-center text-slate-600">
            <p>
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <p className="mt-2">Last updated: June 6, 2025</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Contact;
