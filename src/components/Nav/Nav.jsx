
const Nav = () => {
    return (
        <div className="border-b-[1px]">
            <div className="px-5 pt-7 pb-5 max-w-[1440px] mx-auto flex items-center justify-between relative z-30">
                <h1 className="text-[18px] font-extrabold">SmartEdit.</h1>

                <div className="flex items-center gap-[60px]">
                    <h1 className="text-[18px] font-medium">Product</h1>
                    <h1 className="text-[18px] font-medium">Partner</h1>
                    <h1 className="text-[18px] font-medium">Pricing</h1>
                    <h1 className="text-[18px] font-medium">About</h1>
                </div>

                <div className="flex items-center gap-8">
                    <button className="px-8 py-1 bg-white text-black text-[20px] font-semibold rounded-[20px]">Sign up</button>
                    <button className="px-8 py-1 bg-transparent  text-[20px] border-[1px] border-white font-semibold rounded-[20px]">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;