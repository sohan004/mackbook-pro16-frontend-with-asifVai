import img1 from '../../assets/page3Img/dariusz-sankowski-dvK_CT1Wg78-unsplash 1.png'
import img2 from '../../assets/page3Img/joseph-pearson-b6fKcY3s8VE-unsplash 1.png'

const Page3 = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10 relative z-40 h-full flex flex-col justify-between gap-5">
            <div>
                <h3 className="text-center text-xl lg:text-3xl font-medium mt-36 mb-12">Please  upload an text version and a audio version of your scipt</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                    <div className="w-full h-[330px] relative">
                        <img src={img1} className='w-full h-full rounded-md' alt="" />

                        <p className='absolute right-2 bottom-2'>.txt</p>

                        <button className="btn bg-transparent absolute left-4 bottom-4 text-white border hover:bg-transparent border-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 37 33" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05556 19.5556C3.19081 19.5556 4.11111 20.3764 4.11111 21.3889V27.9074C4.11111 28.2856 4.27955 28.6483 4.57938 28.9157C4.87921 29.1831 5.28586 29.3333 5.70988 29.3333H31.2901C31.7141 29.3333 32.1208 29.1831 32.4206 28.9157C32.7205 28.6483 32.8889 28.2856 32.8889 27.9074V21.3889C32.8889 20.3764 33.8092 19.5556 34.9444 19.5556C36.0797 19.5556 37 20.3764 37 21.3889V27.9074C37 29.258 36.3984 30.5534 35.3276 31.5084C34.2568 32.4635 32.8045 33 31.2901 33H5.70988C4.19552 33 2.74319 32.4635 1.67238 31.5084C0.601574 30.5534 0 29.258 0 27.9074V21.3889C0 20.3764 0.920304 19.5556 2.05556 19.5556Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9107 11.9444C8.71344 11.2284 10.015 11.2284 10.8177 11.9444L18.5 18.7962L26.1823 11.9444C26.9851 11.2284 28.2866 11.2284 29.0893 11.9444C29.892 12.6603 29.892 13.8211 29.0893 14.5371L19.9535 22.6852C19.1508 23.4012 17.8492 23.4012 17.0465 22.6852L7.9107 14.5371C7.10796 13.8211 7.10796 12.6603 7.9107 11.9444Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 0C19.6353 0 20.5556 0.820811 20.5556 1.83333V21.3889C20.5556 22.4014 19.6353 23.2222 18.5 23.2222C17.3647 23.2222 16.4444 22.4014 16.4444 21.3889V1.83333C16.4444 0.820811 17.3647 0 18.5 0Z" fill="white" />
                            </svg>
                            Upload a Script</button>
                    </div>

                    <div className="w-full h-[330px] relative">
                        <img src={img2} className='w-full h-full rounded-md' alt="" />

                        <p className='absolute right-2 bottom-2'>.mp3</p>

                        <button className="btn bg-transparent absolute left-4 bottom-4 text-white border hover:bg-transparent border-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 37 33" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05556 19.5556C3.19081 19.5556 4.11111 20.3764 4.11111 21.3889V27.9074C4.11111 28.2856 4.27955 28.6483 4.57938 28.9157C4.87921 29.1831 5.28586 29.3333 5.70988 29.3333H31.2901C31.7141 29.3333 32.1208 29.1831 32.4206 28.9157C32.7205 28.6483 32.8889 28.2856 32.8889 27.9074V21.3889C32.8889 20.3764 33.8092 19.5556 34.9444 19.5556C36.0797 19.5556 37 20.3764 37 21.3889V27.9074C37 29.258 36.3984 30.5534 35.3276 31.5084C34.2568 32.4635 32.8045 33 31.2901 33H5.70988C4.19552 33 2.74319 32.4635 1.67238 31.5084C0.601574 30.5534 0 29.258 0 27.9074V21.3889C0 20.3764 0.920304 19.5556 2.05556 19.5556Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9107 11.9444C8.71344 11.2284 10.015 11.2284 10.8177 11.9444L18.5 18.7962L26.1823 11.9444C26.9851 11.2284 28.2866 11.2284 29.0893 11.9444C29.892 12.6603 29.892 13.8211 29.0893 14.5371L19.9535 22.6852C19.1508 23.4012 17.8492 23.4012 17.0465 22.6852L7.9107 14.5371C7.10796 13.8211 7.10796 12.6603 7.9107 11.9444Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 0C19.6353 0 20.5556 0.820811 20.5556 1.83333V21.3889C20.5556 22.4014 19.6353 23.2222 18.5 23.2222C17.3647 23.2222 16.4444 22.4014 16.4444 21.3889V1.83333C16.4444 0.820811 17.3647 0 18.5 0Z" fill="white" />
                            </svg>
                            Upload an Audio</button>
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
                        <p className='w-[25%] h-full bg-white rounded-l-lg rounded-e-full'></p>
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

export default Page3;