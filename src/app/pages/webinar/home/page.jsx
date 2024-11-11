import React from "react";
import WebinarSection from "@/app/components/webinar/WebinarSection";
import Panelistas from "@/app/components/webinar/Panelistas";
import QueAprenderas from "@/app/components/webinar/QueAprenderas";

const Page = () => {
    return (
      <div className="overflow-x-hidden">
      <WebinarSection />
      <QueAprenderas />
      <div className="flex justify-center items-center bg-gradient-to-t from-[#845C42] to-[#b59b8e] w-full py-16">
        <Panelistas />
      </div>
    </div>
    );
  };
  
  
  export default Page;