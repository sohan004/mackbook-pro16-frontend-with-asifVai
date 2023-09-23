
const Nav = () => {
    return (
        <div className="border-b-[1px]">
            <div className="px-14 mt-16 pb-12 max-w-[1728px] mx-auto flex justify-between relative z-30">
                <h1 className="text-[32px] font-extrabold">SmartEdit.</h1>

                <div className="flex items-center gap-[109px]">
                    <h1 className="text-[32px] font-medium">Product</h1>
                    <h1 className="text-[32px] font-medium">Partner</h1>
                    <h1 className="text-[32px] font-medium">Pricing</h1>
                    <h1 className="text-[32px] font-medium">About</h1>
                </div>

                <div className="flex items-center gap-8">
                    <button className="px-12 py-2 bg-white text-black text-[27px] font-semibold rounded-[27px]">Sign up</button>
                    <button className="px-12 py-2 bg-transparent  text-[27px] border-[1px] border-white font-semibold rounded-[27px]">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;