import PropTypes from "prop-types";

const Cards = ({ card }) => {
  const { title, plays, likes, author, imgSrc } = card;
  return (
    <div>
      <div className="border rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={imgSrc} alt={title} />
        <div className="p-4">
          <h3 className="text-sm font-bold tracking-wider">{title}</h3>
          <div className=" text-sm text-gray-600 mt-2 space-y-2">
            <p>{plays} plays</p>
            <p>{likes} likes</p>
          </div>
          <div className="text-sm text-gray-500 mt-2">{author}</div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};
export default Cards;
