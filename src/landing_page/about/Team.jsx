export default function Team() {
    return (
        <div className="container">
            <div className="row text-center border-top mt-5 p-5 mb-5">
                <h2>People</h2>
            </div>
            <div className="row p-5 mt-5 border-top text-muted fs-6">
                <div className="col-6 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius:"50%", width:"75%"}} alt="" /> 
                    
                    <h4>Nikhil Jaiswal</h4>
                    <h5>Founder and Software Engineer</h5>
                </div>
                <div className="fs-5 col-6 p-5 mt-2">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}> Homepage </a> / <a href="" style={{textDecoration:"none"}}> TradingQnA </a> / <a href="" style={{textDecoration:"none"}}> Twitter </a></p>
                </div> 
            </div>
        </div>
    );
}
