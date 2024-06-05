import Cards from "./Cards";

const ListOfCards = () => {
  const cards = [
    {
      title: "Ayurvedic Lifestyle and Health",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/BzjQsYk/cardImg1.png",
    },
    {
      title: "Mental Health Self Assessment",
      plays: 143,
      likes: 223,
      author: "By: Aryan Khan",
      imgSrc: "https://i.ibb.co/k0Frs9v/cardImg2.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/JjBdf3s/cardImg3.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/L1RRTWL/cardImg4.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/BzjQsYk/cardImg1.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/k0Frs9v/cardImg2.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/L1RRTWL/cardImg4.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/BzjQsYk/cardImg1.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/JjBdf3s/cardImg3.png",
    },
    {
      title: "Skin Care Self Assessment",
      plays: 189,
      likes: 228,
      author: "By Amrutam",
      imgSrc: "https://i.ibb.co/L1RRTWL/cardImg4.png",
    },
  ];
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
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 py-5">
          {cards?.map((card, idx) => (
            <Cards key={idx} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCards;
