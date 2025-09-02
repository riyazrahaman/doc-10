import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-6 h-6 text-medical-text-dark" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-medical-text-dark">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl md:text-3xl">AS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-medical-text-dark mb-2">
            Andrew Smith
          </h2>
          <p className="text-medical-text-medium mb-6">
            andrew.smith@email.com
          </p>
          <div className="text-center mb-6">
            <p className="text-medical-text-medium">
              Profile management features coming soon! You'll be able to update your information, view medical history, and manage settings.
            </p>
          </div>
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
