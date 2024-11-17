import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10"> 
                <Link to="/news">Breaking News: Major Developments in Global Politics—Stay Updated!....</Link>

                <Link to="/news">Latest Tech Innovations: Discover the Future of Artificial Intelligence......</Link>

                <Link to="/news">Trending Now: Exclusive Insights on the Upcoming Economic Shifts.</Link>

            </Marquee>
        </div>
    );
};

export default LatestNews;