import React from "react";
import Navbar from "./components/Navbar";
import CanvasCards from "./components/CanvasCards.js";
import CanvasData from "./Assets/CanvData";

export default function App() {
  const mapdcards = CanvasData.map((item) => (
    <CanvasCards
      key={item.id}
      item={item}
      //   country={item.country}
      //   place={item.place}
      //   duration={item.duration}
      //   description={item.description}
    />
  ));
  return (
    <div>
      <Navbar />
      <div>{mapdcards}</div>
    </div>
  );
}
