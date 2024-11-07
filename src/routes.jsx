import { Home, Profile, SignIn, SignUp } from "@/pages";
import { PageComponents } from "@/pages/components/page";
import AccordionPage from "./pages/components/accordion";
import ButtonPage from "./pages/components/button";
import BreadcrumbPage from "./pages/components/breadcrum";
import CardPage from "./pages/components/card";
import CollapsePage from "./pages/components/collapse";
import FormPage from "./pages/components/form";
import InputPage from "./pages/components/input";
import IconPage from "./pages/components/icon";
import ImagePage from "./pages/components/image";
import TabPage from "./pages/components/tabs";
import TablePage from "./pages/components/table";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Components",
    path: "/components-index",
    element: <PageComponents />,
  },
  {
    name: "Accordion",
    path: "/components-accordion",
    element: <AccordionPage />,
  },
  {
    name: "Button",
    path: "/components-button",
    element: <ButtonPage />,
  },
  {
    name: "Breadcrumb",
    path: "/components-breadcrumb",
    element: <BreadcrumbPage />,
  },
  {
    name: "Breadcrumb",
    path: "/components-card",
    element: <CardPage />,
  },
  {
    name: "Collapse",
    path: "/components-collapse",
    element: <CollapsePage />,
  },
  {
    name: "Form",
    path: "/components-form",
    element: <FormPage />,
  },
  {
    name: "Input",
    path: "/components-input",
    element: <InputPage />,
  },
  {
    name: "Icons",
    path: "/components-icon",
    element: <IconPage />,
  },
  {
    name: "Image",
    path: "/components-image",
    element: <ImagePage />,
  },
  {
    name: "Tabs",
    path: "/components-tab",
    element: <TabPage />,
  },
  {
    name: "Table",
    path: "/components-table",
    element: <TablePage />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
