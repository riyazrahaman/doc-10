import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, Calendar, Clock, Star, Home, BookOpen, MessageCircle, User, ArrowLeft } from 'lucide-react';

const StatusBar = () => (
  <div className="flex items-center justify-between px-6 py-4 bg-white">
    <div className="text-[17px] font-medium text-[#1F2E3D]">9:41</div>
    <div className="flex items-center gap-1">
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="fill-[#1F2E3D]">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.43412 2.58753C10.8814 2.58764 13.2351 3.55505 15.0088 5.28982C15.1424 5.42375 15.3559 5.42206 15.4874 5.28603L16.7641 3.96045C16.8307 3.89146 16.8679 3.798 16.8673 3.70076C16.8668 3.60353 16.8286 3.51052 16.7612 3.44234C12.1059 -1.14745 4.76162 -1.14745 0.106327 3.44234C0.0388914 3.51047 0.000629527 3.60345 7.69876e-06 3.70069C-0.000614129 3.79792 0.0364554 3.89141 0.103013 3.96045L1.38011 5.28603C1.51156 5.42226 1.72521 5.42396 1.85869 5.28982C3.63258 3.55494 5.98657 2.58752 8.43412 2.58753ZM8.46934 6.58938C9.81397 6.58929 11.1106 7.10346 12.1073 8.03199C12.2421 8.16376 12.4545 8.16091 12.5859 8.02555L13.8612 6.69997C13.9283 6.63044 13.9656 6.53611 13.9646 6.4381C13.9637 6.34008 13.9245 6.24656 13.856 6.17844C10.8208 3.27385 6.12043 3.27385 3.08522 6.17844C3.01666 6.24656 2.97755 6.34013 2.97665 6.43817C2.97575 6.53622 3.01314 6.63054 3.08044 6.69997L4.35532 8.02555C4.48674 8.16091 4.6991 8.16376 4.83391 8.03199C5.82997 7.10408 7.12559 6.58995 8.46934 6.58938ZM11.0625 9.17672C11.0645 9.27501 11.0269 9.36977 10.9587 9.43863L8.75277 11.7289C8.6881 11.7962 8.59994 11.834 8.50795 11.834C8.41596 11.834 8.3278 11.7962 8.26314 11.7289L6.05685 9.43863C5.98869 9.36972 5.9512 9.27492 5.95322 9.17663C5.95524 9.07834 5.9966 8.98527 6.06752 8.91938C7.47631 7.69354 9.5396 7.69354 10.9484 8.91938C11.0193 8.98532 11.0605 9.07843 11.0625 9.17672Z" fill="#1F2E3D"/>
      </svg>
      <svg width="29" height="13" viewBox="0 0 29 13" fill="none">
        <path opacity="0.35" d="M4.81268 0.5H21.8127C23.7457 0.5 25.3127 2.067 25.3127 4V9C25.3127 10.933 23.7457 12.5 21.8127 12.5H4.81268C2.87969 12.5 1.31268 10.933 1.31268 9V4C1.31268 2.067 2.87969 0.5 4.81268 0.5Z" stroke="#1F2E3D"/>
        <path opacity="0.4" d="M26.8127 5V9.22034C27.6617 8.86291 28.2139 8.0314 28.2139 7.11017C28.2139 6.18894 27.6617 5.35744 26.8127 5Z" fill="#1F2E3D"/>
        <path d="M2.81268 4C2.81268 2.89543 3.70811 2 4.81268 2H21.8127C22.9173 2 23.8127 2.89543 23.8127 4V9C23.8127 10.1046 22.9173 11 21.8127 11H4.81268C3.70811 11 2.81268 10.1046 2.81268 9V4Z" fill="#1F2E3D"/>
      </svg>
    </div>
  </div>
);

const SearchHeader = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) => (
  <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
    <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
      <ArrowLeft className="w-6 h-6 text-medical-text-dark" />
    </Link>
    <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
      <Search className="w-5 h-5 text-medical-text-medium" />
      <input
        type="text"
        placeholder="Search for doctors"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 bg-transparent text-medical-text-dark placeholder-medical-text-light text-base outline-none"
        autoFocus
      />
    </div>
  </div>
);

const AppointmentCard = ({ doctor, specialty, rating, date, time }: {
  doctor: string;
  specialty: string;
  rating: string;
  date: string;
  time: string;
}) => (
  <div className="bg-medical-primary rounded-2xl p-4 md:p-6 flex flex-col gap-4 min-w-[280px] md:min-w-0 flex-shrink-0 w-full">
    <div className="flex items-start gap-2 md:gap-3">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
        <span className="text-white font-semibold text-sm md:text-base">{doctor[0]}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-sm md:text-base">{doctor}</p>
            <p className="text-blue-200 text-sm md:text-base">{specialty}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-white text-sm md:text-base">{rating}</span>
          <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex items-center gap-2">
        <Calendar className="w-[18px] h-[18px] md:w-5 md:h-5 text-blue-200" />
        <span className="text-white text-sm md:text-base font-semibold">{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-[18px] h-[18px] md:w-5 md:h-5 text-blue-200" />
        <span className="text-white text-sm md:text-base font-semibold">{time}</span>
      </div>
    </div>
  </div>
);

const CategoryCard = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-1 p-2 md:p-3 lg:p-4 rounded-2xl bg-medical-bg min-w-[64px] md:min-w-[80px] lg:min-w-[96px] hover:bg-medical-primary-lighter transition-colors cursor-pointer">
    <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-medical-text-dark">
      {icon}
    </div>
    <span className="text-xs md:text-sm font-semibold text-medical-text-medium text-center">{label}</span>
  </div>
);

const DoctorCard = ({ name, specialty, hospital, rating, hours, isFavorite }: {
  name: string;
  specialty: string;
  hospital: string;
  rating: string;
  hours: string;
  isFavorite: boolean;
}) => (
  <div className="bg-medical-bg-light border border-[#F4F4F6] rounded-2xl p-4 md:p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-2 md:gap-3">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
        <span className="text-white font-semibold text-sm md:text-base">{name[0]}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-medical-text-dark font-semibold text-sm md:text-base">{name}</p>
            <p className="text-medical-text-light text-sm md:text-base">{specialty} | {hospital}</p>
          </div>
          <Heart className={`w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition-transform ${isFavorite ? 'fill-medical-favorite text-medical-favorite' : 'text-medical-favorite'}`} />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <span className="text-medical-text-dark text-sm md:text-base">{rating}</span>
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-[18px] h-[18px] md:w-5 md:h-5 text-medical-text-medium" />
            <span className="text-medical-text-dark text-sm md:text-base">{hours}</span>
          </div>
        </div>
      </div>
    </div>
    <button className="bg-medical-primary-light text-medical-primary font-semibold text-sm md:text-base py-3 md:py-4 px-4 md:px-6 rounded-full hover:bg-medical-primary hover:text-white transition-colors">
      Book Appointment
    </button>
  </div>
);

const BottomNav = () => {
  const location = useLocation();
  
  const NavItem = ({ to, icon: Icon, label, isActive }: {
    to: string;
    icon: React.ComponentType<any>;
    label: string;
    isActive: boolean;
  }) => (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
    >
      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? 'text-white' : 'text-blue-200'}`} />
      <span className={`text-xs md:text-sm ${isActive ? 'text-white font-semibold' : 'text-blue-200'}`}>
        {label}
      </span>
    </Link>
  );

  return (
    <div className="bg-medical-primary px-6 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between fixed bottom-0 left-0 right-0 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <NavItem to="/" icon={Home} label="Home" isActive={location.pathname === '/'} />
      <NavItem to="/bookings" icon={BookOpen} label="Bookings" isActive={location.pathname === '/bookings'} />
      <NavItem to="/chat" icon={MessageCircle} label="Chat" isActive={location.pathname === '/chat'} />
      <NavItem to="/profile" icon={User} label="Profile" isActive={location.pathname === '/profile'} />
    </div>
  );
};

// Medical icons as SVG components
const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 19.8332V19.8332C14 17.1916 14 15.8708 13.5425 14.8385C13.0059 13.6282 12.0384 12.6606 10.828 12.1241C9.79574 11.6665 8.47494 11.6665 5.83333 11.6665H3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.1667 7V7C15.1667 5.067 16.7337 3.5 18.6667 3.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 8.16667V5.83333C7 4.54467 8.04467 3.5 9.33333 3.5V3.5C10.622 3.5 11.6667 4.54467 11.6667 5.83333V5.83333C11.6667 6.47767 12.189 7 12.8333 7H17.5C17.9643 7 18.1964 7 18.3923 7.01445C21.0285 7.2089 23.1244 9.30488 23.3189 11.941C23.3333 12.1369 23.3333 12.369 23.3333 12.8333V13.6111C23.3333 13.8174 23.3333 13.9206 23.3319 14.0079C23.2377 19.7623 18.5956 24.4044 12.8412 24.4986C12.7539 24.5 12.6508 24.5 12.4444 24.5V24.5C12.3413 24.5 12.2897 24.5 12.2461 24.4993C9.36887 24.4522 7.0478 22.1311 7.00071 19.2539C7 19.2103 7 19.1587 7 19.0556V15.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.16669 11.6665H14C16.5773 11.6665 18.6667 13.7558 18.6667 16.3332V16.3332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToothIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M11.7081 5.87463L12.0858 6.25229C12.1124 6.27884 12.1256 6.29212 12.137 6.30321C13.173 7.31484 14.827 7.31484 15.863 6.30321C15.8744 6.29212 15.8877 6.27885 15.9142 6.25231L15.9142 6.25229L16.2919 5.87463C17.0654 5.10108 18.1146 4.6665 19.2086 4.6665C21.4866 4.6665 23.3334 6.51323 23.3334 8.79129V11.1833C23.3334 12.2397 22.9137 13.2528 22.1667 13.9998C21.4197 14.7468 21 15.76 21 16.8164V22.3367C21 23.5314 20.0316 24.4998 18.8369 24.4998C18.0176 24.4998 17.2686 24.0369 16.9022 23.3041L15.5653 20.6303L15.5653 20.6303C15.2474 19.9945 15.0884 19.6766 14.9197 19.5159C14.4047 19.0253 13.5953 19.0253 13.0803 19.5159C12.9116 19.6766 12.7527 19.9945 12.4348 20.6303L11.0979 23.3041C10.7315 24.0369 9.98247 24.4998 9.16314 24.4998C7.96848 24.4998 7.00002 23.5314 7.00002 22.3367V16.8164C7.00002 15.76 6.58036 14.7468 5.83335 13.9998C5.08635 13.2528 4.66669 12.2397 4.66669 11.1833V8.79129C4.66669 6.51324 6.51342 4.6665 8.79148 4.6665C9.88544 4.6665 10.9346 5.10108 11.7081 5.87463Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="12.8332" r="1.16667" fill="currentColor"/>
    <circle cx="9.33335" cy="10.5002" r="1.16667" fill="currentColor"/>
    <circle cx="18.6667" cy="10.5002" r="1.16667" fill="currentColor"/>
  </svg>
);

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic would go here - for now showing all content
  const filteredDoctors = [
    { name: "Jennifer Miller", specialty: "Pediatrician", hospital: "Mercy Hospital", rating: "4.8", hours: "10:30am - 5:30pm", isFavorite: false },
    { name: "Robert Johnson", specialty: "Neurologist", hospital: "ABC hospital", rating: "4.8", hours: "10:30am - 5:30pm", isFavorite: true },
    { name: "Laura White", specialty: "Dentist", hospital: "Cedar Dental care", rating: "4.8", hours: "10:30am - 5:30pm", isFavorite: false },
    { name: "Brian Clark", specialty: "Psychiatrist", hospital: "ABC hospital", rating: "4.8", hours: "10:30am - 5:30pm", isFavorite: false },
  ].filter(doctor => 
    searchQuery === '' || 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <StatusBar />
      <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="flex-1 pb-16 md:pb-20 lg:pb-24 overflow-y-auto">
        {searchQuery === '' ? (
          // Show default content when no search query
          <>
            {/* Upcoming Appointments */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-medical-text-dark mb-4 md:mb-6">
                Upcoming Appointments
              </h2>
              <div className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
                <AppointmentCard
                  doctor="Jason Smith"
                  specialty="Dentist"
                  rating="4.8"
                  date="5 Oct"
                  time="10:30pm"
                />
                <AppointmentCard
                  doctor="Melisa Adam"
                  specialty="Pediatrician"
                  rating="4.8"
                  date="6 Oct"
                  time="10:30pm"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-medical-text-dark">Categories</h2>
                <span className="text-sm md:text-base text-medical-primary hover:underline cursor-pointer">See all</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-2 md:gap-3 lg:gap-4">
                <CategoryCard icon={<HeartIcon />} label="Heart" />
                <CategoryCard icon={<ToothIcon />} label="Dental" />
                {/* Add other category icons here */}
              </div>
            </div>
          </>
        ) : (
          // Show search results
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-medical-text-dark mb-2">
                Search Results
              </h2>
              <p className="text-medical-text-medium">
                {filteredDoctors.length} doctors found for "{searchQuery}"
              </p>
            </div>
            
            {filteredDoctors.length > 0 ? (
              <div className="space-y-3 md:space-y-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 lg:space-y-0">
                {filteredDoctors.map((doctor, index) => (
                  <DoctorCard
                    key={index}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    hospital={doctor.hospital}
                    rating={doctor.rating}
                    hours={doctor.hours}
                    isFavorite={doctor.isFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-medical-bg rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-medical-text-medium" />
                </div>
                <h3 className="text-lg font-semibold text-medical-text-dark mb-2">No doctors found</h3>
                <p className="text-medical-text-medium">Try searching with different keywords</p>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
