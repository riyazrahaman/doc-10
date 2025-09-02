import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatPage() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-6 h-6 text-medical-text-dark" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-medical-text-dark">Chat</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-medical-bg rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-medical-text-dark mb-3">
            Chat Coming Soon
          </h2>
          <p className="text-medical-text-medium mb-6 max-w-md mx-auto">
            This page will allow you to chat with doctors and healthcare professionals. Stay tuned for this exciting feature!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-medical-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
