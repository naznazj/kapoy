import { About } from "../components/About";
import { Skills } from "../components/Skills";
import Lottie from "lottie-react";
import animationData from "../assets/hello3.json";

export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-amber-200 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
                    <Lottie animationData={animationData} />
                </div>
                <div className="w-full md:w-1/2 bg-white flex justify-center items-start flex-col p-4 md:p-8">
                    <h1 className="text-5xl md:text-9xl font-extrabold text-black">Hello</h1>
                    <p className="text-3xl md:text-7xl italic">I’m Joe!</p>
                    <p className="text-4xl md:text-8xl font-serif">Take a look and</p>
                    <p className="text-2xl md:text-6xl font-semibold">get to know me better.</p>
                </div>
            </div>
            <About />
            <Skills />
        </>
    );
};
