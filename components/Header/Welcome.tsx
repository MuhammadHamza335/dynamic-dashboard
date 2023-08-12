import { AiOutlineSearch } from "react-icons/ai";

const Welcome = () => {
  return (
    <div className="flex justify-between bg-white px-3 flex-wrap">
      <div className="text-black font-bold text-lg my-5">Welcome User!</div>
      <div className=" flex space-x-4 flex-wrap">
        <div className="my-1 flex flex-col ">
          <label className="text-black ml-1 font-bold text-sm">Name</label>
          <div className="flex items-center border-solid px-1 border border-gray-300 rounded-md bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 bg-slate-100 outline-none flex-grow text-black py-1 px-2 "
            />
            <AiOutlineSearch className="text-black cursor-pointer" />
          </div>
        </div>
        <div className="my-1 flex flex-col ">
          <label className="text-black ml-1 font-bold text-sm">Invoice</label>
          <div className="flex items-center border-solid px-1 border border-gray-300 rounded-md bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 bg-slate-100 outline-none flex-grow text-black py-1 px-2 "
            />
            <AiOutlineSearch className="text-black cursor-pointer" />
          </div>
        </div>
        <div className="my-1 flex flex-col ">
          <label className="text-black ml-1 font-bold text-sm">Product</label>
          <div className="flex items-center border-solid px-1 border border-gray-300 rounded-md bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 bg-slate-100 outline-none flex-grow text-black py-1 px-2 "
            />
            <AiOutlineSearch className="text-black cursor-pointer" />
          </div>
        </div>
        <div className="my-1 flex flex-col ">
          <label className="text-black ml-1 font-bold text-sm">Invetory</label>
          <div className="flex items-center border-solid px-1 border border-gray-300 rounded-md bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 bg-slate-100 outline-none flex-grow text-black py-1 px-2 "
            />
            <AiOutlineSearch className="text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
