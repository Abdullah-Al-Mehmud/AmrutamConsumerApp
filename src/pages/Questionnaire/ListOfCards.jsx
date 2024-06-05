const ListOfCards = () => {
  return (
    <div>
      <div className="border-[1.5px] border-[#e1e1e1] md:mx-28 mx-10 my-10 rounded-xl py-10 md:px-14 px-5">
        {/* filters */}
        <div>
          <h1 className="text-xl font-medium">Explore</h1>
          <div className="flex flex-wrap space-x-3 mt-4 ">
            <button className="bg-[#e7f5e7] text-green-600 font-semibold py-2 px-4 rounded-full">
              All
            </button>
            <button className="border-[1.5px] border-[#d1d1d1] text-[#8e8e8e] font-semibold py-2 px-4 rounded-full">
              Created by Dr.
            </button>
            <button className="border-[1.5px] border-[#d1d1d1] text-[#8e8e8e] font-semibold py-2 px-4 rounded-full">
              Created by Amrutam
            </button>
            <button className="border-[1.5px] border-[#d1d1d1] text-[#8e8e8e] font-semibold py-2 px-4 rounded-full">
              Created by People
            </button>
          </div>
        </div>
        {/* cards */}
      </div>
    </div>
  );
};

export default ListOfCards;