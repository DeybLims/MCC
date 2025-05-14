import { Heading, Text, Img } from "../../components";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// Sample event data for different months
const eventData = {
  
  "May": [
    { dayOfWeek: "Saturday", dayNum: 3, month: "May", event: "University Rivals Visayas Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 4, month: "May", event: "University Rivals Visayas Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 17, month: "May", event: "University Rivals Luzon A Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 18, month: "May", event: "University Rivals Luzon A Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 24, month: "May", event: "University Rivals Luzon B Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 25, month: "May", event: "University Rivals Luzon B Day 2", status: "UPCOMING" },
  ],
  "June": [
    { dayOfWeek: "Saturday", dayNum: 1, month: "June", event: "University Rivals Mindanao Day 1", status: "UPCOMING" },
    { dayOfWeek: "Sunday", dayNum: 2, month: "June", event: "University Rivals Mindanao Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 15, month: "June", event: "Quarter Finals", status: "UPCOMING" },
    { dayOfWeek: "Sunday", dayNum: 16, month: "June", event: "Semi Finals", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 29, month: "June", event: "Grand Finals", status: "UPCOMING" },
  ],
};

// Available months for navigation
const availableMonths = ["May", "June"];

export default function EventCalendarSection() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // Start with May (index 1)
  const currentMonth = availableMonths[currentMonthIndex];
  const eventSchedule = eventData[currentMonth];

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < availableMonths.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <>
      {/* event calendar section */}
      <div className="w-full">
        <div className="flex flex-col items-center justify-center bg-[url('/images/MCC2_CALENDAR_BG.png')] bg-cover bg-center border-b-0 p-[20px] md:p-[30px] lg:p-[50px] min-h-screen">
          {/* Calendar Container with Frame */}
          <div className="w-full max-w-[800px] relative">
            {/* Calendar Frame */}
            <div className="aspect-[16/22] w-full relative">
              <Img
                src="/images/CalendarFrame.png"
                alt="Calendar Frame"
                className="w-full h-full object-contain"
              />
              
              {/* Calendar Content - Positioned inside the frame */}
              <div className="absolute top-[5%] left-[4%] right-[4%] bottom-[5%] flex flex-col">
                {/* Calendar Header with larger arrows */}
                <div className="flex justify-center items-center mb-3">
                  <button 
                    className={`focus:outline-none mr-4 ${currentMonthIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                    onClick={goToPreviousMonth}
                    disabled={currentMonthIndex === 0}
                  >
                    <img src="/images/LeftButton.png" alt="Previous" className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                  <h1 className="text-[28px] md:text-[36px] font-bold" style={{ color: '#FFFFFF' }}>EVENT CALENDAR</h1>
                  <button 
                    className={`focus:outline-none ml-4 ${currentMonthIndex === availableMonths.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                    onClick={goToNextMonth}
                    disabled={currentMonthIndex === availableMonths.length - 1}
                  >
                    <img src="/images/RightButton.png" alt="Next" className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                </div>
                
                {/* Month Banner - Full width and larger */}
                <div className="bg-[#F3C718] flex justify-center items-center py-2 mb-3">
                  <span className="text-[24px] md:text-[32px] font-bold text-black">{currentMonth}</span>
                </div>
                
                {/* Table Headers - Larger and with bottom border */}
                <div className="w-full flex justify-between items-center pb-2 border-b border-[#F3C718] mb-3">
                  <div className="w-1/3 text-center text-[18px] md:text-[22px] font-bold text-[#F3C718]">DATE</div>
                  <div className="w-1/3 text-center text-[18px] md:text-[22px] font-bold text-[#F3C718]">EVENT</div>
                  <div className="w-1/3 text-center text-[18px] md:text-[22px] font-bold text-[#F3C718]">STATUS</div>
                </div>
                
                {/* Calendar Events - Larger boxes and text */}
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#F3C718] scrollbar-track-transparent">
                  <div className="flex flex-col">
                    {eventSchedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-[#F3C718] py-3">
                        <div className="w-1/3 flex flex-col items-center">
                          <div className="rounded-lg overflow-hidden bg-black border border-[#F3C718] w-[90px] md:w-[110px]">
                            <div className="text-[#F3C718] text-[16px] md:text-[18px] text-center font-bold py-1">{item.dayOfWeek}</div>
                            <div className="text-[#F3C718] text-[40px] md:text-[48px] font-bold text-center leading-none py-1">{item.dayNum}</div>
                            <div className="bg-[#F3C718] text-black text-[16px] md:text-[18px] text-center font-bold py-1">{item.month}</div>
                          </div>
                        </div>
                        
                        <div className="w-1/3 text-[18px] md:text-[22px] text-center text-[#F3C718] px-1 font-bold">
                          {item.event}
                        </div>
                        
                        <div className="w-1/3 flex justify-center">
                          <div className="text-[#F3C718] border-2 border-[#F3C718] rounded-lg px-6 py-3 text-center text-[18px] md:text-[22px] font-bold">
                            {item.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 