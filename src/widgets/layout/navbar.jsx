import headerData from "@/data/header-data";
import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 py-1">
      <nav className="flex justify-around items-center p-2">
        {headerData.map(({ id, name, path, icon, href, target }) => (
          <div key={name} className="text-center">
            {href ? (
              <Link
                href={path}
                target={target}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900 duration-200"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "h-6 w-6 mb-1",
                  })}
                <Typography variant="small" className="text-xs">
                  {name}
                </Typography>
              </Link>
            ) : (
              <Link
                to={path}
                target={target}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900 duration-200"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "h-6 w-6 mb-1",
                  })}
                <Typography variant="small" className="text-xs">
                  {name}
                </Typography>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
