import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EventCalendarSection from "./EventCalendarSection";
import React from "react";

export default function MCCCALENDARFINALPage() {
  return (
    <>
      <Helmet>
        <title>Event Calendar - Moonton Student Leaders</title>
        <meta
          name="description"
          content="Stay up-to-date with the Moonton Student Leaders' event calendar. Discover upcoming university rivalries and engage with student leaders across the Philippines."
        />
      </Helmet>
      <div className="w-full bg-black-900">
        <Header />
        
        {/* event calendar section */}
        <EventCalendarSection />
        <Footer />
      </div>
    </>
  );
} 