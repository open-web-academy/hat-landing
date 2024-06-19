import React from "react";
import { GrayBorderButton } from "../common/buttons/GrayBorderButton";

export function SignInButton(props) {
  return (
    <GrayBorderButton className="nav-sign-in-btn login-button" onClick={props.onSignIn}>
      Sign In
    </GrayBorderButton>
  );
}
