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
    backgroundColor: "#000000", // Fallback color
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
          <div className="grid grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full max-w-6xl mt-10 px-4">
            <Link to="/tournament-structure" className="flex justify-center">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Overview.png"
                  alt="Tournament Structure"
                  className="h-[300px] w-[300px] md:h-[220px] md:w-[220px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/org-enlist" className="flex justify-center">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/OrgEnlist.png"
                  alt="Org Enlist"
                  className="h-[300px] w-[300px] md:h-[220px] md:w-[220px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/rulebook" className="flex justify-center md:col-span-2 sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Rulebook.png"
                  alt="Rulebook"
                  className="h-[300px] w-[300px] md:h-[220px] md:w-[220px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/calendar" className="flex justify-center">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Roadmap.png"
                  alt="Calendar"
                  className="h-[300px] w-[300px] md:h-[220px] md:w-[220px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg"
                />
              </div>
            </Link>
            
            <Link to="/registration" className="flex justify-center md:col-span-2 sm:col-span-1">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Reg.png"
                  alt="Registration"
                  className="h-[300px] w-[300px] md:h-[220px] md:w-[220px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg"
                />
              </div>
            </Link>
          </div>

          {/* Logos at bottom */}
          <div className="flex justify-center items-center gap-8 mt-20 mb-12">
            <Img
              src="/images/MSL LOGO.png"
              alt="MSL Logo"
              className="h-[80px] sm:h-[60px] object-contain"
            />
            <Img
              src="/images/MLBB NEW LOGO.png"
              alt="MLBB Logo"
              className="h-[80px] sm:h-[60px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
