import { Routes, Route, Navigate } from "react-router-dom";
import { protectedRoutes, unProtectedRoutes } from "./consts";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const AppRoutes = () => {
  const auth = useIsAuthenticated();
  console.log(auth);
  return (
    <Routes>
      {protectedRoutes.map(({ path, Layout, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              !auth ? (
                <Navigate to="/login" />
              ) : (
                <Layout>
                  <Component />
                </Layout>
              )
            }
          />
        );
      })}

      {unProtectedRoutes.map(({ path, Layout, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              auth ? (
                <Navigate to="/" />
              ) : (
                <Layout>
                  <Component />
                </Layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
