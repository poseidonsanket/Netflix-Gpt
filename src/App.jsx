import Body from "./components/Body";
import { Provider } from "react-redux";
import UserStore from "./utils/UserStore";

const App = () => {
  return (
    <Provider store={UserStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
};

export default App;
