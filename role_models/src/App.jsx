// use the { } if you're not importing the default
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateProfilePage from "./pages/CreateProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css"

const HeaderLayout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LogInPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
      { path: "/create-profile", element: <CreateProfilePage /> },
      { path: "/edit-profile", element: <EditProfilePage /> },
      { path: "/signout", element: <HomePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;