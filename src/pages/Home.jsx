import { About } from "../components/About";
import { Skills } from "../components/Skills";
import Lottie from "lottie-react";
import animationData from "../assets/hello3.json";


export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-amber-200 flex">
                <div className="h-screen bg-white w-1/2 flex justify-center items-center">
                    <div className="">
                        <Lottie animationData={animationData} />
                    </div>
                </div>
                <div className="h-screen bg-white w-1/2 flex justify-center items-start flex-col">
                    <h1 className="font-extrabold text-9xl text-black">Hello</h1>
                    <p className="italic text-7xl">I’m Joe!</p>
                    <p className="font-serif text-8xl">Take a look and</p>
                    <p className="font-semibold text-6xl">get to know me better.</p>
                </div>
            </div>
            <About />
            <Skills />
        </>
    );
};
