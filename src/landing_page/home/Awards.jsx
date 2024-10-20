export default function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-4">
                    <img src="media/images/largestBroker.svg" alt="Larger Brokr Image" />
                </div>
                <div className="col-6 p-4 mt-3">
                    <h1>Larget Stock Broker in India</h1>
                    <p className="mb-5">2+ Millon Zerodha Client contributes to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Future and Option</p>
                                </li>
                                <li>
                                    <p>Cummodity Derivative</p>
                                </li>
                                <li>
                                    <p>Currency derivative</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stock and IPO</p>
                                </li>
                                <li>
                                    <p>Government Securities</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Fund</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="PressLogos" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    );
}
