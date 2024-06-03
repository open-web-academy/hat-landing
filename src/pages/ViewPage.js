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
      <div className="row background-hat" style={{height:"100vh"}}>
      <div className="col-12">
        </div>
        <div className="col-12">
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12" style={{
              backgroundImage: "url(assets/back-title.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "70px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center">HAT<br />COIN</label>
            </div>
            <div className="col-6" style={{
              backgroundImage: "url(assets/logo-hat.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              height: "250px"
            }}></div>
            <div className="col-6" style={{
              display: "flex",
              color: "black",
            }}>
              <div className="row">
                <div className="col-12 height-0">
                  <label className="press-start-2p-regular text-left font-30">For<br />buidlers</label>
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
          <div className="col-12" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              color: "black",
              marginTop: "17px"
            }}>
              <label className="press-start-2p-regular text-center">Under Construction</label>
            </div>
        </div>
      </div>
    </div>
  ) : (
    <Widget key={src} src={src} props={widgetProps} />
  );
}
