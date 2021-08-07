import React from "react";
import { Route, render, Redirect } from "react-router-dom";
function Privaterouting({ children, auth, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={() => (auth ? children : <Redirect to={"/Login"} />)}
      />
    </div>
  );
}

export default Privaterouting;
