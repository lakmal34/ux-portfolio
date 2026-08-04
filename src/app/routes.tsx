import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { About } from "./pages/About";
import { Career } from "./pages/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/career",
    Component: Career,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyDetail,
  },
]);
