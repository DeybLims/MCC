import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import MCCMAIN from "./Pages/MCCMAIN/index.jsx";
import MCCCALENDARFINAL from "./Pages/MCCCALENDARFINAL/index.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    // Redirect homepage to MCCMAIN for testing
    { path: "/", element: <Navigate to="/mccmain" replace /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mccmain",
      element: <MCCMAIN />,
    },
    {
      path: "mcccalendarfinal",
      element: <MCCCALENDARFINAL />,
    }
  ]);

  return element;
};

export default ProjectRoutes;