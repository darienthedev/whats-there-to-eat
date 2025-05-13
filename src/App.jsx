import { useState, useEffect } from "react";
import DishCard from "./components/DishCard";
import { dishesData } from "./data/dishes";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [dishes, setDishes] = useState(dishesData);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen py-8 px-4 bg-[#f4ebeb]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-2 font-serif">
            What's There to <span className="gradient-text">Eat</span>?
          </h1>
          <h5 className="text-2xl mb-6 italic">
            "I'm hungry," you say? I gotchu...
          </h5>
          <div className="max-w-md mx-auto">
            <motion.input
              type="text"
              placeholder="Search dishes by name, description or tag..."
              className="bg-white text-md w-full px-3 py-3 rounded-lg shadow-md focus:outline-none focus:ring-rose-800 focus:ring-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>
        <main>
          {dishes.length > 0 ? (
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.8 }}
              >
                {dishes.map((dish, dishIndex) => (
                  <DishCard key={dishIndex} dish={dish} />
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nothing matches what you're thinking of. Come talk to me!👋
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
