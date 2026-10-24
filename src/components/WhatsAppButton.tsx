import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '919010106877';
  const message = encodeURIComponent('Hi Square Concepts, I would like to know more about your interior design services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group focus:outline-none"
    >
      {/* Tooltip on hover */}
      <span className="mr-3 px-3.5 py-1.5 bg-secondary-bg/95 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 border border-white/10 hidden sm:inline-block">
        Chat with us
      </span>

      {/* Button with ripple animation */}
      <div className="relative flex items-center justify-center">
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
        
        {/* Main WhatsApp circle button */}
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:scale-110 active:scale-95 transition-all duration-300">
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.06 21.87h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.38a9.9 9.9 0 01-1.52-5.25c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.13 1.03 7 2.91 1.88 1.87 2.91 4.36 2.91 7.01 0 5.46-4.45 9.89-9.92 9.89zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
