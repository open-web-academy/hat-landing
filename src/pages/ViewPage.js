import React, { useEffect, useState, useRef } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

export default function ViewPage(props) {
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
                  <label className="press-start-2p-regular text-center section1-text">HAT<br />COIN</label>
                </div>
                <div className="col-6 section2"></div>
                <div className="col-6" style={{
                  display: "flex",
                  color: "black",
                }}>
                  <div className="row">
                    <div className="col-12 bidNowSection" style={{ height: "0%" }}>
                      <label style={{
                        backgroundImage: "url(assets/back-text.png)",
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
                      }} className="jetbrains-mono-regular text-left text-white font-30">Bid Now
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
                  <Widget key={src} src="yairnava.testnet/widget/Auctions" props={widgetProps} /><br />
                </div>
                <div className="col-12" style={{ textAlign: "center", marginTop: "30px" }}>
                  <label className="press-start-2p-regular text-center learnText" onClick={scrollToAuctionsSection}>Learn about auctions</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row winnersSection" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <Widget key={src} src="yairnava.testnet/widget/winners" props={widgetProps} />
                </div>
                <div className="col-6" style={{ textAlign: "center" }}>
                  <img src="assets/buldoser-pixel.png" style={{ height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "140px" }}>
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
          <div className="row" style={{ marginTop: "100px" }}>
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
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12 text-center max-supply-container-img">
              <img className="max-supply-img" src="assets/gold.png"></img>
            </div>
            <div className="col-12 max-supply-number">
              <label className="press-start-2p-regular text-center">24,700,000,000</label>
            </div>
            <div className="col-12 max-supply-text">
              <label className="press-start-2p-regular text-center">$HAT Max supply</label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12 mb-20 tokenomics-title">
              <label className="press-start-2p-regular text-center text-white">Tokenomics</label>
            </div>
            <div className="col-6 element-tokenomics-l tokenomics-element" style={{ backgroundImage: "url(assets/auction.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">78% Auction</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Auctioned every 24<br />hours until</span></label>
            </div>
            <div className="col-6 element-tokenomics-r tokenomics-element" style={{ backgroundImage: "url(assets/treasury.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">10% OWA Treasury</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">Treasury of Open Web Academy<br />for future stuffs </span></label>
            </div>
            <div className="col-6 element-tokenomics-l tokenomics-element" style={{ backgroundImage: "url(assets/pool.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">4% Liquidity pool</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Liquidity pool -<br />@finance_ref</span></label>
            </div>
            <div className="col-6 element-tokenomics-r tokenomics-element" style={{ backgroundImage: "url(assets/owateam.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">5% OWA TEAM</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">For buying excavators,<br />quantum computers and sodas -<br />24 months linear release</span></label>
            </div>
            <div className="col-6 element-tokenomics-l tokenomics-element" style={{ backgroundImage: "url(assets/contributors.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% contributors</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Early contributors and allies - 12 months linear release - Up to 15 contributors</span></label>
            </div>
            <div className="col-6 element-tokenomics-r tokenomics-element" style={{ backgroundImage: "url(assets/airdrop.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% Airdrop</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-r">For Open Web Academy Buidlers<br />community</span></label>
            </div>
            <div className="col-6 element-tokenomics-l tokenomics-element" style={{ backgroundImage: "url(assets/fairlaunch.png)" }}>
              <label className="text-center"><span className="press-start-2p-regular font-15">1% Fair launch</span><br /><span className="jetbrains-mono-regular font-15 element-tokenomics-desc-l">Fair Launch - On @veaxfinance</span></label>
            </div>
          </div>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12 mb-20 tokenomics-title">
              <label className="press-start-2p-regular text-center text-white">$HAT on X</label>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/hat_coin?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fmaxheight%3D600%26query%3Dhttps%253A%252F%252Fx.com%252Fhat_coin%26theme%3Ddark%26widget%3DTimeline&amp;sessionId=b71f16b48157de5c7b36e218e057d3299ca5f429&amp;showHeader=true&amp;showReplies=false&amp;theme=dark&amp;transparent=false&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716" style={{ width: "700px", height: "500px" }}></iframe>
            </div>
            <div />
          </div>
          <div className="row" style={{ marginTop: "100px"}}>
            <div className="col-12 auctions-container">
              <label className="press-start-2p-regular text-center text-white">$HAT Auctions</label>
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
                  <td className="press-start-2p-regular">2 NEAR</td>
                </tr>
                <tr>
                  <td className="table-title2 press-start-2p-regular">Minimum Increase</td>
                  <td className="press-start-2p-regular">0.5 NEAR</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row" style={{ marginTop: "100px", marginBottom: "20px"}}>
            <div className="col-12 partners-section">
              <label className="press-start-2p-regular text-center text-white">Cool people <br /> aping🦍 with us
              </label>
            </div>
            <div className="row" style={{ marginTop: "30px"}}>
              <div className="col-6 text-center partnets-logos">
                <img src="assets/MeteorWallet.png" style={{ height: "230px" }} />
                <span className="press-start-2p-regular" style={{ marginTop: "20px" }}>Meteor Wallet</span>
              </div>
              <div className="col-6 text-center partnets-logos">
                <img src="assets/nearweek.png" style={{ height: "230px" }} />
                <span className="press-start-2p-regular" style={{ marginTop: "20px" }}>Near Week</span>
              </div>
              <div className="col-6 text-center partnets-logos">
                <img src="assets/Shitzu.png" style={{ height: "230px" }} />
                <span className="press-start-2p-regular" style={{ marginTop: "20px" }}>Shitzu</span>
              </div>
              <div className="col-6 text-center partnets-logos">
                <img src="assets/SrPuuulMp.png" style={{ height: "230px" }} />
                <span className="press-start-2p-regular" style={{ marginTop: "20px" }}>Sr Puuul Mp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
