import jwtDecode from "jwt-decode";
import React from "react";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ children }) => {
  const authCheck = () => {
    const accessToken = sessionStorage.getItem("access_token");
    const allowedUserIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (accessToken) {
      try {
        const userData = jwtDecode(accessToken);
        if (allowedUserIDs.includes(userData.userid)) {
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return false;
  };

  if (authCheck()) {
    return children;
  } else {
    return <NotFound />;
  }
};

export default PrivateRoute;
