import jwtDecode from "jwt-decode";
import React from "react";

const PrivateRoute = ({ children }) => {
  const authCheck = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      try {
        const userData = jwtDecode(accessToken);
        if (userData.userid === 3) {
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
    return <div>Halaman Kosong</div>;
  }
};

export default PrivateRoute;
