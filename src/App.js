import { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import Supplies from "./components/Supplies";
import Country from "./components/Country";
import ProvisionForm from "./components/ProvisionForm";

function App() {
  return (
    <Fragment>
      {/* <Home /> */}
      {/* <Form /> */}
      {/* <SignUp /> */}
      {/* <UserDashboard /> */}
      <Supplies />
      {/* <Country /> */}
      {/* <ProvisionForm /> */}
    </Fragment>
  );
}

export default App;
