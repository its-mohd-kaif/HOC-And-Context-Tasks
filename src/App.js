import { createContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/authentication/Dashboard";
import Login from "./components/authentication/Login";
import DebounceAndLoader from "./components/debounceAndLoader/DebounceAndLoader";
import Filter from "./components/filterData/Filter";
import Home from "./components/home/Home";
import Cart from "./components/shoppingCart/Cart";
import Navbar from "./components/shoppingCart/Navbar";
// Create a Context
export const appContext = createContext();
function App() {
  // State For Task 1
  const [login, setLogin] = useState({});
  // State For Task 2 Product data
  const [data, setData] = useState([]);
  // State For Task 3 Item Display
  const [item, setItem] = useState([]);
  // State For Task 3 For Helping in search item
  const [clone, setClone] = useState([]);
  // State For Task 4,5 Showing Output
  const [result, setResult] = useState({});
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shopping" element={<Navbar />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/debounceAndLoader" element={<DebounceAndLoader />} />
      </>
    )
  );
  return (
    <div>
      <appContext.Provider
        value={{
          login,
          setLogin,
          data,
          setData,
          item,
          setItem,
          clone,
          setClone,
          result,
          setResult,
        }}
      >
        <RouterProvider router={router} />
      </appContext.Provider>
    </div>
  );
}

export default App;
