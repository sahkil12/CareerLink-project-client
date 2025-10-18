import { BsPcDisplayHorizontal } from "react-icons/bs";
import { FaClipboardList, FaCode, FaUserLock } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { RiImageEditFill } from "react-icons/ri";

const Categories = () => {
    return (
        <div className="p-2">
            <div className="mt-5 mb-10 py-6 gap-4 flex text-gray-800 flex-col items-center text-center px-2">
                <h2 className="text-3xl md:text-4xl font-semibold">Browse By Category</h2>
                <p className="text-gray-600 opacity-85">Find The Job That's Perfect For You And Match With Your Category</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <BsPcDisplayHorizontal className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Management</span>
                    <span className="text-gray-600 font-medium text-sm">1400 Jobs Available</span>
                  </h2>
                </aside>
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <GiLaptop  className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Digital Marketing</span>
                    <span className="text-gray-600 font-medium text-sm">700 Jobs Available</span>
                  </h2>
                </aside>
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <FaUserLock className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Security Analyst</span>
                    <span className="text-gray-600 font-medium text-sm">460 Jobs Available</span>
                  </h2>
                </aside>
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <FaClipboardList className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Content Writer</span>
                    <span className="text-gray-600 font-medium text-sm">890 Jobs Available</span>
                  </h2>
                </aside>
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <FaCode className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Web Developer</span>
                    <span className="text-gray-600 font-medium text-sm">1100 Jobs Available</span>
                  </h2>
                </aside>
                <aside className="border-2 rounded-lg border-neutral-200 hover:border-blue-300 w-full flex gap-3 items-center px-6 py-5">
                    <RiImageEditFill className="text-blue-400" size={30}/>
                  <h2 className="flex flex-col gap-1">
                    <span className="font-semibold">Editor</span>
                    <span className="text-gray-600 font-medium text-sm">1250 Jobs Available</span>
                  </h2>
                </aside>
            </div>
        </div>
    );
};

export default Categories;