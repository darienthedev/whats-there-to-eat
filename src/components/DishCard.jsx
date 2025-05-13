const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{dish.name}</h2>
        <p className="text-gray-600 mb-2">{dish.description}</p>
        <div className="flex mt-3">
          {dish.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
