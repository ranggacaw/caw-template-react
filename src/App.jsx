import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
      <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
          <Navbar routes={routes} />
        </div>
      )}
    </>
  );
}

export default App;
