import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
    return (
        <div>
            <Hero></Hero>
            <LeftSection imageUrl="media/images/kite.png"
                productHeading="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <RightSection imageUrl="media/images/console.png"
                productHeading="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <LeftSection imageUrl="media/images/coin.png"
                productHeading="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <RightSection imageUrl="media/images/kiteconnect.png"
                productHeading="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <LeftSection imageUrl="media/images/varsity.png"
                productHeading="Varsity mobile"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            
            <p className="container text-center fs-5 mt-5 p-5">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech </a> blog.</p>

            <Universe></Universe>
        </div>
    );
} 