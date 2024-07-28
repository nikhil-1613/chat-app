import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

export default function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550-px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0">
      {/* Sidebar  */}
      <Sidebar/>
      {/* message container */}
      <MessageContainer/>
    </div>
  );
}
