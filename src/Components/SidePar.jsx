import { useState } from "react"
import SideParIcons from "./SideParIcons"
import { NavLink } from "react-router-dom"


function SidePar({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const handlIsClose = () => {
        setIsOpen(false)
    }

    const handlIsOpen = () => {
        setIsOpen(true)
    }



    return <div>

        <div className={`bg-green-500 sm:w-[25%] w-[17%] h-screen fixed border-r-4 border-gray-300 transition-all duration-700 overflow-hidden ${isOpen === true ? "sm:w-[5%]" : "sm:w-[25%]"}`}>
            <div className="flex justify-between px-4 pb-16">
                <i onClick={handlIsClose} class={`fa-solid text-4xl cursor-pointer text-white fa-chevron-right duration-500 ${isOpen === false ? "hidden" : "block"}`}></i>
                <i onClick={handlIsOpen} class={`fa-solid text-4xl cursor-pointer ml-[7.4em] text-white fa-chevron-left duration-500 ${isOpen === true ? "hidden" : "block"}`}></i>
            </div>
            <NavLink to="/"><SideParIcons icon={`fa-box`} title={`Dashboard`} /></NavLink>
            <NavLink to="/Product"><SideParIcons icon={"fa-boxes-stacked"} title={`Product`} /></NavLink>
            <NavLink to="/Services"><SideParIcons icon={"fa-briefcase"} title={"Services"} /></NavLink>
            <NavLink to="/Parent"><SideParIcons icon={"fa-user"} title={"Parent"} /></NavLink>
            <NavLink to="/Attendance"><SideParIcons icon={"fa-calendar-days"} title={"Attendance"} /></NavLink>
            <NavLink to="/Help"><SideParIcons icon={"fa-headphones-simple"} title={"Help"} /></NavLink>
        </div>

        <div style={{marginLeft: isOpen === true ? "100px" : ""}} id="main" className="ml-[26%] transition-all duration-700 pt-10">
            {children}
        </div>
    </div>
}

export default SidePar

