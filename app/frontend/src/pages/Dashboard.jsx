import { useState } from "react"
import Weather from "../components/Weather";
import Wardrobe from "../components/Wardrobe";


function Dashboard () {


    return(
        <div>
            <Wardrobe/>
            <Weather/>
        </div>
    )


}

export default Dashboard