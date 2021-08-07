import React from "react";
import { Redirect, render,Route } from 'react-router-dom'

function PublicRouting({ child, auth, ...rest }){
    return (
        <Route
            {...rest}
            render={() => ( auth ? <Redirect to={"/home"} /> : child)}
        />
    );
};
export default PublicRouting
// import React from "react";
// import { Route, render, Redirect } from "react-router-dom";
// function Privaterouting({ children, auth, ...rest }) {
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={() => (auth ? children : <Redirect to={"/Login"} />)}
//       />
//     </div>
//   );
// }

// export default Privaterouting;
