import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ActivityList from "./components/ActivityList";

function App() {
  const [carData, setCarData] = useState();
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState();

  const addItem = (itemToAdd) => {
    let foundItem = cart.find((item) => item.id === itemToAdd.id);

    if (!foundItem) {
      setCart([...cart, { ...itemToAdd, count: 1 }]);
      return;
    }

    const newCart = cart.map((item) =>
      item.id === itemToAdd.id
        ? { ...foundItem, count: foundItem.count + 1 }
        : item
    );
    setCart(newCart);
  };

  const removeItem = (itemToRemove) => {
    const foundItem = cart.find((item) => item.id === itemToRemove.id);

    if (foundItem.count === 1) {
      setCart(cart.filter((item) => item.id !== itemToRemove.id));
      return;
    }

    const newCart = cart.map((item) =>
      item.id === itemToRemove.id
        ? { ...foundItem, count: foundItem.count - 1 }
        : item
    );
    setCart(newCart);
  };

  const clearItem = (itemToClear) => {
    setCart(cart.filter((item) => item.id !== itemToClear.id));
  };

  useEffect(() => {
    setItemsCount(cart.reduce((sum, item) => sum + item.count, 0));
  }, [cart]);

  return (
    <div>
      <Router>
        <Header numOfItems={itemsCount} />
        <Routes>
          <Route path="/" element={<Home setCarData={setCarData} />} />
          <Route
            path="/cars"
            element={<CarList rentals={carData} addItem={addItem} />}
          />
          <Route path="/activities" element={<ActivityList />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeItem={removeItem}
                addItem={addItem}
                clearItem={clearItem}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
