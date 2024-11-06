import { Home, Profile, SignIn, SignUp } from "@/pages";
import { PageComponents } from "@/pages/components/page";
import { Accordion } from "@material-tailwind/react";

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
    element: <Accordion />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
