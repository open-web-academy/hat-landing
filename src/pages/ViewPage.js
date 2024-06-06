import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

export default function ViewPage(props) {
  useHashRouterLegacy();

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

  return showMenu ? (
    <div className="container-xl">
      <div className="row background-hat">
        <div className="col-12">
          <div className="row">
            <div className="col-12 section1">
              <label className="press-start-2p-regular text-center section1-text">HAT<br />COIN</label>
            </div>
            <div className="col-6 section2"></div>
            <div className="col-6" style={{
              display: "flex",
              color: "black",
            }}>
              <div className="row">
                <div className="col-12 section3-container">
                  <label className="press-start-2p-regular text-left section3-text">For<br />buidlers</label>
                </div>
                <div className="col-12">
                  <label style={{
                    backgroundImage: "url(assets/back-text.png)",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "start",
                  }} className="jetbrains-mono-regular text-left text-white font-20">Every buidler needs<br />a Hard $HAT, right?</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "100px" }}>
            <div className="col-12">
              <Widget key={src} src={src} props={widgetProps} />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-5 text-right">
              <img className="utility-section-img" src="assets/hat.png"></img>
            </div>
            <div className="col-7 utility-section">
              <label className="press-start-2p-regular text-center">UTILITY</label>
            </div>
            <div className="col-12 utility-body">
              <label className="press-start-2p-regular text-center utility-text">None, builders are busy with their<br />own projects. Don’t expect anything<br />more from it than the cutest yellow<br />hard hat token ever.</label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12 specification-section">
              <label className="press-start-2p-regular text-center text-white">Specifications
              </label>
            </div>
            <div className="col-12" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              color: "black",
              marginTop: "20px"
            }}>
              <label className="press-start-2p-regular text-center width-50 specification-text">$HAT is a memecoin on the near protocol network, it does not promise price or rewards.
              </label>
              <img className="specification-img" src="assets/icon1.png"></img>
            </div>
            <div className="col-12 table-container">
              <table>
                <tr>
                  <td className="table-title press-start-2p-regular">Ticker</td>
                  <td className="press-start-2p-regular">HAT</td>
                </tr>
                <tr>
                  <td className="table-title press-start-2p-regular">Token name</td>
                  <td className="press-start-2p-regular">HAT</td>
                </tr>
                <tr>
                  <td className="table-title press-start-2p-regular">Token standar</td>
                  <td className="press-start-2p-regular">NEP-141</td>
                </tr>
                <tr>
                  <td className="table-title press-start-2p-regular">Network</td>
                  <td className="press-start-2p-regular">NEAR Protocol</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6 text-right max-supply-container-img">
              <img className="max-supply-img" src="assets/gold.png"></img>
            </div>
            <div className="col-6">
            </div>
            <div className="col-12 max-supply-number">
              <label className="press-start-2p-regular text-center">24,700,000,000</label>
            </div>
            <div className="col-12 max-supply-text">
              <label className="press-start-2p-regular text-center">$HAT Max supply</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Widget key={src} src={src} props={widgetProps} />
  );
}
