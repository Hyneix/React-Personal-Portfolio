import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/Rootlayouts";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import EducationPage from "./pages/Education";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
