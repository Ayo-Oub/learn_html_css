import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Display from "./pages/contents/Display";
import FlexBox from "./pages/contents/FlexBox";
import WidthHeight from "./pages/contents/WidthHeight";
import Grid from "./pages/contents/Grid";
import MediaQuery from "./pages/contents/MediaQuery";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "display", element: <Display /> },
        { path: "width_height", element: <WidthHeight /> },
        { path: "flexbox", element: <FlexBox /> },
        { path: "grid", element: <Grid /> },
        { path: "media_query", element: <MediaQuery /> },
        
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
