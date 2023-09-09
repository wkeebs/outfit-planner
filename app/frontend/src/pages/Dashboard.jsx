import Weather from "../components/Weather";
import Wardrobe from "../components/Wardrobe";
import GenerateOufit from "../components/GenerateOutfit";
import "./Dashboard.css";

function Dashboard() {
  return (
    <body class="spacer layer1 bg-black h-screen absolute">
      <h1 class="text-5xl italic font-semibold tracking-wide text-center place-content-center">
        Outfit Wizard
      </h1>

      <div class="flex gap-8">
        <div class="w-1/4">
          <Wardrobe />
        </div>

        <div class="w-1/2 place-items-center h-full">
          <GenerateOufit></GenerateOufit>
        </div>

        <div class="w-1/4">
          <Weather />
        </div>
      </div>
    </body>
  );
}

export default Dashboard;
