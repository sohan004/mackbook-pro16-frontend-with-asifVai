
const Nav = () => {
    return (
        <div className="border-b-[1px] fixed top-0 w-full z-50">
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