
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-neutral-900 text-white w-full">
      <div className="max-w-screen-xl mx-auto py-12 px-6 max-sm:px-3">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img
                  src="/lovable-uploads/bf6dfe1c-1859-4713-9159-02629967751d.png"
                  alt="Whatflows Logo"
                  className="object-contain w-[184px] max-sm:w-[140px]"
                />
              </Link>
            </div>
            <p className="mt-3 text-lg max-sm:text-sm">
              Make customer support an asset, not a constraint!
            </p>
            <a 
              href="https://www.linkedin.com/company/whatflows" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-white hover:text-emerald-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h3 className="font-bold text-xl mb-3 max-sm:text-base">EXPLORE</h3>
              <ul className="space-y-2 max-sm:text-sm">
                <li>
                  <button 
                    onClick={() => handleNavigation('features')} 
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('pricing')} 
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('contact')} 
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Contact us
                  </button>
                </li>
                <li><Link to="/articles" className="hover:text-emerald-500 transition-colors">Articles</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-neutral-700">
          <p className="max-sm:text-xs">Copyright © whatflows. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
