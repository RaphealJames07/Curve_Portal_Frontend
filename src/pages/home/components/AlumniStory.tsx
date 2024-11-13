import {FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import {SlSocialFacebook} from "react-icons/sl";
import {LuGithub} from "react-icons/lu";
import alumniImg from "../../../assets/alumniImg1.jpg";
import OwlCarousel from "react-owl-carousel";
import alumni from "../assets/alumnistory.json";
import {Link} from "react-router-dom";

const AlumniStory = () => {
    const carouselOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dots: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true,
            },
            600: {
                items: 1,
                dots: true,
            },
            1000: {
                items: 3,
                dots: true,
                nav: true,
            },
        },
    };
    return (
        <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex flex-col gap-10">
            <div className="w-full h-max flex flex-col gap-4 items-center">
                <p className="text-4xl phone:text-3xl phone:text-center">
                    Meet Our{" "}
                    <span className="highlighted-text4 relative ">
                        Accomplished Alumni
                    </span>
                </p>
                <p className="phone:text-center">
                    Inspiring Success Stories of Those Who Have Thrived in Our
                    Tech Academy
                </p>
            </div>
            <div className="w-full h-max mt-5">
                <OwlCarousel
                    {...carouselOptions}
                    dotsEach={true}
                    className="w-full h-max"
                >
                    {alumni.map((item, index) => (
                        <div
                            className="item w-80 phone:w-full h-max  flex flex-col items-center gap-4 "
                            key={index}
                        >
                            <div className="w-max h-max">
                                <div className="w-24 h-24 rounded-full border-primary-color border-4">
                                    <img
                                        src={alumniImg}
                                        alt=""
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="w-max h-max flex flex-col text-center ">
                                <p className="text-lg font-semibold">
                                    {item?.name}
                                </p>
                                <p className="text-[rgba(33,37,41,0.7)] text-sm">
                                    {item?.position}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-center">
                                    {item?.story}
                                </p>
                            </div>
                            <div className="w-max h-max flex gap-3">
                                <Link to={item?.facebook}>
                                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-secondary-color transition-all duration-700 hover:bg-secondary-color hover:text-primary-color">
                                        <SlSocialFacebook />
                                    </div>
                                </Link>
                                <Link to={item?.twitter}>
                                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-secondary-color transition-all duration-700 hover:bg-secondary-color hover:text-primary-color">
                                        <FaXTwitter />
                                    </div>
                                </Link>
                                <Link to={item?.linkedin}>
                                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-secondary-color transition-all duration-700 hover:bg-secondary-color hover:text-primary-color">
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link to={item?.github}>
                                    <div className="cursor-pointer w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-secondary-color transition-all duration-700 hover:bg-secondary-color hover:text-primary-color">
                                        <LuGithub />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default AlumniStory;
