import { Routes, Route, Navigate } from "react-router-dom";
import { routes, protectedRoutes, signedInRoutes } from "./consts";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const AppRoutes = () => {
  const auth = useIsAuthenticated();
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}

      {protectedRoutes.map(({ path, Layout, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              !auth ? (
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

      {signedInRoutes.map(({ path, Layout, Component }) => {
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
