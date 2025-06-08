import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center md:items-start justify-center">
              <div className="text-center md:text-left">
                <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  404
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                  Oops! Page not found
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md">
                  The page you're looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>
                <Button
                  aria-label="Go back to home page"
                  className="!rounded-button whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </div>
            </div>

            {/* Illustration Section */}
            <div className="w-full md:w-1/2 p-4 md:p-0">
              <img
                src="/404.jpg"
                alt="404 Error Illustration"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
