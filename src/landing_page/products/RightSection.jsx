export default function RightSection({ 
    imageUrl,
    productHeading,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mt-5" style={{paddingTop:"10%"}}>
                    <h1>{productHeading}</h1>
                    <p className="fs-6">{productDescription}</p>
                    <div className="mt-4">
                        <a href={learnMore } style={{width:"130px"}}>Learn More →</a>
                    </div>
                    {/* <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ width:"140px"}}/></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store" style={{marginLeft:"10%", width:"130px"}}/></a>
                    </div> */}
                </div>
                <div className="col-6 mb-5">
                    <img src={imageUrl} alt="Right Image" />
                </div>
            </div>
        </div>
    );
}
