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
      <div className="flex gap-8">
        <div className="w-1/4">
            <div className="p-4 rounded-lg h-4/4">
                <Wardrobe />
            </div>
        </div>

        <div className="w-1/2 place-items-center">
            <div className="p-4 rounded-lg">
            <GenerateOufit/>
            </div>
        </div>

        <div className="w-1/4">
            <div className="p-4 rounded-lg h-3/4">
            <Weather />
            </div>
        </div>
    </div>
    </body>
  );
}

export default Dashboard;
