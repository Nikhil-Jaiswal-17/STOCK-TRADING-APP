function Pricing() {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-4">
                        <h1 className="mt-2">Unbeatable Pricing</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
                        <a href="" style={{ textDecoration: "none" }}>See Pricing <i class="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6">
                        <div className="row text-center mb-5">
                            <div className="col border" style={{ backgroundColor: "grey", color: "white" }}>
                                <h1 className="p-3">₹0</h1>
                                <p>Free Equity Delivery and <br />Direct Mutual Funds</p>
                            </div>
                            <div className="col border" style={{ backgroundColor: "grey", color: "white" }} >
                                <h1 className="p-3">₹20</h1>
                                <p>Intraday and F & O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;