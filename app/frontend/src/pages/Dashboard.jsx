import { useState } from "react";
import Weather from "../components/Weather";
import Wardrobe from "../components/Wardrobe";
import GenerateOufit from "../components/GenerateOutfit";

function Dashboard() {
  return (
    <body class="flex">
      <div class="w-1/4">
        <Wardrobe />
      </div>
      <div class="w-1/3">
        <GenerateOufit></GenerateOufit>
      </div>
      <div class="w-1/3">
        <Weather />
      </div>
    </body>
  );
}

export default Dashboard;
