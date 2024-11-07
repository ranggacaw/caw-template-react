import { BellIcon, Cog6ToothIcon, FolderIcon, HomeIcon } from "@heroicons/react/24/solid";

export const headerData = [
    {
      id: 1,
      name: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      id: 2,
      name: "Components",
      icon: BellIcon,
      path: "/components-index",
    },
    {
      id: 3,
      name: "Pages",
      icon: FolderIcon,
      path: "/sign-in",
    },
    {
      id: 4,
      name: "Setting",
      icon: Cog6ToothIcon,
      path: "/sign-up",
    },
]

export default headerData;
