import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logotype } from "../Logotype";
import { NavigationButton } from "../NavigationButton";
import { ArrowUpRight } from "../../icons/ArrowUpRight";
import { SignInButton } from "../SignInButton";
import { UserDropdown } from "./UserDropdown";
import { DevActionsDropdown } from "./DevActionsDropdown";
import { NotificationWidget } from "../NotificationWidget";
import { StarButton } from "../StarButton";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--slate-dark-1);
  z-index: 1000;
  padding: 12px 0;

  .user-section {
    margin-left: auto;
    > button {
      font-size: 14px;
    }
  }

  .container {
    display: flex;
    align-items: center;

    .navigation-section {
      margin-left: 50px;
      display: flex;

      > div {
        > a {
          margin-right: 20px;
        }
      }
    }

    .user-section {
      display: flex;
      align-items: center;

      .nav-create-btn {
        margin-left: 10px;
      }

      .nav-sign-in-btn {
        margin-left: 10px;
      }
    }

    .arrow-up-right {
      margin-left: 4px;
    }
  }
`;

const Button = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 10px;
    max-width: 230px;
    background-color: rgb(0, 0, 0);
    padding: 10px;
    font-weight: 500;
    border: 0px;
    color: white;
    width: 120px;
    margin-right: 10px;

    &:hover{
      background: #89470A;
      color: white;
    }
`;

export function DesktopNavigation(props) {
  return (
    <StyledNavigation>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="assets/icon.png" style={{ height: "50px" }} />
          {/* <label className="press-start-2p-regular text-white hat-title">HAT</label> */}
        </div>
        <div className="navigation-section">

        </div>
        <div className="user-section">
        <a href={`https://twitter.com/openwebacademy_`} target="_blank">
          <Button>
            <i className="bi bi-twitter-x mx-1"></i> Follow
          </Button>
        </a>
        <a href={`https://t.me/openwebacademy1`} target="_blank">
          <Button>
            <i className="bi bi-telegram mx-1"></i> Telegram
          </Button>
        </a>
        <a href={`https://github.com/open-web-academy`} target="_blank">
          <Button>
            <i className="bi bi-github mx-1"></i> Docs
          </Button>
        </a>
        </div>
        <div className="user-section" style={{ width: "120px" }}>
          {!props.signedIn && (
            <SignInButton onSignIn={() => props.requestSignIn()} />
          )}
          {props.signedIn && (
            <>
              <UserDropdown {...props} />
            </>
          )}
        </div>
      </div>
    </StyledNavigation>
  );
}
