import { useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {
    console.log(user);
    return (
      <div className="flex flex-row justify-end items-center space-x-4 bg-teal-500 text-white mx-8">
        <span>
          Hello, <strong>{user.name}</strong>{" "}
        </span>
        <img className="my-4 h-10 rounded" src={user.picture} alt="" />
        <button
          className="btn-blue my-4"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}
