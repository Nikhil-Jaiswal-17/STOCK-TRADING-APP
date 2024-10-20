export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-5 container" id="supportWrap">
                <h4>Support Portal</h4>
                <a href="" style={{textDecoration:"none", color:"white"}}>Track Ticket</a>
            </div>
            <div className="row p-5  mb-2 ">
                <div className="col-6 p-5">
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="search" placeholder="Eg. How Do I Activate my Account" className="p-3 mb-3 mt-5" style={{width:"100%", borderRadius:"50px"}}/>
                    <a href="">Track account opening </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Intraday margins </a><br />
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h4>Features</h4>
                    <ol>
                        <li><a href="" className="mt-5"> Suspension of trading - IDFC Limited</a></li>
                        <li><a href="" className="mt-5"> Rights Entitlements listing in October 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
