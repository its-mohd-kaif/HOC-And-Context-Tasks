import { useContext } from "react";
import { appContext } from "../../App";
// HOC Component
const HigherOrderComponent = (Component) => {
  const HOC = () => {
    let user = useContext(appContext);
    // Fetch Api Method
    const fetchApi = (input) => {
      fetch(`https://api.github.com/users/${input}`)
        .then((response) => response.json())
        .then((val) => {
          user.setResult(val);
        });
    };

    return (
      // Return Fetch Api and Loader
      <Component
        loader={
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
        fetchApi={fetchApi}
      />
    );
  };
  return HOC;
};

export default HigherOrderComponent;
