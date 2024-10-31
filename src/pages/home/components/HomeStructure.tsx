import {Outlet} from "react-router";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

const HomeStructure = () => {
    return (
        <div className="w-full h-max">
            <HomeHeader />
            <>
                <div className="w-full min-h-[calc(100vh-28rem)] h-max">
                    <Outlet />
                </div>
            </>
            <HomeFooter />
        </div>
    );
};

export default HomeStructure;
