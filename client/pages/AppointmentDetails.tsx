import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Search, Heart, Star } from "lucide-react";

const HeaderSection = ({ doctorId }: { doctorId: string }) => (
  <div className="flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-4">
      <Link to={`/doctor/${doctorId}`} className="flex items-center justify-center">
        <ArrowLeft className="w-6 h-6 text-[#33384B]" strokeWidth={2} />
      </Link>
      <h1 className="text-[#33384B] font-bold text-base font-['Open_Sans']">
        Appointment Details
      </h1>
    </div>
    <div className="flex items-center gap-6">
      <div className="w-6 h-6 relative">
        <div className="w-3 h-3 transform -rotate-45 border-2 border-[#33384B] rounded-sm absolute top-0.5 left-0.5"></div>
        <svg
          width="6"
          height="6"
          viewBox="0 0 8 8"
          fill="none"
          className="absolute bottom-0 right-0"
        >
          <path
            d="M1 1L7 7"
            stroke="#33384B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Heart className="w-6 h-6 text-[#33384B]" strokeWidth={2} />
    </div>
  </div>
);

const DoctorCard = ({ doctor }: { doctor: any }) => (
  <div className="flex justify-center px-6 pb-20">
    <div className="bg-[#FAFAFC] border border-[#F4F4F6] rounded-2xl p-4 w-full max-w-sm">
      <div className="flex items-start gap-2">
        {/* Doctor avatar */}
        <div className="w-8 h-8 bg-gray-300 rounded-full border border-[#F4F4F6] flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b0ed2adb7b738c1e6f44bcf71d320cdaf72e3fec?width=32"
            alt="Doctor"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        
        {/* Doctor info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-[#33384B] font-semibold text-sm font-['Open_Sans'] truncate">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-[#33384B] font-semibold text-sm font-['Open_Sans']">
                {doctor.rating}
              </span>
              <Star
                className="w-4 h-4 fill-[#F9E000] text-[#EED600]"
                strokeWidth={1}
              />
            </div>
          </div>
          
          <p className="text-[#AAB6C3] text-sm font-['Open_Sans'] mb-2">
            {doctor.specialty} | {doctor.hospital}
          </p>
          
          <p className="text-[#33384B] text-sm font-['Open_Sans']">
            <span className="font-normal">Hourly Rate:</span>{" "}
            <span className="font-bold">{doctor.hourlyRate}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ScheduleSection = () => (
  <div className="px-6 pb-6">
    <h2 className="text-[#33384B] font-bold text-lg font-['Open_Sans'] mb-6">
      Schedule
    </h2>
    
    <div className="flex justify-center items-center gap-6">
      {/* Date card */}
      <div className="bg-[#FAFAFC] border border-[#F4F4F6] rounded-xl px-4 py-4 flex-1 max-w-[152px]">
        <div className="text-center">
          <div className="text-[#33384B] font-bold text-base font-['Open_Sans'] mb-1">
            8 October, Sun
          </div>
          <div className="text-[#AAB6C3] font-medium text-base font-['Open_Sans']">
            Date
          </div>
        </div>
      </div>
      
      {/* Time card */}
      <div className="bg-[#FAFAFC] border border-[#F4F4F6] rounded-xl px-4 py-4 flex-1 max-w-[150px]">
        <div className="text-center">
          <div className="text-[#33384B] font-bold text-base font-['Open_Sans'] mb-1">
            2:30am-3:30pm
          </div>
          <div className="text-[#AAB6C3] font-medium text-base font-['Open_Sans']">
            Time
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MessageSection = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="px-6 pb-6">
      <h2 className="text-[#33384B] font-bold text-lg font-['Open_Sans'] mb-6">
        Message
      </h2>
      
      <div className="bg-[#FAFAFC] border border-[#F4F4F6] rounded-2xl">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message for the doctor"
          className="w-full h-32 px-4 py-4 bg-transparent text-[#33384B] placeholder-[#B2BCC9] text-sm font-['Open_Sans'] resize-none outline-none rounded-2xl"
          rows={6}
        />
      </div>
    </div>
  );
};

const NextButton = () => (
  <div className="px-6 pb-6">
    <button className="w-full bg-[#2E6FF3] text-white font-bold text-base font-['Open_Sans'] py-4 px-6 rounded-[32px] hover:bg-blue-600 transition-colors">
      Next
    </button>
  </div>
);

export default function AppointmentDetailsPage() {
  const { doctorId } = useParams();
  const location = useLocation();

  // Get doctor data from navigation state or use mock data
  const doctor = location.state?.doctor || {
    id: doctorId || "2",
    name: "David H. Brown",
    specialty: "Psychologists",
    hospital: "Apollo hospital",
    rating: "4.8",
    hourlyRate: "$25.00",
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <HeaderSection doctorId={doctor.id} />
      
      <div className="flex-1 flex flex-col gap-8 pt-8">
        <DoctorCard doctor={doctor} />
        <ScheduleSection />
        <MessageSection />
        <NextButton />
      </div>
    </div>
  );
}
