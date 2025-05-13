import { Img, Heading } from "components";
import React, { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "INTERVIEW", link: "#" },
  { label: "NEWS", link: "#" },
  { label: "PROGRAM", link: "#" },
  { label: "RESOURCES", link: "#" }
];

const profileOptions = [
  { label: "Option 1", link: "#" },
  { label: "Option 2", link: "#" }
];

export default function Header({ ...props }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.burger-btn')) {
        setMobileMenuOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target) && 
          !event.target.closest('.profile-btn')) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close profile menu when opening mobile menu
    if (!mobileMenuOpen) setProfileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
    // Close mobile menu when opening profile menu
    if (!profileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex items-center p-[18px] border-gray-900 border-b border-solid bg-gray-900_01 w-full`}
    >
      {/* Main header content */}
      <div className="flex w-full max-w-[1844px] mx-auto justify-between items-center">
        {/* Left logo */}
        <div>
          <Img src="images/MSL LOGO.png" alt="MSL Logo" className="h-[42px] w-[150px] object-contain" />
        </div>

        {/* Desktop Navigation - use JavaScript-based approach */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white !text-white font-medium transition-colors hover:text-amber-400"
                style={{ color: 'white' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right controls section */}
        <div className="flex items-center">
          {/* Hamburger button with dropdown - JavaScript-based visibility */}
          {isMobile && (
            <div className="relative">
              <button 
                className="p-2 text-white burger-btn"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <span className="text-2xl">✕</span>
                ) : (
                  <span className="text-2xl">☰</span>
                )}
              </button>
              
              {/* Navigation dropdown menu - popup style */}
              {mobileMenuOpen && (
                <div 
                  ref={mobileMenuRef}
                  className="absolute right-0 top-full mt-2 w-[200px] bg-gray-900 border border-gray-800 rounded shadow-lg z-50"
                >
                  <div className="py-1">
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800 last:border-b-0"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Profile dropdown */}
          <div className="relative ml-4">
            <div
              className="flex items-center cursor-pointer profile-btn"
              onClick={toggleProfileMenu}
            >
              <div className="h-[42px] w-[42px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#555555" className="h-[38px] w-[38px]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <span className="text-white text-sm ml-2">▼</span>
            </div>
            
            {/* Profile dropdown menu */}
            {profileMenuOpen && (
              <div 
                ref={profileMenuRef}
                className="absolute right-0 top-full mt-2 w-[180px] bg-gray-900 border border-gray-800 rounded shadow-lg z-50"
              >
                <div className="py-1">
                  {profileOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      className="block px-4 py-2 text-white hover:bg-gray-800 border-b border-gray-800 last:border-b-0"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}