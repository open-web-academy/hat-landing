import React, { useEffect, useState, useRef } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

export default function DiamondVault(props) {
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
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12 section1">
                  <label className="press-start-2p-regular text-center section1-text">Diamond<br />Vault</label>
                </div>
                <div className="col-6 section2"></div>
                <div className="col-6" style={{
                  display: "flex",
                  color: "black",
                }}>
                  <div className="row">
                    <div className="col-12 bidNowSection" style={{ height: "0%" }}>
                      <label style={{
                        backgroundImage: "url(./assets/back-text.png)",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "10px"
                      }} className="jetbrains-mono-regular text-left text-white font-20">Every buidler needs<br />a Hard $HAT, right?</label>
                    </div>
                    <div className="col-12">
                      <label style={{
                        backgroundImage: "url(assets/back-text.png)",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "30px"
                      }} className="jetbrains-mono-regular text-left text-white font-20">Send Hat's Now
                        <img className="bidNowSectionImg" src="assets/arrow-pixel.png" style={{ height: "60px" }} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <Widget key={src} src="yairnava.testnet/widget/Diamond-Vault" props={widgetProps} /><br />
                </div>
                <div className="col-12" style={{ textAlign: "center", marginTop: "30px" }}>
                  <label className="press-start-2p-regular text-center learnText" onClick={scrollToAuctionsSection}>Learn about diamond vault</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row winnersSection" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <Widget key={src} src="yairnava.testnet/widget/Winners-Diamond-Vault" props={widgetProps} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="../assets/diamond-vault-open.png" style={{ height: "70%" }} />
                </div>
              </div>
            </div>
          </div>
          <div ref={auctionsSection} />
          <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
            <div className="col-12 auctions-container">
              <label className="press-start-2p-regular text-center text-white">Vault Process</label>
            </div>
            <div className="col-12 table-container">
              <table className="table2">
                <tr>
                  <td className="table-title2 press-start-2p-regular">Duration</td>
                  <td className="press-start-2p-regular">1000 days, auctions every 24 hours
                  </td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Currency</td>
                  <td className="press-start-2p-regular">Accepting $NEAR tokens</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Prize</td>
                  <td className="press-start-2p-regular">Highest bid wins 19,266,000 $HAT</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Extension</td>
                  <td className="press-start-2p-regular">Last bid adds 10 minutes if under 10 minutes remain</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Starting Bid</td>
                  <td className="press-start-2p-regular">1 NEAR</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Minimum Increase</td>
                  <td className="press-start-2p-regular">0.5 NEAR</td>
                </tr>
              </table>
            </div>
            <div className="col-12 text-center" style={{ marginTop: "10px" }}>
              <span className="press-start-2p-regular text-center">🔴 Disclaimer: Diamond Vault code is not audited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
