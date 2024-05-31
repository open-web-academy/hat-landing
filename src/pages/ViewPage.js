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
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-5 text-right">
              <img src="assets/hat.png"></img>
            </div>
            <div className="col-7" style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
              fontSize: "55px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center">UTILITY</label>
            </div>
            <div className="col-12" style={{
              backgroundImage: "url(assets/back-subtitle.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center">None, builders are busy with their<br />own projects. Don’t expect anything<br />more from it than the cutest yellow<br />hard hat token ever.</label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12" style={{
              backgroundImage: "url(assets/back-text2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "55px",
              color: "black"
            }}>
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
              <label className="press-start-2p-regular text-center width-50">$HAT is a memecoin on the near protocol network, it does not promise price or rewards.
              </label>
              <img src="assets/icon1.png"></img>
            </div>
            <div className="col-12" style={{ marginTop: "20px", display: "flex", "justify-content": "center" }}>
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
            <div className="col-6 text-right">
              <img src="assets/gold.png"></img>
            </div>
            <div className="col-6">
            </div>
            <div className="col-12" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "55px",
              color: "black",
              marginTop: "20px"
            }}>
              <label className="press-start-2p-regular text-center">24,700,000,000</label>
            </div>
            <div className="col-12" style={{
              backgroundImage: "url(assets/back-subtitle2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center">$HAT Max supply</label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12 mb-20" style={{
              backgroundImage: "url(assets/back-text2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "55px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center text-white">Tokenomics</label>
            </div>
            <div className="col-6 element-tokenomics-l" style={{ backgroundImage: "url(assets/auction.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">78% Auction</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Auctioned every 24<br />hours until</span></label>
            </div>
            <div className="col-6 element-tokenomics-r" style={{ backgroundImage: "url(assets/treasury.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">10% OWA Treasury</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">Treasury of Open Web Academy<br />for future stuffs </span></label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6 element-tokenomics-l" style={{ backgroundImage: "url(assets/pool.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">4% Liquidity pool</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Liquidity pool -<br />@finance_ref</span></label>
            </div>
            <div className="col-6 element-tokenomics-r" style={{ backgroundImage: "url(assets/owateam.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">5% OWA TEAM</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">For buying excavators,<br />quantum computers and sodas -<br />24 months linear release</span></label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6 element-tokenomics-l" style={{ backgroundImage: "url(assets/contributors.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% contributors</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Early contributors and allies - 12 months linear release - Up to 15 contributors</span></label>
            </div>
            <div className="col-6 element-tokenomics-r" style={{ backgroundImage: "url(assets/airdrop.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% Airdrop</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">For Open Web Academy Buidlers<br />community</span></label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6 element-tokenomics-l" style={{ backgroundImage: "url(assets/fairlaunch.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% Fair launch</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Fair Launch - On @veaxfinance</span></label>
            </div>
            <div className="col-6 element-tokenomics-r" />
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12" style={{
              backgroundImage: "url(assets/back-text2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "55px",
              color: "black"
            }}>
              <label className="press-start-2p-regular text-center text-white">$HAT Auctions</label>
            </div>
            <div className="col-6 mt-20">
              <div className="auctions-description-container">
                <label className="jetbrains-mono-regular auctions-description">78% of the treasury ($19,266,000,000 $HAT) will be auctioned every 24 hours for 1000 days - totaling 192,660,000 $HAT daily.</label>
              </div>
              <div className="auctions-description-container">
                <label className="jetbrains-mono-regular auctions-description mt-20">During a 24-hour period, $HAT will be auctioned, accepting $NEAR tokens. The highest bid will win the $HAT. If there are less than 10 minutes remaining in the bidding period, the last bid will extend the period by 10 minutes.</label>
              </div>
            </div>
            <div className="col-6 mt-20">
              <div className="auctions-description-container">
                <label className="jetbrains-mono-regular auctions-description">Bid starts at 1 NEAR, increase in minimum 0.1 NEAR.</label>
              </div>
              <div className="auctions-description-container">
                <label className="jetbrains-mono-regular auctions-description mt-20">All NEAR tokens collected will go to the treasury of Open Web Academy (open-web-academy.sputnik-dao.near).</label>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "70px" }}>
            <div className="col-12">
              <Widget key={src} src={src} props={widgetProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Widget key={src} src={src} props={widgetProps} />
  );
}
