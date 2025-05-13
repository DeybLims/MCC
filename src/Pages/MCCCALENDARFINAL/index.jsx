import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function MCCCALENDARFINALPage() {
  return (
    <>
      <Helmet>
        <title>MCC Calendar - Student Leaders Hub</title>
        <meta
          name="description"
          content="View the Moonton Student Leaders Philippines event calendar. Stay updated with upcoming events and activities."
        />
      </Helmet>
      <div className="w-full bg-black-900">
        <Header />
        
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[url('/public/images/MCC2_CALENDAR_BG.png')] bg-cover bg-no-repeat py-[30px]">
          <h1 className="text-amber-400 text-[54px] font-bold mb-4">MCC Calendar</h1>
          <p className="text-white-a700 text-[20px] text-center max-w-2xl">
            View the official calendar for Moonton Student Leaders Philippines events and activities.
          </p>
          {/* Calendar content will go here */}
        </div>
        
        <Footer />
      </div>
    </>
  );
} 