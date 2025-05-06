
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavigation = (id: string) => {
    closeMenu();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigationItems = [
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="flex items-center justify-between py-2 w-full bg-white rounded-2xl max-md:max-w-full px-4 md:px-6">
      <div className="flex flex-1 justify-start md:justify-start">
        <Link to="/">
          <img
            src="/lovable-uploads/9715b322-718a-42f4-9614-a57dc1443553.png"
            alt="Company Logo"
            className="object-contain shrink-0 max-w-full aspect-[4.48] w-[184px] max-sm:w-[140px]"
          />
        </Link>
      </div>
      
      {isMobile ? (
        <div className="flex justify-end flex-1">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isMenuOpen && (
            <div 
              ref={menuRef}
              className="fixed inset-x-0 bottom-0 bg-white z-50 p-5 px-8 flex flex-col gap-4 animate-fade-in rounded-t-2xl shadow-lg"
              style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
              <div className="flex flex-col gap-6 font-medium text-black">
                {navigationItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => handleNavigation(item.id)}
                    className="text-left py-2 border-b border-gray-100"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-3 font-semibold mt-4">
                <a href="https://app.whatflows.io/" className="w-full">
                  <button className="px-5 py-2 bg-white rounded-xl border border-black border-solid w-full text-black">
                    Log in
                  </button>
                </a>
                <a href="https://app.whatflows.io/" className="w-full">
                  <button className="px-3.5 py-2 bg-black rounded-xl w-full text-white">
                    Get started
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex grow justify-between items-center">
          <div className="flex-grow"></div>
          <div className="flex gap-5 font-medium text-black whitespace-nowrap">
            {navigationItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="hover:text-emerald-500 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 font-semibold flex-grow justify-end">
            <div className="text-black">
              <a href="https://app.whatflows.io/">
                <button className="px-5 py-1.5 bg-white rounded-xl border border-black border-solid max-md:px-5">
                  Log in
                </button>
              </a>
            </div>
            <div className="text-white">
              <a href="https://app.whatflows.io/">
                <button className="px-3.5 py-1.5 bg-black rounded-xl">
                  Get started
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
