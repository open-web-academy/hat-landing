import React, { useCallback } from "react";
import styled from "styled-components";
import { Close } from "../../icons/Close";
import { Home } from "../../icons/Home";
import { Book } from "../../icons/Book";
import { Code } from "../../icons/Code";
import { LogOut } from "../../icons/LogOut";
import { Fork } from "../../icons/Fork";
import { UserCircle } from "../../icons/UserCircle";
import { Widget, useNear } from "near-social-vm";
import { NavigationButton, NavigationOptionButton } from "../NavigationButton";
import { SignInButton } from "../SignInButton";
import { Link } from "react-router-dom";
import { Withdraw } from "../../icons/Withdraw";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  transition: 350ms;
  transform: translateX(-100%);

  &.show {
    transform: translateX(0);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .left-side {
    flex: 80;
    background-color: var(--slate-dark-1);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 25px;
    overflow-x: auto;

    .nav-sign-in-btn {
      width: 70px;
    }

    .profile-link {
      max-width: 100%;
      white-space: nowrap;

      :hover {
        text-decoration: none;
      }
    }

    img {
      border-radius: 50% !important;
    }

    .profile-name {
      color: var(--slate-dark-12);
      font-weight: var(--font-weight-bold);
      margin-top: 10px;
    }

    .profile-username {
      color: var(--slate-dark-11);
    }

    .profile-name,
    .profile-username {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .top-links,
  .bottom-links {
    a,
    button {
      justify-content: flex-start;
      padding: 28px 0;
      display: flex;
      align-items: center;
      color: var(--slate-dark-11);
      font-weight: var(--font-weight-bold);

      svg {
        margin-right: 12px;
      }

      &.active,
      &:hover,
      &:focus {
        background-color: transparent;
        color: white;
        text-decoration: none;
        svg {
          path {
            stroke: white;
          }
        }
      }
    }
  }

  .top-links {
    margin-top: 40px;
  }

  .bottom-links {
    margin-top: auto;

    a,
    button {
      padding: 14px 0;
    }
  }

  .log-out-button {
    background: none;
    border: none;
    color: var(--slate-dark-11);
    font-weight: var(--font-weight-bold);
    padding: 28px 0;

    svg {
      path {
        stroke: #9ba1a6;
      }
    }
  }

  .close-button {
    background: none;
    border: none;
    position: absolute;
    right: 16px;
    top: 16px;
    padding: 10px;

    svg {
      margin: 0;
    }
  }

  .right-side {
    flex: 20;
    opacity: 0.8;
    background-color: var(--slate-dark-1);
  }
`;

const Button = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 230px;
    padding: 10px;
    font-weight: 500;
    border: 0px;
    color: white;
    width: 120px;
    margin-right: 10px;
    background-color: none;
`;

export function Menu(props) {
  const near = useNear();
  const withdrawStorage = useCallback(async () => {
    await near.contract.storage_withdraw({}, undefined, "1");
  }, [near]);

  return (
    <StyledMenu className={props.showMenu ? "show" : ""}>
      <div className="left-side">
        {props.signedIn ? (
          <Link
            to={`/${props.widgets.profilePage}?accountId=${props.signedAccountId}`}
            className="profile-link"
          >
            <Widget
              src={props.widgets.profileImage}
              props={{
                accountId: props.signedAccountId,
                className: "d-inline-block",
                style: { width: "56px", height: "56px" },
              }}
            />
            {props.widgets.profileName && (
              <div className="profile-name">
                <Widget src={props.widgets.profileName} />
              </div>
            )}
            <div className="profile-username">{props.signedAccountId}</div>
          </Link>
        ) : (
          <SignInButton
            onSignIn={() => {
              props.onCloseMenu();
              props.requestSignIn();
            }}
          />
        )}
        <ul className="top-links">
          <li>
            <NavigationOptionButton href="/">
              Auctions
            </NavigationOptionButton>
          </li>
          <li>
            <NavigationOptionButton href="DiamondVault">
              Diamond Vault
            </NavigationOptionButton>
          </li>
        </ul>
        <ul className="top-links">
          <li>
            <NavigationButton href="https://twitter.com/openwebacademy_">
              <i className="bi bi-twitter-x mx-1"></i>
              Follow
            </NavigationButton>
          </li>
          <li>
            <NavigationButton href="https://t.me/openwebacademy1">
              <i className="bi bi-telegram mx-1"></i>
              Telegram
            </NavigationButton>
          </li>
          <li>
            <NavigationButton href="https://github.com/open-web-academy">
              <i className="bi bi-github mx-1"></i>
              Docs
            </NavigationButton>
          </li>
        </ul>
        <ul className="bottom-links">
          {props.signedIn && (
            <>
              <li>
                <button
                  onClick={() => props.logOut()}
                  className="log-out-button"
                >
                  <LogOut />
                  Sign Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="right-side" onClick={props.onCloseMenu} />
    </StyledMenu>
  );
}
