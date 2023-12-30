import { useState } from "react"
import HeroList from "./HeroList"
import SidePar from "./SidePar"

function Hero() {

    
    return <div className={`sm:flex sm:flex-row flex-col gap-5 space-y-5 sm:space-y-0 }`}>
        <HeroList bg="orange" title={"Courses"} />
        <HeroList bg="skyblue" title={"Employee"} />
        <HeroList bg="yellow" title={"Classes"} />
    </div>
}

export default Hero