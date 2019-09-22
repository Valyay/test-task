import React from "react";
import {
    withRouter
  } from "react-router-dom";

const AuthButton = withRouter(
    ({ history }) =>
    (localStorage.getItem("redirectToReferrer") === "true") ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              localStorage.setItem("redirectToReferrer", false);
              return history.push("/");
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
  );

  export default AuthButton