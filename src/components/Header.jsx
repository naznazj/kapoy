import { Link } from "react-router-dom";
import logo from "../assets/lgo.png"

export const Header = () => {
    return (
        <nav className="h-20 shadow-md flex items-center bg-slate-50">
            <div className="w-1/2 flex justify-start ml-6"><img src={logo} alt="Logo Here" className="h-20" /></div>
            <ul className="flex justify-end gap-20 mr-8 font-serif text-l w-1/2 ">
                <li className="transition-transform transform hover:scale-105"><Link to="/">Home</Link></li>
                <li className="transition-transform transform hover:scale-105"><Link to="/Projects">Projects</Link></li>
                <li className="transition-transform transform hover:scale-105"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
