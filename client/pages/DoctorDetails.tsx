import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Clock, MapPin, Phone, Calendar, ChevronRight, BookOpen, MessageCircle, User, Home } from 'lucide-react';

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

const HeaderSection = ({ doctorName }: { doctorName: string }) => (
  <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
    <Link to="/search" className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
      <ArrowLeft className="w-6 h-6 text-medical-text-dark" />
    </Link>
    <div className="flex-1">
      <h1 className="text-lg font-semibold text-medical-text-dark">{doctorName}</h1>
    </div>
  </div>
);

const DoctorProfile = ({ doctor }: { doctor: any }) => {
  const [isFavorite, setIsFavorite] = useState(doctor.isFavorite);

  return (
    <div className="bg-white p-6 border-b border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
          <span className="text-white font-semibold text-xl">{doctor.name[0]}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-medical-text-dark">{doctor.name}</h2>
              <p className="text-medical-text-medium text-base">{doctor.specialty}</p>
              <p className="text-medical-text-light text-sm">{doctor.hospital}</p>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? 'fill-medical-favorite text-medical-favorite' : 'text-medical-favorite'}`} />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-medical-text-dark font-medium">{doctor.rating}</span>
              <span className="text-medical-text-light text-sm">({doctor.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-medical-text-medium" />
              <span className="text-medical-text-dark text-sm">{doctor.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white p-6 border-b border-gray-100">
    <h3 className="text-lg font-semibold text-medical-text-dark mb-4">{title}</h3>
    {children}
  </div>
);

const TimeSlot = ({ time, available = true }: { time: string; available?: boolean }) => (
  <button 
    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
      available 
        ? 'border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white' 
        : 'border-gray-200 text-gray-400 cursor-not-allowed'
    }`}
    disabled={!available}
  >
    {time}
  </button>
);

const LocationInfo = ({ doctor }: { doctor: any }) => (
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-medical-text-medium mt-0.5" />
      <div>
        <p className="text-medical-text-dark font-medium">{doctor.hospital}</p>
        <p className="text-medical-text-light text-sm">{doctor.address}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-medical-text-medium" />
      <span className="text-medical-text-dark">{doctor.phone}</span>
    </div>
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

export default function DoctorDetailsPage() {
  const { doctorId } = useParams();
  
  // Mock doctor data - in a real app, this would come from an API based on doctorId
  const doctor = {
    id: doctorId || '1',
    name: "James Harris",
    specialty: "Psychologist",
    hospital: "Mercy Hospital",
    address: "123 Medical Center Drive, Suite 200, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    rating: "4.8",
    reviewCount: "245",
    hours: "10:30am - 5:30pm",
    experience: "15 years",
    isFavorite: false,
    about: "Dr. James Harris is a licensed clinical psychologist with over 15 years of experience specializing in cognitive behavioral therapy, anxiety disorders, and depression treatment. He is committed to providing compassionate care in a safe and supportive environment.",
    qualifications: [
      "Ph.D. in Clinical Psychology - Harvard University",
      "Licensed Clinical Psychologist - NY State",
      "Board Certified in Cognitive Behavioral Therapy",
      "Member, American Psychological Association"
    ],
    services: [
      "Individual Therapy",
      "Cognitive Behavioral Therapy (CBT)",
      "Anxiety Treatment",
      "Depression Counseling",
      "Stress Management",
      "Relationship Counseling"
    ]
  };

  const availableSlots = [
    { time: "9:00 AM", available: false },
    { time: "10:30 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "1:00 PM", available: false },
    { time: "2:30 PM", available: true },
    { time: "3:30 PM", available: true },
    { time: "4:30 PM", available: true },
    { time: "5:00 PM", available: false }
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <StatusBar />
      <HeaderSection doctorName={doctor.name} />
      
      <div className="flex-1 pb-24 overflow-y-auto">
        <DoctorProfile doctor={doctor} />

        <InfoSection title="About">
          <p className="text-medical-text-dark leading-relaxed">{doctor.about}</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-medical-text-medium">Experience:</span>
              <span className="text-medical-text-dark font-medium">{doctor.experience}</span>
            </div>
          </div>
        </InfoSection>

        <InfoSection title="Services">
          <div className="space-y-2">
            {doctor.services.map((service, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-medical-text-dark">{service}</span>
                <ChevronRight className="w-4 h-4 text-medical-text-light" />
              </div>
            ))}
          </div>
        </InfoSection>

        <InfoSection title="Qualifications">
          <div className="space-y-3">
            {doctor.qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-medical-primary mt-2 flex-shrink-0"></div>
                <p className="text-medical-text-dark">{qualification}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        <InfoSection title="Available Time Slots">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-medical-text-medium" />
              <span className="text-medical-text-dark font-medium">Today, October 25</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {availableSlots.map((slot, index) => (
                <TimeSlot key={index} time={slot.time} available={slot.available} />
              ))}
            </div>
          </div>
        </InfoSection>

        <InfoSection title="Location & Contact">
          <LocationInfo doctor={doctor} />
        </InfoSection>
      </div>

      {/* Fixed Book Appointment Button */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-100 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <button className="w-full bg-medical-primary text-white font-semibold text-lg py-4 px-6 rounded-full hover:bg-blue-600 transition-colors">
          Book Appointment
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
