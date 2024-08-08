import { Link } from "react-router-dom";
import logo from "../assets/lgo.png";

export const Header = () => {
    return (
        <nav className="h-16 md:h-20 shadow-md flex items-center bg-slate-50">
            <div className="w-1/2 flex justify-start ml-4 md:ml-6">
                <img src={logo} alt="Logo Here" className="h-16 md:h-20" />
            </div>
            <ul className="hidden md:flex justify-end gap-6 md:gap-20 mr-4 md:mr-8 font-serif text-base md:text-lg">
                <li className="transition-transform transform hover:scale-105">
                    <Link to="/">Home</Link>
                </li>
                <li className="transition-transform transform hover:scale-105">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className="transition-transform transform hover:scale-105">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};
