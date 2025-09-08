import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Star,
  Clock,
  Search,
  ChevronDown,
} from "lucide-react";


const HeaderSection = () => (
  <div className="flex items-center justify-between px-6 py-2">
    <div className="flex items-center gap-4">
      <Link to="/search" className="flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12L4 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6L6.52549 7.47452C4.94142 9.05858 4.14938 9.85062 3.85263 10.7639C3.5916 11.5673 3.5916 12.4327 3.85263 13.2361C4.14938 14.1494 4.94142 14.9414 6.52548 16.5255L8 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h1 className="text-white font-bold text-base">Doctor's Info</h1>
    </div>
    <div className="flex items-center gap-6">
      <div className="w-6 h-6 relative">
        <div className="w-3 h-3 transform rotate-45 border-2 border-white rounded-sm absolute top-0.5 left-0.5"></div>
        <svg
          width="6"
          height="6"
          viewBox="0 0 8 8"
          fill="none"
          className="absolute bottom-0 right-0"
        >
          <path
            d="M1 1L7 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Heart className="w-6 h-6 text-white" strokeWidth={2} />
    </div>
  </div>
);

const DoctorImageSection = () => (
  <div className="relative flex justify-center">
    {/* Background wave illustration */}
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/d7452afa9dc9f5e3bac155d10b909fe995d7fe27?width=748"
      alt="Background wave"
      className="w-full h-28 object-cover"
    />
    {/* Doctor image */}
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/b0ed2adb7b738c1e6f44bcf71d320cdaf72e3fec?width=412"
      alt="Doctor"
      className="absolute top-0 w-52 h-68 object-cover"
    />
  </div>
);

const DoctorInfoCard = ({ doctor }: { doctor: any }) => {
  const [isFavorite, setIsFavorite] = useState(doctor.isFavorite);

  return (
    <div className="bg-white rounded-t-[40px] shadow-lg relative -mt-4 px-6 pt-12 pb-10">
      <div className="flex flex-col items-start gap-6">
        {/* Doctor basic info */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-[#33384B]">{doctor.name}</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[#33384B]">
                {doctor.rating}
              </span>
              <Star
                className="w-4 h-4 fill-[#F9E000] text-[#F9E000]"
                strokeWidth={1}
              />
            </div>
          </div>
          <p className="text-base text-[#7D8A95] mb-2">
            {doctor.specialty} | {doctor.hospital}
          </p>
          <div className="flex items-center gap-2">
            <Clock
              className="w-[18px] h-[18px] text-[#7D8A95]"
              strokeWidth={1.5}
            />
            <span className="text-sm text-[#33384B]">{doctor.hours}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F4F4F6]"></div>

        {/* Statistics */}
        <div className="flex justify-center items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-1">
            <span className="text-base font-bold text-[#33384B]">15yr</span>
            <span className="text-base text-[#7D8A95]">Experience</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-base font-bold text-[#33384B]">50+</span>
            <span className="text-base text-[#7D8A95]">Treated</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-base font-bold text-[#33384B]">$25.00</span>
            <span className="text-base text-[#7D8A95]">Hourly Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DateSelection = () => (
  <div className="bg-white px-6 py-6">
    <h3 className="text-lg font-bold text-[#33384B] mb-6">Select Date</h3>
    <div className="flex gap-4">
      <div className="flex-1 flex items-center justify-between px-4 py-4 bg-[#FAFAFC] border border-[#F4F4F6] rounded-lg">
        <span className="text-sm text-[#AAB6C3]">Day</span>
        <ChevronDown className="w-6 h-6 text-[#B2BCC9]" strokeWidth={2} />
      </div>
      <div className="flex-1 flex items-center justify-between px-4 py-4 bg-[#FAFAFC] border border-[#F4F4F6] rounded-lg">
        <span className="text-sm text-[#AAB6C3]">Month</span>
        <ChevronDown className="w-6 h-6 text-[#B2BCC9]" strokeWidth={2} />
      </div>
    </div>
  </div>
);

const ScheduleSelection = () => {
  const timeSlots = [
    { time: "10:30am - 11:30am", available: true },
    { time: "11:30am - 12:30pm", available: true },
    { time: "12:30am - 1:30pm", available: false },
    { time: "2:30am - 3:30pm", available: true },
    { time: "3:30am - 4:30pm", available: true },
    { time: "4:30am - 5:30pm", available: false },
  ];

  return (
    <div className="bg-white px-6 pb-6">
      <h3 className="text-lg font-bold text-[#33384B] mb-4">Schedules</h3>
      <div className="flex flex-wrap gap-4">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`px-4 py-3 rounded-full border border-[#F0F4FC] text-xs font-semibold ${
              slot.available
                ? "text-[#33384B] hover:bg-[#2E6FF3] hover:text-white transition-colors"
                : "text-[#33384B] opacity-50 cursor-not-allowed"
            }`}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

const BookAppointmentButton = ({ doctor }: { doctor: any }) => (
  <div className="bg-white px-6 pb-6">
    <Link
      to={`/appointment/${doctor.id}`}
      state={{ doctor }}
      className="w-full bg-[#2E6FF3] text-white font-bold text-base py-4 px-6 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
    >
      Book Appointment
    </Link>
    {/* Bottom indicator */}
    <div className="flex justify-center mt-4">
      <div className="w-16 h-1 bg-[#F1F2F6] rounded-full"></div>
    </div>
  </div>
);

export default function DoctorDetailsPage() {
  const { doctorId } = useParams();

  // Mock doctor data - in a real app, this would come from an API based on doctorId
  const doctor = {
    id: doctorId || "2",
    name: "David H. Brown",
    specialty: "Psychologists",
    hospital: "Apollo hospital",
    rating: "4.8",
    hours: "10:30am - 5:30pm",
    isFavorite: false,
  };

  return (
    <div className="max-w-md mx-auto bg-[#2E6FF3] min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <HeaderSection />

      <div className="flex-1 flex flex-col">
        <DoctorImageSection />
        <DoctorInfoCard doctor={doctor} />
        <DateSelection />
        <ScheduleSelection />
        <BookAppointmentButton doctor={doctor} />
      </div>
    </div>
  );
}
