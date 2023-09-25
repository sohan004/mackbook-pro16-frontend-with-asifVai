import React from 'react';
import img from '../../assets/page5Img/pexels-yurii-hlei-1545743 1.png'

const Page8 = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10 relative z-40 h-full flex flex-col justify-between gap-5">
            <div>
                <h3 className=" text-xl lg:text-3xl font-medium mt-36 mb-12">Your video has been generated successfully</h3>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[80%] ">
                        <div className='bg-white gap-3 p-4 bg-opacity-20 rounded-lg flex flex-col lg:flex-row'>
                            <img src={img} className='w-full lg:w-[40%]' alt="" />
                            <div>
                                <h1 className='text-lg font-medium'>How Audi wrote the automotive history</h1>
                                <p className='mt-3'><span className='opacity-50'>Time : </span>12:35</p>
                                <p className='mt-2'><span className='opacity-50'>Size : </span>1.2 Gb</p>
                                <p className='mt-2'><span className='opacity-50'>Date : </span>1/5/23</p>
                            </div>
                        </div>

                        <div className='mt-8 flex flex-col lg:flex-row gap-2 lg:justify-between'>
                            <p className='flex justify-center items-center gap-2 text-lg border border-white rounded-full px-4 py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 43 42" fill="none">
                                    <g clip-path="url(#clip0_58_12)">
                                        <path d="M8.95801 31.5H34.0413V35H8.95801V31.5ZM17.1997 26.775L8.95801 18.725L12.5413 15.4L17.1997 19.95L30.458 7L34.0413 10.5L17.1997 26.775Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_58_12">
                                            <rect width="43" height="42" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                save and draft</p>
                            <p className='flex justify-center items-center gap-2 text-lg border border-white rounded-full px-4 py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 43 42" fill="none">
                                    <g clip-path="url(#clip0_58_12)">
                                        <path d="M8.95801 31.5H34.0413V35H8.95801V31.5ZM17.1997 26.775L8.95801 18.725L12.5413 15.4L17.1997 19.95L30.458 7L34.0413 10.5L17.1997 26.775Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_58_12">
                                            <rect width="43" height="42" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Download</p>
                            <p className='flex justify-center items-center gap-2 text-lg border border-white rounded-full px-4 py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 21 25" fill="none">
                                    <path d="M15.75 4.54545L13.8862 6.15909L11.7994 4.35227V17.0455H9.20063V4.35227L7.11375 6.15909L5.25 4.54545L10.5 0L15.75 4.54545ZM21 10.2273V22.7273C21 23.9773 19.8188 25 18.375 25H2.625C1.16813 25 0 23.9773 0 22.7273V10.2273C0 8.96591 1.16813 7.95455 2.625 7.95455H6.5625V10.2273H2.625V22.7273H18.375V10.2273H14.4375V7.95455H18.375C19.8188 7.95455 21 8.96591 21 10.2273Z" fill="#EADCDC" />
                                </svg>
                                Share</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[20%] rounded-xl h-full bg-opacity-20 p-7 text-center">

                    </div>

                </div>


            </div>


            <div className='flex gap-4 items-center '>
                <div className='flex-grow flex items-center'>
                    <div className='bg-white p-4 rounded-full bg-opacity-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 38 38" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11111 22.5185C3.27705 22.5185 4.22222 23.4637 4.22222 24.6296V32.1358C4.22222 32.5713 4.39522 32.9889 4.70315 33.2969C5.01108 33.6048 5.42872 33.7778 5.8642 33.7778H32.1358C32.5713 33.7778 32.9889 33.6048 33.2969 33.2969C33.6048 32.9889 33.7778 32.5713 33.7778 32.1358V24.6296C33.7778 23.4637 34.723 22.5185 35.8889 22.5185C37.0548 22.5185 38 23.4637 38 24.6296V32.1358C38 33.6911 37.3822 35.1827 36.2824 36.2824C35.1827 37.3822 33.6911 38 32.1358 38H5.8642C4.30892 38 2.81733 37.3822 1.71758 36.2824C0.617833 35.1827 0 33.6911 0 32.1358V24.6296C0 23.4637 0.945177 22.5185 2.11111 22.5185Z" fill="#BDB4BA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1245 13.7541C8.94894 12.9297 10.2856 12.9297 11.1101 13.7541L19 21.6441L26.8899 13.7541C27.7144 12.9297 29.0511 12.9297 29.8755 13.7541C30.6999 14.5786 30.6999 15.9153 29.8755 16.7397L20.4928 26.1224C19.6683 26.9468 18.3317 26.9468 17.5072 26.1224L8.1245 16.7397C7.30006 15.9153 7.30006 14.5786 8.1245 13.7541Z" fill="#BDB4BA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0C20.1659 0 21.1111 0.945177 21.1111 2.11111V24.6296C21.1111 25.7956 20.1659 26.7407 19 26.7407C17.8341 26.7407 16.8889 25.7956 16.8889 24.6296V2.11111C16.8889 0.945177 17.8341 0 19 0Z" fill="#BDB4BA" />
                        </svg>
                    </div>
                    <div className="flex-grow w-full h-3 rounded-l-lg rounded-e-full overflow-hidden bg-opacity-30 bg-white">
                        <p className='w-[100%] h-full bg-white rounded-l-lg rounded-e-full'></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page8;