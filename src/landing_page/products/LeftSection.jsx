export default function LeftSection({
    imageUrl,
    productHeading,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageUrl} alt="LeftImage" />
                </div>
                <div className="col-6 p-5 mt-5 ">
                    <h1>{productHeading}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-4">
                        <a href={tryDemo} > Try Demo →</a>
                        <a href={learnMore } style={{marginLeft:"20%", width:"130px"}}>Learn More →</a>
                    </div>
                    <div className="mt-4 mvb-5">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ width:"140px"}}/></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store" style={{marginLeft:"10%", width:"130px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
