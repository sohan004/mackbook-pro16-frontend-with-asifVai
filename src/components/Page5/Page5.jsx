import React from 'react';
import img from '../../assets/page5Img/pexels-yurii-hlei-1545743 1.png'

const Page5 = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10 relative z-40 h-full flex flex-col justify-between gap-5">
            <div>

                <div className="flex flex-col mt-36 lg:flex-row gap-10">
                    <div className='w-full lg:w-[75%]'>
                        <div className='w-full bg-white rounded-xl bg-opacity-20  px-6 py-4'>
                            <img src={img} className='w-full' alt="" />

                            <div className='h-3 bg-white bg-opacity-25'>
                                <div className='w-20 h-full relative  bg-[#190B2B]'>
                                    <p className='absolute left-[30%] w-[2px] bg-opacity-50 h-full bg-white'></p>
                                    <p className='absolute left-[60%] w-[2px] bg-opacity-50 h-full bg-white'></p>
                                    <p className='absolute left-[70%] w-[2px] bg-opacity-50 h-full bg-white'></p>
                                </div>
                            </div>

                            <div className='grid grid-cols-5 mt-4 mb-7'>
                                <div className='flex relative'>
                                    <div className='bg-white px-3 py-1 rounded-xl bg-opacity-25'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 58 30" fill="none">
                                            <path d="M28.1714 30V0L0 15L28.1714 30ZM29.8286 15L58 30V0L29.8286 15Z" fill="#1B0E37" />
                                        </svg>
                                    </div>
                                    <p className='absolute -bottom-5 left-3 text-xs opacity-50'>Undo</p>
                                </div>

                                <div className='flex justify-center relative'>
                                    <div className='bg-white px-3 py-1 rounded-xl bg-opacity-25'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 43 33" fill="none">
                                            <path d="M0 33H7.81818V13.2H0V33ZM43 14.85C43 13.035 41.2409 11.55 39.0909 11.55H26.7577L28.6145 4.0095L28.6732 3.4815C28.6732 2.805 28.3409 2.178 27.8132 1.7325L25.7414 0L12.8805 10.8735C12.1573 11.4675 11.7273 12.2925 11.7273 13.2V29.7C11.7273 31.515 13.4864 33 15.6364 33H33.2273C34.8495 33 36.2373 32.175 36.8236 30.987L42.7264 19.3545C42.9023 18.975 43 18.579 43 18.15V14.85Z" fill="#18081D" />
                                        </svg>
                                    </div>
                                    <p className='absolute -bottom-5 text-center text-xs opacity-50'>Undo</p>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='text-xl opacity-70'>00:25</p>
                                </div>

                                <div className='flex justify-center relative'>
                                    <div className='bg-white px-3 py-1 rounded-xl bg-opacity-25'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 43 33" fill="none">
                                            <path d="M27.3636 0H9.77273C8.15045 0 6.76273 0.825 6.17636 2.013L0.273636 13.6455C0.0977272 14.025 0 14.421 0 14.85V18.15C0 19.965 1.75909 21.45 3.90909 21.45H16.2423L14.3855 28.9905L14.3268 29.5185C14.3268 30.195 14.6591 30.822 15.1868 31.2675L17.2586 33L30.1391 22.1265C30.8427 21.5325 31.2727 20.7075 31.2727 19.8V3.3C31.2727 1.485 29.5136 0 27.3636 0ZM35.1818 0V19.8H43V0H35.1818Z" fill="#180314" />
                                        </svg>
                                    </div>
                                    <p className='absolute -bottom-5 text-center text-xs opacity-50'>Dislike</p>
                                </div>

                                <div className='flex justify-end relative'>
                                    <div className='bg-white px-3 py-1 rounded-xl bg-opacity-25'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 58 30" fill="none">
                                            <path d="M0 30L28.1714 15L0 0V30ZM29.8286 0V30L58 15L29.8286 0Z" fill="#2D022E" />
                                        </svg>
                                    </div>
                                    <p className='absolute -bottom-5 right-3 text-xs opacity-50'>Next</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[25%]'>
                        <div className=' w-full bg-white rounded-xl bg-opacity-20  px-6 py-4'>
                            <h1 className="text-center text-xl opacity-50 font-medium">Script Subpart</h1>
                            <p className='mt-3 text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet imperdiet enim eget placerat. Morbi viverra enim lacinia,”</p>
                            <h1 className="text-center text-xl mt-5  font-medium"><span className='opacity-50'>Keyword :</span> Laborum</h1>
                        </div>
                        <div className='w-full bg-white rounded-xl bg-opacity-20  px-6 py-4 mt-7'>
                            <p className="text-center opacity-40">Effects</p>
                            <div className='grid grid-cols-2 gap-4 mt-2'>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                                <p className='bg-white w-full rounded-lg h-7 bg-opacity-20'></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='flex gap-4 items-center '>
                <div className='flex-grow flex items-center'>
                    <div className='bg-white p-4 rounded-full bg-opacity-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 97" fill="none">
                            <ellipse cx="50" cy="48.5" rx="50" ry="48.5" fill="white" fill-opacity="0.24" />
                        </svg>
                    </div>
                    <div className="flex-grow w-full h-3 rounded-l-lg rounded-e-full overflow-hidden bg-opacity-30 bg-white">
                        <p className='w-[45%] h-full bg-white rounded-l-lg rounded-e-full'></p>
                    </div>
                </div>

                <div>
                    <button className="px-4 md:px-5 py-1 flex justify-center items-center gap-1 bg-white text-black text-[16px] font-semibold rounded-full">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="22" viewBox="0 0 55 35" fill="none">
                            <g clip-path="url(#clip0_49_229)">
                                <path d="M30.1894 16.25H9V19.1667H30.1894V23.5417L39.3332 17.7083L30.1894 11.875V16.25Z" fill="#341940" />
                            </g>
                            <defs>
                                <clipPath id="clip0_49_229">
                                    <rect width="55" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page5;