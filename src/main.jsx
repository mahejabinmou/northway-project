import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ClientSide/Home/Home"
import "./index.css"
import OurDemo from "./ClientSide/Home/OurLatestBlog/OurDemo"
import ContactUs from "./ClientSide/Home/ContactUs/ContactUs"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/OurDemo",
        element: <OurDemo></OurDemo>,
    },
    {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
