import React, { useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Heart, Plus } from "lucide-react";

const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-[#33384B]" strokeWidth={2} />
        </button>
        <h1 className="text-[#33384B] font-bold text-base sm:text-lg font-['Open_Sans']">
          Payment Methods
        </h1>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
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
};

const PaymentMethodCard = ({ 
  id, 
  name, 
  isSelected, 
  onSelect, 
  icon 
}: { 
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  icon: React.ReactNode;
}) => (
  <div 
    className="flex items-center gap-4 p-4 bg-[#FAFAFC] border border-[#F4F4F6] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
    onClick={() => onSelect(id)}
  >
    {/* Radio button */}
    <div className="w-6 h-6 relative flex-shrink-0">
      <div className={`w-5 h-5 rounded-full border-2 absolute top-0.5 left-0.5 ${
        isSelected ? 'border-[#2E6FF3]' : 'border-[#B2BCC9]'
      }`}>
        {isSelected && (
          <div className="w-2.5 h-2.5 bg-[#2E6FF3] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        )}
      </div>
    </div>
    
    {/* Method name */}
    <div className="flex-1 text-[#33384B] font-medium text-base font-['Open_Sans']">
      {name}
    </div>
    
    {/* Payment method icon */}
    <div className="flex-shrink-0">
      {icon}
    </div>
  </div>
);

const MastercardIcon = () => (
  <div className="w-10 h-6 relative">
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="absolute">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M20.0001 21.1333C17.8817 22.9209 15.1338 24 12.1311 24C5.4313 24 0 18.6274 0 12C0 5.37258 5.4313 0 12.1311 0C15.1338 0 17.8817 1.07912 20.0001 2.8667C22.1184 1.07912 24.8663 0 27.869 0C34.5688 0 40.0001 5.37258 40.0001 12C40.0001 18.6274 34.5688 24 27.869 24C24.8663 24 22.1184 22.9209 20.0001 21.1333Z" 
        fill="#ED0006"
      />
    </svg>
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="absolute left-5">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M-0.000244141 21.1333C2.60809 18.9323 4.26202 15.6572 4.26202 12C4.26202 8.34278 2.60809 5.06768 -0.000244141 2.86666C2.11811 1.07911 4.86597 0 7.86863 0C14.5685 0 19.9998 5.37258 19.9998 12C19.9998 18.6274 14.5685 24 7.86863 24C4.86597 24 2.11811 22.9209 -0.000244141 21.1333Z" 
        fill="#F9A000"
      />
    </svg>
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" className="absolute left-4 top-0.5">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M4.99999 19.1335C7.60829 16.9325 9.26219 13.6574 9.26219 10.0002C9.26219 6.34304 7.60829 3.06796 4.99999 0.866943C2.39169 3.06796 0.737793 6.34304 0.737793 10.0002C0.737793 13.6574 2.39169 16.9325 4.99999 19.1335Z" 
        fill="#FF5E00"
      />
    </svg>
  </div>
);

const VisaIcon = () => (
  <svg width="68" height="24" viewBox="0 0 68 24" fill="none">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M17.0007 23.8133H11.1158L6.70273 5.19476C6.49327 4.3383 6.04853 3.58115 5.39432 3.2243C3.76168 2.3275 1.96262 1.6138 0 1.25384V0.537024H9.48024C10.7886 0.537024 11.77 1.6138 11.9335 2.86434L14.2232 16.2945L20.1053 0.537024H25.8268L17.0007 23.8133ZM29.0979 23.8133H23.54L28.1166 0.537024H33.6745L29.0979 23.8133ZM40.8649 6.98505C41.0285 5.7314 42.0098 5.01459 43.1547 5.01459C44.9537 4.83461 46.9135 5.19457 48.549 6.08826L49.5303 1.07677C47.8948 0.359958 46.0957 0 44.4631 0C39.0687 0 35.1435 3.22411 35.1435 7.69876C35.1435 11.1028 37.9239 12.8902 39.8865 13.967C42.0098 15.0407 42.8275 15.7575 42.664 16.8311C42.664 18.4416 41.0285 19.1585 39.3958 19.1585C37.4332 19.1585 35.4706 18.6216 33.6744 17.7248L32.6931 22.7394C34.6557 23.6331 36.779 23.9931 38.7416 23.9931C44.7902 24.1699 48.549 20.9489 48.549 16.1143C48.549 10.0261 40.8649 9.66922 40.8649 6.98505ZM68.0001 23.8133L63.587 0.537024H58.8469C57.8656 0.537024 56.8843 1.25384 56.5572 2.3275L48.3854 23.8133H54.1068L55.2488 20.4123H62.2786L62.9328 23.8133H68.0001ZM59.6646 6.80503L61.2973 15.5775H56.7207L59.6646 6.80503Z" 
      fill="#172B85"
    />
  </svg>
);

const PayoneerIcon = () => (
  <div className="w-16 h-6 relative">
    <div className="absolute left-0 top-1.5 w-16 h-3 bg-black text-white text-xs font-bold flex items-center justify-center font-['Open_Sans']">
      Payoneer
    </div>
    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" className="absolute left-4 top-0">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M23.3839 0.0627126C23.3018 0.0406471 23.2197 0.0185815 23.1375 0C22.8861 0 22.6346 0 22.367 0.00825845C22.2755 0.0268744 22.1841 0.0471689 22.0919 0.0676285C21.9797 0.0925505 21.8663 0.117717 21.7505 0.140394C20.5094 0.379889 19.3414 0.817587 18.2139 1.39568C15.7724 2.65096 13.5823 4.27788 11.6194 6.2021C10.3134 7.4739 9.04806 8.80351 7.82324 10.1662C5.67373 12.5611 3.83244 15.1956 2.36428 18.086C1.60992 19.5808 0.928565 21.1086 0.620333 22.7686C0.563553 23.0741 0.66089 23.4292 0.758226 23.7348C0.798783 23.8587 1.0259 23.9495 1.18002 23.9991C1.22058 24.0156 1.34225 23.8091 1.39903 23.6935C1.41918 23.6487 1.43982 23.6028 1.46091 23.5559C1.81318 22.7726 2.28953 21.7133 2.70281 21.012C3.57884 19.5255 4.27046 18.3751 5.25193 16.9629C6.82554 14.6918 8.6642 12.4635 10.5947 10.498C12.4198 8.63985 14.2475 6.97839 16.543 5.72311C17.5975 5.15328 18.6763 4.5917 19.7794 4.12923C21.6856 3.32816 23.6729 2.7831 25.717 2.47754C25.936 2.4445 26.228 2.27107 26.301 2.08939C26.3659 1.92422 26.2118 1.6104 26.0576 1.45349C25.4331 0.80107 24.703 0.305563 23.7946 0.156911C23.6577 0.136264 23.5208 0.0994885 23.3839 0.0627126ZM4.81394 11.3307C5.20329 10.2571 5.39796 9.14221 5.4223 7.98602C5.41148 7.86215 5.40247 7.73827 5.39346 7.6144C5.37543 7.36664 5.35741 7.11889 5.32496 6.87113C5.10595 4.95517 4.29482 3.32825 3.00511 1.93257C2.85099 1.77566 2.64009 1.65179 2.4292 1.57746C2.2183 1.49488 2.08041 1.61875 2.09663 1.86651C2.09703 1.87174 2.09742 1.87697 2.09782 1.88221C2.11366 2.09209 2.13006 2.30944 2.16963 2.51892C2.22662 2.84894 2.28322 3.17935 2.33986 3.50998C2.54118 4.68522 2.74298 5.86327 2.96455 7.0363C3.18356 8.21726 3.4269 9.38996 3.68646 10.5544C3.77569 10.926 3.92169 11.2977 4.10014 11.6445C4.23804 11.9088 4.43271 11.884 4.61116 11.6445C4.69227 11.5454 4.77339 11.4463 4.81394 11.3307Z" 
        fill="#FC461E"
      />
    </svg>
  </div>
);

const GpayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 11.2734C21.001 10.4557 20.931 9.6394 20.789 8.8335H9.243V13.4549H15.856C15.721 14.193 15.434 14.8966 15.014 15.5233C14.594 16.15 14.048 16.6868 13.411 17.1014V20.1012H17.358C19.669 18.013 21 14.9248 21 11.2734Z" fill="#4285F4"/>
    <path d="M9.243 23.0001C12.547 23.0001 15.329 21.9369 17.358 20.1036L13.411 17.1038C12.312 17.8338 10.897 18.2504 9.243 18.2504C6.049 18.2504 3.339 16.1405 2.37 13.2974H-1.696V16.3889C-0.677 18.3762 1.885 20.0469 3.817 21.2143C5.749 22.3818 7.973 23 9.243 23.0001Z" fill="#34A853"/>
    <path d="M2.37 13.2964C1.857 11.8065 1.857 10.1931 2.37 8.7033V5.6118H-1.696C-2.554 7.2836 -3 9.1288 -3 10.9998C-3 12.8709 -2.554 14.716 -1.696 16.3879L2.37 13.2964Z" fill="#FBBC04"/>
    <path d="M9.243 3.7505C10.989 3.7226 12.676 4.3691 13.94 5.5504L17.434 2.1256C15.218 0.0859 12.283 -1.034 9.243 -0.9992C7.973 -0.9991 5.749 -0.3808 3.817 0.7866C1.885 1.9541 -0.677 3.6247 -1.696 5.6121L2.37 8.7036C3.339 5.8604 6.049 3.7505 9.243 3.7505Z" fill="#EA4335"/>
  </svg>
);

const PaypalIcon = () => (
  <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
    <path d="M6.648 22.2299L7.025 19.5347H6.146H1.753L4.765 -0.1016C4.765 -0.1016 4.765 -0.23 4.891 -0.23H5.016H12.421C14.806 -0.23 16.563 0.2834 17.442 1.3101C17.818 1.8235 18.069 2.3369 18.195 2.8502C18.32 3.4919 18.32 4.1337 18.195 5.032V5.5454L18.571 5.8021C18.948 5.9304 19.199 6.1871 19.45 6.4438C19.826 6.8288 20.078 7.3422 20.078 7.9839C20.203 8.6256 20.203 9.3957 19.952 10.2941C19.701 11.3208 19.45 12.0909 19.073 12.8609C18.697 13.5026 18.195 14.016 17.693 14.5294C17.191 14.9144 16.438 15.1711 15.81 15.4278C15.057 15.5561 14.304 15.6845 13.426 15.6845H12.798C12.421 15.6845 12.045 15.8128 11.668 16.0695C11.417 16.3262 11.166 16.7112 11.041 17.0962V17.3529L10.288 22.1016V22.2299V22.3582C10.288 22.3582 10.288 22.3582 10.162 22.3582H6.648V22.2299Z" fill="#263577"/>
    <path d="M19.073 5.0322C19.073 5.1606 19.073 5.2889 18.948 5.4173C17.944 10.5509 14.681 12.2194 10.413 12.2194H8.28C7.778 12.2194 7.276 12.6044 7.276 13.1178L6.146 20.305L5.895 22.3584C5.895 22.7435 6.146 23.0001 6.397 23.0001H10.288C10.79 23.0001 11.166 22.6151 11.166 22.2301V21.9734L11.919 17.3531V17.0964C12.045 16.583 12.421 16.3263 12.798 16.3263H13.426C17.191 16.3263 20.078 14.7862 20.831 10.2943C21.207 8.3691 20.956 6.829 20.078 5.8023C19.827 5.5456 19.45 5.2889 19.073 5.0322Z" fill="#2199D6"/>
    <path d="M18.069 4.6472C17.944 4.6472 17.818 4.5189 17.567 4.5189C17.442 4.5189 17.191 4.3905 17.065 4.3905C16.438 4.2622 15.81 4.2622 15.182 4.2622H9.409C9.284 4.2622 9.158 4.2622 9.033 4.3905C8.781 4.5189 8.53 4.7756 8.53 5.0323L7.275 12.9895V13.2462C7.401 12.7328 7.777 12.3478 8.279 12.3478H10.413C14.68 12.3478 17.944 10.551 18.948 5.5456C18.948 5.4173 18.948 5.2889 19.073 5.1606C18.822 5.0323 18.571 4.9039 18.32 4.7756C18.195 4.6472 18.069 4.6472 18.069 4.6472Z" fill="#252C5E"/>
    <path d="M8.531 5.0321C8.531 4.7754 8.782 4.5187 9.033 4.3904C9.158 4.3904 9.284 4.262 9.409 4.262H15.183C15.81 4.262 16.563 4.262 17.065 4.3904C17.191 4.3904 17.442 4.3904 17.567 4.5187C17.693 4.5187 17.818 4.6471 18.069 4.6471C18.195 4.6471 18.195 4.6471 18.32 4.7754C18.571 4.9037 18.822 5.0321 19.073 5.1604C19.324 3.2353 19.073 1.9519 18.069 0.7968C16.94 -0.4866 14.931 -1 12.421 -1H5.016C4.514 -1 4.012 -0.615 4.012 -0.1016L1 19.6631C1 20.0481 1.251 20.4331 1.628 20.4331H6.146L7.275 12.9893L8.531 5.0321Z" fill="#263577"/>
  </svg>
);

export default function PaymentMethodsPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>("visa");
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: "mastercard",
      name: "Mastercard",
      icon: <MastercardIcon />
    },
    {
      id: "visa",
      name: "Visa",
      icon: <VisaIcon />
    },
    {
      id: "payoneer",
      name: "Payoneer",
      icon: <PayoneerIcon />
    },
    {
      id: "gpay",
      name: "Gpay",
      icon: <GpayIcon />
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: <PaypalIcon />
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <HeaderSection />
      
      <div className="flex-1 flex flex-col px-4 sm:px-6 pt-8 pb-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#33384B] font-bold text-lg sm:text-xl font-['Open_Sans']">
            Select Method
          </h2>
          <Plus className="w-6 h-6 text-[#7D8A95]" strokeWidth={2} />
        </div>
        
        {/* Payment Methods */}
        <div className="flex flex-col gap-4 mb-20">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              id={method.id}
              name={method.name}
              isSelected={selectedMethod === method.id}
              onSelect={setSelectedMethod}
              icon={method.icon}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <div className="mt-auto">
          <button className="w-full bg-[#2E6FF3] text-white font-bold text-base sm:text-lg font-['Open_Sans'] py-4 px-6 rounded-[32px] hover:bg-blue-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
