import React from "react";
import MessageModalWindow from "./commonComponents/MessageModalWindow";
import SpinerInfinity from "./commonComponents/SpinerInfinity";
import LoginSwitcher from "./Login/LoginSwitcher";

const App = () => (
  <div className="App">
    <LoginSwitcher />
    <MessageModalWindow />
    <SpinerInfinity />
  </div>
);

export default App;
