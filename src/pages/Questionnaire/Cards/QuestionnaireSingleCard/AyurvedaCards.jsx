import PropTypes from "prop-types";
import like from "../../../../assets/likeWithbg.png";
import play from "../../../../assets/playWithbg.png";

const AyurvedaCards = ({ cardDetails }) => {
  const { imgSrc, title, plays, likes, aythor } = cardDetails;
  return (
    <div className="flex justify-center items-center border-[1.5px] border-gray-200 py-10 md:mx-28 mx-10 my-10 rounded-xl ">
      <div className="p-10 rounded-lg overflow-hidden lg:flex ">
        <div className="w-full">
          <img className="w-full " src={imgSrc} alt="Ayurvedic" />
        </div>

        <div className="md:p-6 pt-4 text-center">
          <h2 className="text-xl font-semibold tracking-wider">{title}</h2>
          <p className="mt-4 text-[#7a7a7a] tracking-wider text-sm font-semibold">
            Unlock the secrets of Ayurveda with our Dosha Quiz! Discover your
            unique body type—Vata, Pitta, or Kapha. Embrace holistic well-being
            on your journey to balance and harmony.
          </p>

          <div className="md:flex gap-5 items-center justify-center md:mx-32 mx-20 py-3 rounded-xl mt-10 border-[1.5px] border-[#f3f3f3] ">
            <div className="flex items-center text-gray-600">
              <img src={like} alt="" />
              <div>
                likes
                <p>{plays} </p>
              </div>
            </div>
            <div className="flex items-center text-gray-600 ml-4">
              <img src={like} alt="" />
              <div></div>
              <p>{likes} </p>
            </div>
          </div>
          <div className="mt-14">
            <button className=" bg-[#3a643b] text-white font-semibold py-3 md:px-36 px-24 rounded-lg  whitespace-nowrap">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AyurvedaCards.propTypes = {};

export default AyurvedaCards;
