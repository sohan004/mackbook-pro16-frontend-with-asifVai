
const Page4 = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10 relative z-40 h-full flex flex-col justify-between gap-5">
            <div>
                <h3 className="text-center text-xl lg:text-3xl font-medium mt-36 mb-12">Please select keywords that match the most with your script subparts  </h3>


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