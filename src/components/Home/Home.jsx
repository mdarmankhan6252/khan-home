
import { useLoaderData } from "react-router-dom";
import Header from "./Header/Header";
import Info from "./Info/Info";
import FeatureCompo from "./Feature/FeatureCompo";
import Newsletter from "./Newsletter/Newsletter";
import {Helmet} from "react-helmet";


const Home = () => {

    const homeData = useLoaderData()
    // console.log(homeData);

    
    
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Info></Info>
            <h1 className="text-4xl text-center py-10">Featured Properties</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                homeData.map((home, i) => <FeatureCompo home={home} key={i}></FeatureCompo>)
            }
            </div>
            <div className="text-center py-10">
                <button className="bg-[#bc986b] py-2 px-6 text-white font-semibold border-2 hover:bg-transparent hover:text-[#bc986b] border-[#bc986b] duration-200">See More</button>
            </div>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;