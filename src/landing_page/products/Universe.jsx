export default function Universe() {
    return (
        <div className="container mt-5 p-5 mb-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" width={"70%"} />
                    <p className="text-muted text-center mt-3">
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 mt-3">
                    <img src="media/images/sensibullLogo.svg" alt="Sensi Bull Logo" width={"70%"} />
                    <p className="text-muted text-center mt-4" >Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-4 mt-2">
                    <img src="media/images/goldenpiLogo.png" alt="goldenpiLogo" width={"60%"} />
                    <p className="text-muted mt-3">nvestment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>

            <div className="row text-center mt-5">
                <div className="col-4">
                    <img src="media/images/streakLogo.png" alt="StreakLogo" width={"60%"} />
                    <p className="text-muted text-center mt-3">
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 mt-2">
                    <img src="media/images/smallcaseLogo.png" alt="Small Case Logo" />
                    <p className="text-muted mt-4">Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 mt-2">
                    <img src="media/images/dittoLogo.png" alt="Ditto Logo" width={"35%"} />
                    <p className="text-muted mt-4 p-2">Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>
            </div>
            <div className="text-center mt-5 mb-5">
                <button className="p-2 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto", borderRadius: "15px" }}>Sign up Now</button>
            </div>
        </div>
    );
}
