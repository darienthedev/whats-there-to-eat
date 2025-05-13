import { useState, useEffect } from "react";
import DishCard from "./components/DishCard";
import { dishesData } from "./data/dishes";

function App() {
  const [dishes, setDishes] = useState(dishesData);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter dishes based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setDishes(dishesData);
    } else {
      const filteredDishes = dishesData.filter((dish) => {
        const query = searchQuery.toLowerCase();
        return (
          dish.name.toLowerCase().includes(query) ||
          dish.description.toLowerCase().includes(query) ||
          dish.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
      setDishes(filteredDishes);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            What's There to Eat?
          </h1>
          <h5 className="text-2xl text-gray-800 mb-6">
            "I'm hungry," you say? I gotchu...
          </h5>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search dishes by name, description or tag..."
              className="bg-white w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <main>
          {dishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.map((dish, dishIndex) => (
                <DishCard key={dishIndex} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No dishes found matching your search criteria.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
