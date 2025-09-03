import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, Calendar, Clock, Star, Home, BookOpen, MessageCircle, User } from 'lucide-react';

const Header = () => (
  <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-4">
    <div className="flex items-center gap-2 md:gap-3">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
        <span className="text-white font-semibold text-lg md:text-xl">AS</span>
      </div>
      <div>
        <p className="text-sm md:text-base text-medical-text-medium">Welcome Back</p>
        <p className="text-base md:text-lg font-medium text-medical-text-dark">Andrew Smith</p>
      </div>
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <Link to="/search" className="p-2 -m-2 rounded-full hover:bg-gray-100 transition-colors">
        <Search className="w-6 h-6 md:w-7 md:h-7 text-medical-text-dark hover:text-medical-primary transition-colors" />
      </Link>
      <Heart className="w-6 h-6 md:w-7 md:h-7 text-medical-text-dark cursor-pointer hover:text-medical-favorite transition-colors" />
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

const DoctorCard = ({ id, name, specialty, hospital, rating, hours, isFavorite }: {
  id: string;
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
    <Link to={`/doctor/${id}`} className="bg-medical-primary-light text-medical-primary font-semibold text-sm md:text-base py-3 md:py-4 px-4 md:px-6 rounded-full hover:bg-medical-primary hover:text-white transition-colors text-center">
      Book Appointment
    </Link>
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

const KidneyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 14V14C16.6416 14 17.9624 14 18.9946 14.4575C20.205 14.9941 21.1726 15.9616 21.7091 17.172C22.1667 18.2043 22.1667 19.5251 22.1667 22.1667V24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14H15.1667C16.7163 14 17.4911 14 18.1292 13.8402C20.0382 13.362 21.5287 11.8715 22.0068 9.96256C22.1667 9.32447 22.1667 8.54965 22.1667 7V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5333 15.6917L14.8314 16.6652C16.4059 17.8461 16.9921 19.9365 16.2611 21.7639C15.6001 23.4164 13.9987 24.5 12.2188 24.5C7.40506 24.5 3.5 20.5977 3.5 15.7839V12.1406C3.5 7.36853 7.36853 3.5 12.1406 3.5C13.9573 3.5 15.58 4.63653 16.2008 6.34387L16.3094 6.64242C17.0165 8.58711 16.3682 10.7655 14.7128 12.0071L13.5333 12.8917C13.0927 13.2222 12.8333 13.7408 12.8333 14.2917C12.8333 14.8425 13.0927 15.3612 13.5333 15.6917Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StomachIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M24.5 12.621V9.33317C24.5 8.71394 24.5 8.40433 24.4658 8.1444C24.2295 6.34947 22.8171 4.93703 21.0221 4.70072C20.7622 4.6665 20.4526 4.6665 19.8334 4.6665C19.2141 4.6665 18.9045 4.6665 18.6446 4.70072C16.8496 4.93703 15.4372 6.34947 15.2009 8.1444C15.1667 8.40433 15.1667 8.71394 15.1667 9.33316V13.9998C15.1667 15.9328 13.5997 17.4998 11.6667 17.4998C9.73369 17.4998 8.16669 19.0668 8.16669 20.9998C8.16669 22.9328 9.73369 24.4998 11.6667 24.4998H12.6212C13.7469 24.4998 14.3097 24.4998 14.7841 24.4574C19.924 23.9974 23.9976 19.9239 24.4576 14.7839C24.5 14.3095 24.5 13.7467 24.5 12.621Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33331 3.5V3.5C9.33331 5.20744 9.33331 6.06116 9.58969 6.74233C9.99544 7.82039 10.8463 8.6712 11.9243 9.07696C12.6055 9.33333 13.4592 9.33333 15.1666 9.33333V9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 24.5V24.5C3.5 22.567 5.067 21 7 21H8.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LungIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M11.6667 9.625V19.25C11.6667 19.3274 11.6667 19.3661 11.6662 19.3988C11.6308 21.5567 9.89004 23.2975 7.73213 23.3328C7.69941 23.3333 7.66073 23.3333 7.58335 23.3333C7.50598 23.3333 7.4673 23.3333 7.43458 23.3328C5.27667 23.2975 3.53587 21.5567 3.50056 19.3988C3.50002 19.3661 3.50002 19.3274 3.50002 19.25V13.7C3.50002 12.5267 3.50002 11.94 3.6538 11.4015C3.79001 10.9246 4.01372 10.4772 4.31353 10.0821C4.65203 9.636 5.12136 9.284 6.06002 8.58L7.46669 7.525C7.92107 7.18422 8.47372 7 9.04169 7C10.4914 7 11.6667 8.17525 11.6667 9.625Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3333 10.2998V19.25C16.3333 19.3274 16.3333 19.3661 16.3338 19.3988C16.3692 21.5567 18.11 23.2975 20.2679 23.3328C20.3006 23.3333 20.3393 23.3333 20.4166 23.3333C20.494 23.3333 20.5327 23.3333 20.5654 23.3328C22.7233 23.2975 24.4641 21.5567 24.4994 19.3988C24.5 19.3661 24.5 19.3274 24.5 19.25V12.9749C24.5 12.1702 24.5 11.7679 24.425 11.3862C24.3225 10.8642 24.117 10.3679 23.8204 9.92637C23.6035 9.60348 23.319 9.31899 22.75 8.75L21.9665 7.9665C21.3476 7.34766 20.5083 7 19.6331 7C17.8107 7 16.3333 8.47738 16.3333 10.2998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2.3335V9.3335C14 11.2665 15.567 12.8335 17.5 12.8335V12.8335C19.433 12.8335 21 14.4005 21 16.3335V16.9168" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2.3335V9.3335C14 11.2665 12.433 12.8335 10.5 12.8335V12.8335C8.567 12.8335 7 14.4005 7 16.3335V16.9168" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M7 10.5V7C7 6.84525 7 6.76788 7.00257 6.70247C7.07086 4.96429 8.46429 3.57086 10.2025 3.50257C10.2679 3.5 10.3453 3.5 10.5 3.5C10.6547 3.5 10.7321 3.5 10.7975 3.50257C12.5357 3.57086 13.9291 4.96429 13.9974 6.70247C14 6.76788 14 6.84525 14 7V21C14 21.1547 14 21.2321 13.9974 21.2975C13.9291 23.0357 12.5357 24.4291 10.7975 24.4974C10.7321 24.5 10.6547 24.5 10.5 24.5C10.3453 24.5 10.2679 24.5 10.2025 24.4974C8.46429 24.4291 7.07086 23.0357 7.00257 21.2975C7 21.2321 7 21.1547 7 21V17.5C6.84525 17.5 6.76788 17.5 6.70247 17.4974C4.96429 17.4291 3.57086 16.0357 3.50257 14.2975C3.5 14.2321 3.5 14.1547 3.5 14C3.5 13.8453 3.5 13.7679 3.50257 13.7025C3.57086 11.9643 4.96429 10.5709 6.70247 10.5026C6.76788 10.5 6.84525 10.5 7 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4.6665V5.83317C14 5.93221 14 5.98173 13.9984 6.02359C13.9546 7.18759 13.0211 8.12111 11.8571 8.16493C11.8152 8.1665 11.7657 8.1665 11.6667 8.1665V8.1665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17.5H8.16667C8.26571 17.5 8.31523 17.5 8.35709 17.5016C9.52108 17.5454 10.4546 18.4789 10.4984 19.6429C10.5 19.6848 10.5 19.7343 10.5 19.8333V19.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10.5V10.5C7 10.599 7 10.6486 7.00158 10.6904C7.04539 11.8544 7.97892 12.7879 9.14291 12.8318C9.18477 12.8333 9.23429 12.8333 9.33333 12.8333V12.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 10.5V7C21 6.84525 21 6.76788 20.9974 6.70247C20.9291 4.96429 19.5357 3.57086 17.7975 3.50257C17.7321 3.5 17.6547 3.5 17.5 3.5C17.3453 3.5 17.2679 3.5 17.2025 3.50257C15.4643 3.57086 14.0709 4.96429 14.0026 6.70247C14 6.76788 14 6.84525 14 7V21C14 21.1547 14 21.2321 14.0026 21.2975C14.0709 23.0357 15.4643 24.4291 17.2025 24.4974C17.2679 24.5 17.3453 24.5 17.5 24.5C17.6547 24.5 17.7321 24.5 17.7975 24.4974C19.5357 24.4291 20.9291 23.0357 20.9974 21.2975C21 21.2321 21 21.1547 21 21V17.5C21.1547 17.5 21.2321 17.5 21.2975 17.4974C23.0357 17.4291 24.4291 16.0357 24.4974 14.2975C24.5 14.2321 24.5 14.1547 24.5 14C24.5 13.8453 24.5 13.7679 24.4974 13.7025C24.4291 11.9643 23.0357 10.5709 21.2975 10.5026C21.2321 10.5 21.1547 10.5 21 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4.6665V5.83317C14 5.93221 14 5.98173 14.0016 6.02359C14.0454 7.18759 14.9789 8.12111 16.1429 8.16493C16.1848 8.1665 16.2343 8.1665 16.3333 8.1665V8.1665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 17.5H19.8333C19.7343 17.5 19.6848 17.5 19.6429 17.5016C18.4789 17.5454 17.5454 18.4789 17.5016 19.6429C17.5 19.6848 17.5 19.7343 17.5 19.8333V19.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 9.3335V10.5002C21 10.5992 21 10.6487 20.9984 10.6906C20.9546 11.8546 20.0211 12.7881 18.8571 12.8319C18.8152 12.8335 18.7657 12.8335 18.6667 12.8335V12.8335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MentalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M11.6667 12.8335V12.8335C11.6667 13.6083 11.6667 13.9957 11.7466 14.3148C11.9857 15.2692 12.7309 16.0145 13.6854 16.2536C14.0045 16.3335 14.3919 16.3335 15.1667 16.3335V16.3335C15.9415 16.3335 16.3289 16.3335 16.648 16.2536C17.6024 16.0145 18.3477 15.2692 18.5868 14.3148C18.6667 13.9957 18.6667 13.6083 18.6667 12.8335V12.8335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.1667 25.6667L15.1667 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.6667 9.3335V9.3335C13.5997 9.3335 15.1667 10.9005 15.1667 12.8335V14.0002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.8713 25.6668V20.6911C19.8713 19.1944 20.4993 17.7663 21.6023 16.7545V16.7545C22.7054 15.7428 23.3334 14.3147 23.3334 12.818V10.5002C23.3334 5.98984 19.677 2.3335 15.1667 2.3335V2.3335C10.6564 2.3335 7.00002 5.98984 7.00002 10.5002V11.0025C7.00002 11.4394 6.89831 11.8703 6.70294 12.261L5.3116 15.0437C5.01531 15.6363 5.44622 16.3335 6.10877 16.3335V16.3335C6.60099 16.3335 7.00002 16.7325 7.00002 17.2248V18.0835C7.00002 19.05 7.78352 19.8335 8.75002 19.8335V19.8335C9.71652 19.8335 10.5 20.617 10.5 21.5835V25.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LiverIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M16.3333 13.3539V9.91683C16.3333 7.66167 18.1615 5.8335 20.4166 5.8335H20.8455C22.8638 5.8335 24.5 7.46965 24.5 9.48794C24.5 10.1503 24.32 10.8002 23.9792 11.3681L21.868 14.8869C21.3295 15.7844 20.3596 16.3335 19.3129 16.3335C17.6673 16.3335 16.3333 14.9995 16.3333 13.3539Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6136 19.6257L9.01689 21.681C8.45973 21.9994 7.82913 22.1668 7.18742 22.1668C5.15092 22.1668 3.5 20.5159 3.5 18.4794V12.2502C3.5 11.2437 3.5 10.7405 3.56773 10.3196C3.93324 8.04791 5.71441 6.26674 7.98609 5.90122C8.407 5.8335 8.91023 5.8335 9.91667 5.8335C10.9231 5.8335 11.4263 5.8335 11.8472 5.90122C14.1189 6.26674 15.9001 8.04791 16.2656 10.3196C16.3333 10.7405 16.3333 11.2437 16.3333 12.2502V13.216C16.3333 14.3691 16.3333 14.9457 16.2249 15.4753C15.9918 16.6131 15.3937 17.6437 14.5214 18.4106C14.1154 18.7675 13.6148 19.0536 12.6136 19.6257L12.6136 19.6257Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3333 24.5002L16.3333 17.5002C16.3333 15.5672 14.7663 14.0002 12.8333 14.0002V14.0002C10.9003 14.0002 9.33331 12.4332 9.33331 10.5002V9.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3333 24.5L16.3333 15.1667C16.3333 12.5893 18.4227 10.5 21 10.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="flex-1 pb-16 md:pb-20 lg:pb-24">
        <Header />

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
            <CategoryCard icon={<KidneyIcon />} label="Kidney" />
            <CategoryCard icon={<StomachIcon />} label="Stomach" />
            <CategoryCard icon={<LungIcon />} label="Lung" />
            <CategoryCard icon={<BrainIcon />} label="Brain" />
            <CategoryCard icon={<MentalIcon />} label="Mental" />
            <CategoryCard icon={<LiverIcon />} label="Liver" />
          </div>
        </div>

        {/* Find Doctors */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-medical-text-dark">Find Doctors</h2>
            <span className="text-sm md:text-base text-medical-primary hover:underline cursor-pointer">See all</span>
          </div>
          <div className="space-y-3 md:space-y-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 lg:space-y-0">
            <DoctorCard
              id="1"
              name="Jennifer Miller"
              specialty="Pediatrician"
              hospital="Mercy Hospital"
              rating="4.8"
              hours="10:30am - 5:30pm"
              isFavorite={false}
            />
            <DoctorCard
              id="2"
              name="Robert Johnson"
              specialty="Neurologist"
              hospital="ABC hospital"
              rating="4.8"
              hours="10:30am - 5:30pm"
              isFavorite={true}
            />
            <DoctorCard
              id="3"
              name="Laura White"
              specialty="Dentist"
              hospital="Cedar Dental care"
              rating="4.8"
              hours="10:30am - 5:30pm"
              isFavorite={false}
            />
            <DoctorCard
              id="4"
              name="Brian Clark"
              specialty="Psychiatrist"
              hospital="ABC hospital"
              rating="4.8"
              hours="10:30am - 5:30pm"
              isFavorite={false}
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
