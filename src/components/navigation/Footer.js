import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
color: white;
width: 100%;
display: grid;
background-color: var(--slate-dark-1);
padding: 20px 0 20px 0;
margin: 0px;
text-align: center;
font-weight: 700;
`


export function Footer() {
    return (
        <StyledFooter>
            <div className="row" style={{ width: "100%" }}>
                <div className="col-4 footerLinkCol4">
                    <div className="row">
                        <div className="col-3 footerLinkColElement">
                            <a href={`https://twitter.com/openwebacademy_`} target="_blank" className="footerLink">
                                Follow
                            </a>
                        </div>
                        <div className="col-3 footerLinkColElement">
                            <a href={`https://t.me/openwebacademy1`} target="_blank" className="footerLink">
                                Telegram
                            </a>
                        </div>
                        <div className="col-3 footerLinkColElement">
                            <a href={`https://github.com/open-web-academy`} target="_blank" className="footerLink">
                                Docs
                            </a>
                        </div>
                        <div className="col-3 footerLinkColElement">
                            <a href={`https://ipfs.near.social/ipfs/bafkreibq5gdwkuigrfymib2qzk5g4xjze2wxjdowikjfpmg2cibod6ahsy`} target="_blank" className="footerLink">
                                Tokenomics
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8 footerLinkCol8" style={{ textAlign: "end" }}>HAT Coin is project by <a href="https://ow.academy/" target="_blank" className="footerOWA">Open Web Academy</a></div>
            </div>
        </StyledFooter>
    )
}