import { Routes, Route } from "react-router-dom";
import { protectedRoutes, signedInRoutes } from "./consts";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

const AppRoutes = () => {
  return (
    <Routes>
      {signedInRoutes.map(({ path, Layout, Component }) => {
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
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        {protectedRoutes.map(({ path, Layout, Component }) => {
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
