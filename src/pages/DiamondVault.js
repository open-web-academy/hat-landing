import React, { useEffect, useState, useRef } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

export default function DiamondVault(props) {

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date();
  const today = date.toLocaleDateString("en-US", options);

  useHashRouterLegacy();

  const auctionsSection = useRef(null);
  const scrollToAuctionsSection = () => {
    auctionsSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});

  const src =
    window?.InjectedConfig?.forcedWidget ||
    widgetSrc ||
    window?.InjectedConfig?.defaultWidget ||
    props.widgets.default;
  const showMenu = !window?.InjectedConfig?.hideMenu;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  const injectedProps = window?.InjectedConfig?.props;

  useEffect(() => {
    setWidgetProps(
      Object.assign(
        injectedProps || {},
        Object.fromEntries([...query.entries()])
      )
    );
  }, [query, injectedProps]);

  useEffect(() => {
    setTimeout(() => {
      setWidgetSrc(
        src === viewSourceWidget && query.get("src")
          ? {
            edit: query.get("src"),
            view: null,
          }
          : {
            edit: src,
            view: src,
          }
      );
    }, 1);
  }, [src, query, setWidgetSrc, viewSourceWidget]);

  return showMenu && (
    <div className="container-xl">
      <div className="row background-hat">
        <div className="col-12">
        <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <div className="col-12 auctions-container">
              <label className="press-start-2p-regular text-center text-white">Vault Process</label>
            </div>
            <div className="col-12" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
              <div className="disclaimerVault">
                <span className="press-start-2p-regular" style={{ textAlign: "justify" }}>
                  <b>Starts of the vault</b><br />
                  <ul>
                    <li>The vault starts with a minimum initial deposit of 100,000 $HAT.</li>
                    <li>At start, the vault has a timer of 2 days (48 hours).</li>
                    <li>In case of a deposit of more than 100,000 $HAT, please refer to the following section.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
              <div className="disclaimerVault">
                <span className="press-start-2p-regular" style={{ textAlign: "justify" }}>
                  <b>Deposits in the vault</b><br />
                  <ul>
                    <li>You can add any amount of $HAT tokens to the vault, from 10,000 to infinity.</li>
                    <li>The counter time is reset according to the amount deposited.</li>
                    <li>If there are 5 minutes or less left on the timer and between 10,000 and 500,000 $HAT are deposited, the timer will reset to 5 minutes.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-12 table-container">
              <table className="table2">
                <tr>
                  <td className="table-title2 press-start-2p-regular">$HAT's Deposit Amount</td>
                  <td className="table-title2 press-start-2p-regular">Count Down Period</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">500,000 or less</td>
                  <td className="press-start-2p-regular">Without changes</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">500,001 - 1,000,000</td>
                  <td className="press-start-2p-regular">1 Day</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">1,000,001 - 5,000,000</td>
                  <td className="press-start-2p-regular">12 Hours</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">5,000,001 - 19,999,000</td>
                  <td className="press-start-2p-regular">1 Hour</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">20,000,000 or more</td>
                  <td className="press-start-2p-regular">15 Minutes</td>
                </tr>
              </table>
            </div>
            <div className="col-12" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
              <div className="disclaimerVault">
                <span className="press-start-2p-regular" style={{ textAlign: "justify" }}>
                  <b>Completion of the game</b><br />
                  When the counter reaches zero, the last contributor must wait 7 days to claim the contents of the trunk.
                </span>
              </div>
            </div>
            <div className="col-12" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
              <div className="disclaimerVault">
                <span className="press-start-2p-regular" style={{ textAlign: "justify" }}>
                  <b>*Disclaimer*</b><br />
                  <ul>
                    <li>Diamond Vault code is not audited.</li>
                    <li>1% of each deposit is sent to the OWA treasury.</li>
                    <li>Upon depositing $HAT's into the vault, the funds cease to be the property of the contributor and become the property of the vault.</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12 section1">
                  <label className="press-start-2p-regular text-center section1-text">Diamond<br />Vault</label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="row" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                <div style={{ textAlign: "center", fontSize: "20px", background: "black", width: "50%", color: "white", borderRadius: "10px 10px 0 0" }}>
                  <label className="press-start-2p-regular ">
                    {today}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6 backgroundVaultSections" style={{ background: "black", borderRadius: "10px 0 0 10px" }}>
              <div className="row">
                <div className="col-12">
                  <Widget key={src} src="owa-is-bos.near/widget/HAT-DiamondVault-CurrentSupply" props={widgetProps} /><br />
                </div>
              </div>
            </div>
            <div className="col-6 backgroundVaultSections" style={{ background: "black", borderRadius: "0 10px 10px 0" }}>
              <div className="row">
                <div className="col-12">
                  <Widget key={src} src="owa-is-bos.near/widget/HAT-DiamondVault" props={widgetProps} /><br />
                </div>
                <div className="col-12 learnAboutSection" style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px", color: "white" }}>
                  <label className="press-start-2p-regular text-center">Last contributor take it’s ALL!</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row winnersSection" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 section1">
                      <label className="press-start-2p-regular text-center section1-text">Vault<br />List</label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <Widget key={src} src="owa-is-bos.near/widget/HAT-DiamondVault-Winners" props={widgetProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
