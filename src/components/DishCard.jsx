const DishCard = ({ dish }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-lg shadow-md shadow-rose-900/10 overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-stone-700">{dish.name}</h2>
        <p className="text-stone-700 mb-2">{dish.description}</p>
        <div className="flex mt-3">
          {dish.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-rose-100 text-rose-800  text-sm px-2.5 py-1 rounded-full mr-1"
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
