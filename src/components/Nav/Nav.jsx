import { useEffect, useState } from "react";

const Nav = () => {

    const [bgColor, setBgColor] = useState(false); // Initial background color

    // when i scroll down the page the background color will change to black
    // when i scroll up the page the background color will change to white
    //give the code


    useEffect(() => {
        // Function to handle scrolling
        const handleScroll = () => {
            // Check the scroll position
            if (window.scrollY > 0) {
                setBgColor(true); // Change background color to black when scrolled down
            } else {
                setBgColor(false); // Change background color to white when at the top
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`border-b-[1px] bg-[#0D020D] fixed top-0 w-full z-50 ${bgColor && 'bg-black bg-opacity-80'}`}>
            <div className="px-5 pt-7 pb-5 max-w-[1270px] mx-auto flex items-center justify-between relative z-30">
                <h1 className="text-[18px] font-extrabold">SmartEdit.</h1>

                <div className="hidden  md:flex items-center gap-[60px] ">
                    <h1 className="text-[18px] font-medium">Product</h1>
                    <h1 className="text-[18px] font-medium">Partner</h1>
                    <h1 className="text-[18px] font-medium">Pricing</h1>
                    <h1 className="text-[18px] font-medium">About</h1>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <button className="px-4 md:px-8 py-1 bg-white text-black text-[16px] font-semibold rounded-full">Sign up</button>
                    <button className="px-4 md:px-8 py-1 bg-transparent  text-[16px] border-[1px] border-white font-semibold rounded-[20px]">Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;