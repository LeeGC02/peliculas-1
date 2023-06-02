import React from "react";
import Serch from "../components/Serch";
import PosterCard from "../components/SeccionMovie";
import SeccionMovie from "../components/SeccionMovie";
import TabBar from "../components/TabBar";
import Slider from "../components/Slider";
import ComingSoon from "../components/ComingSoon";

const Home = () => {
  return (
    <div>
      <Serch />
      <ComingSoon />
      {/* <Slider /> */}
      <TabBar />
      {/* <SeccionMovie/> */}
    </div>
  );
};

export default Home;
