
const Home = () => {
    return (
        <div className="h-full flex justify-center items-center">
            <div className="max-w-[700px] mx-auto relative z-30 text-center px-4" >
                <h1 className="text-5xl md:text-[90px] text-center header-main-text font-medium bg-clip-text leading-[60px]  md:leading-[90px] ">A new way to edit your video</h1>

                <p className="text-center font-semibold text-lg md:text-[26px] text-[rgba(255, 255, 255, 0.81)] leading-7 lg:leading-9 mt-[30px]">Unleash the power of AI to transform your video script into a captivating video masterpiece.</p>


                <button className="px-8 py-2 mt-14 bg-white text-black text-[20px] font-semibold rounded-full">Try Now For Free</button>

            </div>
        </div>
    );
};

export default Home;