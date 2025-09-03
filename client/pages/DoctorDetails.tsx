import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Clock, Search, ChevronDown } from 'lucide-react';

const StatusBar = () => (
  <div className="flex items-center justify-between px-6 py-4">
    <div className="text-[17px] font-medium text-white">9:41</div>
    <div className="flex items-center gap-1">
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="fill-white">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.43412 2.58753C10.8814 2.58764 13.2351 3.55505 15.0088 5.28982C15.1424 5.42375 15.3559 5.42206 15.4874 5.28603L16.7641 3.96045C16.8307 3.89146 16.8679 3.798 16.8673 3.70076C16.8668 3.60353 16.8286 3.51052 16.7612 3.44234C12.1059 -1.14745 4.76162 -1.14745 0.106327 3.44234C0.0388914 3.51047 0.000629527 3.60345 7.69876e-06 3.70069C-0.000614129 3.79792 0.0364554 3.89141 0.103013 3.96045L1.38011 5.28603C1.51156 5.42226 1.72521 5.42396 1.85869 5.28982C3.63258 3.55494 5.98657 2.58752 8.43412 2.58753ZM8.46934 6.58938C9.81397 6.58929 11.1106 7.10346 12.1073 8.03199C12.2421 8.16376 12.4545 8.16091 12.5859 8.02555L13.8612 6.69997C13.9283 6.63044 13.9656 6.53611 13.9646 6.4381C13.9637 6.34008 13.9245 6.24656 13.856 6.17844C10.8208 3.27385 6.12043 3.27385 3.08522 6.17844C3.01666 6.24656 2.97755 6.34013 2.97665 6.43817C2.97575 6.53622 3.01314 6.63054 3.08044 6.69997L4.35532 8.02555C4.48674 8.16091 4.6991 8.16376 4.83391 8.03199C5.82997 7.10408 7.12559 6.58995 8.46934 6.58938ZM11.0625 9.17672C11.0645 9.27501 11.0269 9.36977 10.9587 9.43863L8.75277 11.7289C8.6881 11.7962 8.59994 11.834 8.50795 11.834C8.41596 11.834 8.3278 11.7962 8.26314 11.7289L6.05685 9.43863C5.98869 9.36972 5.9512 9.27492 5.95322 9.17663C5.95524 9.07834 5.9966 8.98527 6.06752 8.91938C7.47631 7.69354 9.5396 7.69354 10.9484 8.91938C11.0193 8.98532 11.0605 9.07843 11.0625 9.17672Z" fill="white"/>
      </svg>
      <svg width="29" height="13" viewBox="0 0 29 13" fill="none">
        <path opacity="0.35" d="M4.81268 0.5H21.8127C23.7457 0.5 25.3127 2.067 25.3127 4V9C25.3127 10.933 23.7457 12.5 21.8127 12.5H4.81268C2.87969 12.5 1.31268 10.933 1.31268 9V4C1.31268 2.067 2.87969 0.5 4.81268 0.5Z" stroke="white"/>
        <path opacity="0.4" d="M26.8127 5V9.22034C27.6617 8.86291 28.2139 8.0314 28.2139 7.11017C28.2139 6.18894 27.6617 5.35744 26.8127 5Z" fill="white"/>
        <path d="M2.81268 4C2.81268 2.89543 3.70811 2 4.81268 2H21.8127C22.9173 2 23.8127 2.89543 23.8127 4V9C23.8127 10.1046 22.9173 11 21.8127 11H4.81268C3.70811 11 2.81268 10.1046 2.81268 9V4Z" fill="white"/>
      </svg>
    </div>
  </div>
);

const HeaderSection = () => (
  <div className="flex items-center justify-between px-6 py-2">
    <div className="flex items-center gap-4">
      <Link to="/search" className="flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L6.52549 7.47452C4.94142 9.05858 4.14938 9.85062 3.85263 10.7639C3.5916 11.5673 3.5916 12.4327 3.85263 13.2361C4.14938 14.1494 4.94142 14.9414 6.52548 16.5255L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <h1 className="text-white font-bold text-base">Doctor's Info</h1>
    </div>
    <div className="flex items-center gap-6">
      <div className="w-6 h-6 relative">
        <div className="w-3 h-3 transform rotate-45 border-2 border-white rounded-sm absolute top-0.5 left-0.5"></div>
        <svg width="6" height="6" viewBox="0 0 8 8" fill="none" className="absolute bottom-0 right-0">
          <path d="M1 1L7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <span className="text-sm font-semibold text-[#33384B]">{doctor.rating}</span>
              <Star className="w-4 h-4 fill-[#F9E000] text-[#F9E000]" strokeWidth={1} />
            </div>
          </div>
          <p className="text-base text-[#7D8A95] mb-2">{doctor.specialty} | {doctor.hospital}</p>
          <div className="flex items-center gap-2">
            <Clock className="w-[18px] h-[18px] text-[#7D8A95]" strokeWidth={1.5} />
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
    { time: "4:30am - 5:30pm", available: false }
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
                ? 'text-[#33384B] hover:bg-[#2E6FF3] hover:text-white transition-colors' 
                : 'text-[#33384B] opacity-50 cursor-not-allowed'
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

const BookAppointmentButton = () => (
  <div className="bg-white px-6 pb-6">
    <button className="w-full bg-[#2E6FF3] text-white font-bold text-base py-4 px-6 rounded-full hover:bg-blue-600 transition-colors">
      Book Appointment
    </button>
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
    id: doctorId || '2',
    name: "David H. Brown",
    specialty: "Psychologists",
    hospital: "Apollo hospital",
    rating: "4.8",
    hours: "10:30am - 5:30pm",
    isFavorite: false
  };

  return (
    <div className="max-w-md mx-auto bg-[#2E6FF3] min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <StatusBar />
      <HeaderSection />
      
      <div className="flex-1 flex flex-col">
        <DoctorImageSection />
        <DoctorInfoCard doctor={doctor} />
        <DateSelection />
        <ScheduleSelection />
        <BookAppointmentButton />
      </div>
    </div>
  );
}
