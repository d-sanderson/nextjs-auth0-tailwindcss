import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const nav = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="flex flex-row justify-end items-center space-x-4 bg-teal-500 text-white mx-8">
      <span>
        {isAuthenticated && 'Hello,'} <strong>{user?.name || ""}</strong>{" "}
      </span>
      <img className="my-4 h-10 rounded" src={user?.picture} alt="" />
      {isAuthenticated ? (
        <button
          className="btn-blue my-4"
          onClick={() => logout({ returnTo: window?.location?.origin })}
        >
          Log out
        </button>
      ) : (
        <button className="btn-purple" onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </div>
  );
};

export default nav;
