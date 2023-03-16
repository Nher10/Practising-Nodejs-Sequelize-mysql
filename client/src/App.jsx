import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import Post from "./pages/Post";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/createpost",
          element: <CreatePost />,
        },
        {
          path: "/post/:id",
          element: <Post />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
