import {FaInfo} from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const HomeDiscover = () => {
    return (
        <div className="w-full h-max  bg-primary-color-light ">
            <div className="phone:bg-primary-color-light discoverBG  flex items-center phone:text-center phone:px-4 justify-center flex-col gap-4 h-[500px] phone:h-max phone:py-10">
                <div className="w-max phone:text-sm phone:gap-1 h-max flex items-center bg-white px-4 py-2 rounded-full border border-gray-200">
                    <FaInfo className=" text-black " size={14} />
                    <p>What skills do you want to learn?</p>
                    <NavLink to={""}>See more</NavLink>
                </div>
                <p className="text-5xl">Discover our programs</p>
                <p className="text-lg w-[70%] phone:w-full text-center">
                    Our bootcamp provides immersive training in coding, data
                    science, and web development. With hands-on projects and
                    expert mentorship, you’ll gain the skills needed to thrive
                    in the tech industry.
                </p>
                <div className="w-max h-max flex gap-4 phone:flex-col phone:items-center">
                    <button className="w-max h-max px-5 py-2 font-semibold rounded-full bg-primary-color text-primary-text">
                        Our Course
                    </button>
                    <button className="w-max h-max px-5 py-2 font-semibold rounded-full bg-secondary-color text-white">
                        Our Get in touch with us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeDiscover;
