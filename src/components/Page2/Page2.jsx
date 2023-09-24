import img1 from '../../assets/page2Icon/Audio Wave.png'
import img2 from '../../assets/page2Icon/Vector (1).svg'
import img3 from '../../assets/page2Icon/Vector.svg'
import img4 from '../../assets/page2Icon/Video Trimming.png'
import img5 from '../../assets/page2Icon/Visual Effects.png'

import img6 from '../../assets/page2Icon/img1.svg'
import img7 from '../../assets/page2Icon/img2.svg'


const Page2 = () => {
    return (
        <>
            <div className=" relative z-30 text-center px-5 pb-10" >
                <div className="max-w-[800px] mx-auto">

                    <h1 className="text-5xl md:text-[60px] text-center header-main-text font-medium bg-clip-text leading-[60px]  md:leading-[90px] mt-[45px]">Welcome in SmartEdit</h1>

                    <p className="text-center font-semibold text-lg md:text-[22px] text-[rgba(255, 255, 255, 0.81)] leading-7 lg:leading-9 mt-[30px]">Discover the next generation of video editing where professional grade content meets unparalleled simplicity. Thanks to an AI driving, craft stunning videos in just a seven steps, elevating your storytelling to cinematic heights. No expertise required, just your vision.</p>
                </div>


                <div className="mt-16 relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-9 gap-x-32">

                    <p className='absolute top-[45px] z-30 left-2/4 -translate-x-2/4 lg:translate-x-0  w-[70%] lg:left-8 lg:w-full h-[4px] bg-[#BDB4BA] mx-auto text-center'></p>

                    <p className='absolute top-[230px] z-30 left-2/4 -translate-x-2/4 lg:translate-x-0  w-[70%] lg:left-8 lg:w-full h-[4px] bg-[#BDB4BA] mx-auto text-center lg:hidden'></p>

                    <p className='absolute top-[385px] z-30 left-2/4 -translate-x-2/4 lg:translate-x-0  w-[70%] lg:left-8 lg:w-full h-[4px] bg-[#BDB4BA] mx-auto text-center md:hidden'></p>


                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <img src={img3} className='w-10 h-10    mx-auto' alt="" />
                        </div>
                        <p className=" text-center font-medium mt-2">Scipt & Audio import</p>
                    </div>



                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <img src={img2} className='w-10 h-10    mx-auto' alt="" />
                        </div>
                        <p className=" text-center font-medium mt-2">Keywords
                            selectio</p>
                    </div>



                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <img src={img4} className='w-10 h-10    mx-auto' alt="" />
                        </div>
                        <p className=" text-center font-medium mt-2">Video editing</p>
                    </div>


                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <img src={img1} className='w-10 h-10    mx-auto' alt="" />
                        </div>
                        <p className=" text-center font-medium mt-2">Music editing</p>
                    </div>


                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <img src={img5} className='w-10 h-10    mx-auto' alt="" />
                        </div>

                        <p className=" text-center font-medium mt-2">Video effect & subtitles</p>
                    </div>


                    <div className='w-[120px] mx-auto relative z-40'>
                        <div className="bg-[#6D5578]  rounded-full h-[90px] w-[90px] mx-auto flex justify-center items-center">
                            <div>
                                <img src={img7} className='w-6      mx-auto' alt="" />
                                <img src={img6} className='w-10 -mt-1    mx-auto' alt="" />
                            </div>
                        </div>
                        <p className=" text-center font-medium mt-2">Exporting</p>
                    </div>



                </div>

                <div className='text-center'>
                    <button className="px-8 py-2 mt-14 bg-white text-black text-[20px] font-semibold rounded-full">Generate my first video</button>
                </div>


            </div>
        </>
    );
};

export default Page2;