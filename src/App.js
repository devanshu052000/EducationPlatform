import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CoursePage from "./pages/CoursePage";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/course/:courseName",
    element: <CoursePage />,
  },
  {
    path: "/account",
    element: <UserProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
