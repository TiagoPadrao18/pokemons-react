import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/main-container";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    }
]);


