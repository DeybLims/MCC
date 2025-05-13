import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MCCHeaderSection from "./MCCHeaderSection";
import React from "react";

export default function MCCMAINPage() {
  return (
    <>
      <Helmet>
        <title>Moonton Main - Student Leaders Hub</title>
        <meta
          name="description"
          content="Explore the Moonton Student Leaders Philippines hub for the latest news, programs, and resources. Get involved with our community and stay updated with events and partnerships."
        />
      </Helmet>
      <div className="w-full bg-black-900">
        <Header />
        
        {/* m c c header section */}
        <MCCHeaderSection />
        <Footer />
      </div>
    </>
  );
}
