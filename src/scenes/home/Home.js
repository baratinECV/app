import React from "react";
import "./Home.css";
import Bulle from "../../components/bulle/Bulle";
import Chat from "../../components/chat/Chat";
import Hero from "../../components/hero/Hero";
import Hour from "../../components/hour/hour";
import Story from "../../components/story/Story";

function Home() {
  return (
    <div className='container'>
      <Hero />
      <Story />

      <Hour />

      <Chat />

      {/* <Bulle /> */}
    </div>
  );
}
export default Home;
