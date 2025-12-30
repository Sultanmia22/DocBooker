import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts/>,
  },
]);

export default router