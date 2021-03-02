import MainPage from "./pages/MainPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <Route render={(props) => <MainPage {...props} extraPropName="value" />} />
  );
}

export default App;
