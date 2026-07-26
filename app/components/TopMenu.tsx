import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";

export const TopMenu = () => {
    return (
        <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">

            <div className="px-6 flex items-center justify-between space-x-4 h-full">
                <div className="flex justify-center gap-4 items-center">
                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <CiMenuBurger size={30} />
                    </button>
                    <h5 className="text-2xl text-gray-600 font-medium">Dashboard</h5>

                </div>
                <div className="flex space-x-2">

                    <div className="hidden md:block md:flex-1 md:max-w-md">
                        <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                            <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                <CiSearch />
                            </span>
                            <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 lg:hidden">
                        <CiSearch className="text-black" size={25} />
                    </button>
                    <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                        <CiChat1 className="text-black" size={25} />
                    </button>
                    <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                        <CiBellOn className="text-black" size={25} />
                    </button>
                </div>
            </div>
        </div>
    );
};