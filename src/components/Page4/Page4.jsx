import { useState } from "react";

const Page4 = () => {
    const [selected, setSelected] = useState('Add a custom key word...');
    const [selected2, setSelected2] = useState('Add a custom key word...');
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10 relative z-40 h-full flex flex-col justify-between gap-5">
            <div>
                <h3 className="text-center text-xl lg:text-3xl font-medium mt-36 mb-12">Please select keywords that match the most with your script subparts  </h3>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[80%]">
                        <p className="text-xl lg:text-2xl opacity-50 font-medium">“Aliquam scelerisque hendrerit orci, sit amet suscipit sem” </p>
                        <div className="mt-4 w-full bg-white rounded-xl bg-opacity-25 ">
                            <p onClick={() => setSelected('Phasellus')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected == 'Phasellus' && 'bg-white bg-opacity-20 text-black'}`}>Phasellus</p>
                            <p onClick={() => setSelected('Nunc')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected == 'Nunc' && 'bg-white bg-opacity-20 text-black'}`}>Nunc</p>
                            <p onClick={() => setSelected('Pellentesque')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected == 'Pellentesque' && 'bg-white bg-opacity-20 text-black'}`}>Pellentesque</p>
                            <p onClick={() => setSelected('Add a custom key word...')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected == 'Add a custom key word...' && 'bg-white bg-opacity-20 text-black'}`}>Add a custom key word...</p>
                        </div>
                        <p className="text-xl lg:text-2xl opacity-50 font-medium mt-5">“Aliquam scelerisque hendrerit orci, sit amet suscipit sem” </p>
                        <div className="mt-4 w-full bg-white rounded-xl bg-opacity-25 ">
                            <p onClick={() => setSelected2('Phasellus')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected2 == 'Phasellus' && 'bg-white bg-opacity-20 text-black'}`}>Phasellus</p>
                            <p onClick={() => setSelected2('Nunc')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected2 == 'Nunc' && 'bg-white bg-opacity-20 text-black'}`}>Nunc</p>
                            <p onClick={() => setSelected2('Pellentesque')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected2 == 'Pellentesque' && 'bg-white bg-opacity-20 text-black'}`}>Pellentesque</p>
                            <p onClick={() => setSelected2('Add a custom key word...')} className={`px-6 py-1 cursor-pointer rounded-xl font-medium ${selected2 == 'Add a custom key word...' && 'bg-white bg-opacity-20 text-black'}`}>Add a custom key word...</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[20%] rounded-xl bg-white h-full bg-opacity-25 p-7 text-center">
                        <p className="text-lg">Pregression</p>
                        <div className="mt-4 relative w-full h-[275px] bg-white rounded-xl bg-opacity-25 flex justify-center items-end">
                            <p className="text-2xl font-medium text-black absolute text-center top-2/4 -translate-y-2/4">11%</p>

                            <p className="bg-white w-full h-[11%] rounded-2xl "></p>
                        </div>
                    </div>

                </div>


            </div>


            <div className='flex gap-4 items-center '>
                <div className='flex-grow flex items-center'>
                    <div className='bg-white p-4 rounded-full bg-opacity-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 41" fill="none">
                            <path d="M20.625 0H4.125C1.85625 0 0.0206255 1.845 0.0206255 4.1L0 36.9C0 39.155 1.83562 41 4.10437 41H28.875C31.1438 41 33 39.155 33 36.9V12.3L20.625 0ZM24.75 32.8H8.25V28.7H24.75V32.8ZM24.75 24.6H8.25V20.5H24.75V24.6ZM18.5625 14.35V3.075L29.9063 14.35H18.5625Z" fill="#BDB4BA" />
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

export default Page4;