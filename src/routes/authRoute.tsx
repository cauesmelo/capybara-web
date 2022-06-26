import React from "react";
import { authState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import { Redirect, Route } from "react-router-dom";

interface AuthRouteProps {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
}

export const AuthRoute = ({ children, ...rest }: AuthRouteProps) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
