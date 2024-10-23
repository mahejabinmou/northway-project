import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import AboutUs from "./ClientSide/AboutUs/AboutUs";
import Distenation from "./ClientSide/Distenation/Distenation";
import PhotoGallery from "./ClientSide/Gallery/PhotoGallery/PhotoGallery";
import VideoGallery from "./ClientSide/Gallery/VideoGallery/VideoGallery";
import Blogs from "./ClientSide/Blogs/Blogs";
import Distenation2 from "./ClientSide/Distenation2/Distenation2";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import Select from "./ClientSide/Distenation/Select/Select";
import SelectPage from "./ClientSide/Distenation/Select/SelectPage";
import Blog from "./ClientSide/Blogs/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/About",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "/selectPage",
    element: <SelectPage></SelectPage>,
  },
  {
    path: "/photo-gallery",
    element: <PhotoGallery></PhotoGallery>,
  },
  {
    path: "/video-gallery",
    element: <VideoGallery></VideoGallery>,
  },
  {
    path: "/studyDistention",
    element: <Distenation></Distenation>,
  },
  {
    path: "/studyDistention2",
    element: <Distenation2></Distenation2>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
