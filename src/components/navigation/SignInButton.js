import React from "react";
import { GrayBorderButton } from "../common/buttons/GrayBorderButton";

export function SignInButton(props) {
  return (
    <GrayBorderButton className="login-button" onClick={props.onSignIn}>
      Login
    </GrayBorderButton>
  );
}
