import { Img } from "../../components";
import React from "react";
import { Link } from "react-router-dom";


export default function MCCHeaderSection() {

  const bgStyle = {
    backgroundImage: "url('/images/MCC2_BG.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#000000", 
  };

  return (
    <>
      {/* MCC header section */}
      <div className="w-full">
        <div className="flex flex-col items-center py-[30px] min-h-screen" style={bgStyle}>
          {/* MCC Logo */}
          <div className="flex justify-center w-full mt-12 mb-8">
            <Img
              src="/images/MCC_HLOGO.png"
              alt="MCC Logo"
              className="h-[220px] md:h-[190px] sm:h-[150px] object-contain"
            />
          </div>


          {/* Category Images - Tournament Structure, Org Enlist, etc. */}
          <div className="grid grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-8 md:gap-4 sm:gap-3 w-full max-w-6xl mt-10 px-4 md:px-2 sm:px-1">
            {/* Row 1: Tournament Structure and Org Enlist */}
            <Link to="/tournament-structure" className="flex justify-center sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105 mb-4 sm:mb-2">
                <Img
                  src="/images/Overview.png"
                  alt="Tournament Structure"
                  className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] sm:h-[210px] sm:w-[210px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/org-enlist" className="flex justify-center sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105 mb-4 sm:mb-2">
                <Img
                  src="/images/OrgEnlist.png"
                  alt="Org Enlist"
                  className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] sm:h-[210px] sm:w-[210px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            {/* Row 2: Rulebook and Calendar */}
            <Link to="/rulebook" className="flex justify-center sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105 mb-4 sm:mb-2">
                <Img
                  src="/images/Rulebook.png"
                  alt="Rulebook"
                 className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] sm:h-[210px] sm:w-[210px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/roadmap" className="flex justify-center sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105 mb-4 sm:mb-2">
                <Img
                  src="/images/Roadmap.png"
                  alt="Calendar"
                  className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] sm:h-[210px] sm:w-[210px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            {/* Row 3: Registration (centered) */}
            <Link to="/registration" className="flex justify-center md:col-span-2 sm:col-span-2 col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105 mb-4 sm:mb-2">
                <Img
                  src="/images/Reg.png"
                  alt="Registration"
                 className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] sm:h-[210px] sm:w-[210px] object-cover rounded-lg"
                />
              </div>
            </Link>
          </div>

          {/* Logos at bottom */}
          <div className="flex justify-center items-center gap-8 md:gap-4 sm:gap-3 mt-16 md:mt-12 sm:mt-8 mb-12 md:mb-8 sm:mb-6">
            <Img
              src="/images/MSL LOGO.png"
              alt="MSL Logo"
              className="h-[60px] sm:h-[60px] object-contain"
            />
            <Img
              src="/images/MLBB NEW LOGO.png"
              alt="MLBB Logo"
              className="h-[60px] sm:h-[60px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
