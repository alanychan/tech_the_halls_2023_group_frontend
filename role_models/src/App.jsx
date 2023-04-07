// use the { } if you're not importing the default
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import LogInPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import CreateProfilePage from "./Pages/CreateProfilePage";
import EditProfilePage from "./Pages/EditProfilePage";
import CreateHeroPage from "./Pages/CreateHeroPage";
// import EditHeroPage from "./Pages/EditHeroPage";
import HeroPage from "./Pages/HeroPage";

// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

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
      { path: "/create-hero", element: <CreateHeroPage /> },
      // { path: "/edit-hero/:id", element: <EditHeroPage /> },
      { path: "/hero/:id", element: <HeroPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;