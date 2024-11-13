import logo from "../../../assets/curve_logo_1.png";
import {IoCallOutline} from "react-icons/io5";
import {CiLinkedin, CiMail} from "react-icons/ci";
import {FaFacebookF, FaXTwitter} from "react-icons/fa6";

const HomeFooter = () => {
    return (
        <div className="w-full h-max bg-secondary-color ">
            <div className="w-full h-max flex flex-col justify-between gap-12 pb-10 phone:pt-12 pt-16 px-40 phone:px-4">
                <div className="w-full h-max flex gap-28 phone:flex-col phone:gap-10">
                    <img src={logo} alt="" className="w-32" />
                    <p className="w-[55%] phone:w-full text-white text-lg">
                        We are a team of passionate people whose goal is to
                        improve everyone's life. Our services are designed for
                        small to medium size companies.
                    </p>
                </div>
                <div className="w-full h-max flex phone:flex-col phone:gap-6 justify-between items-end phone:items-start">
                    <div className="w-max h-max flex gap-28 phone:flex-col phone:gap-8 items-center phone:items-start">
                        <ul className="w-max h-max flex flex-col gap-1 list-disc text-primary-color phone:pl-4">
                            <li>Home</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className="w-max h-max flex flex-col pl-4 phone:pl-0">
                            <div className="w-max h-max flex gap-2 text-primary-color">
                                <IoCallOutline className="text-white " size={20}/>
                                <p>+2348129931343</p>
                            </div>
                            <div className="w-max h-max flex gap-2 text-primary-color">
                                <CiMail className="text-white " size={20}/>
                                <p>thecurveafrica@gamil.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-max h-max flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-white text-secondary-color flex items-center justify-center">
                            <FaFacebookF />
                        </span>
                        <span className="w-10 h-10 rounded-full bg-white text-secondary-color flex items-center justify-center">
                            <CiLinkedin />
                        </span>
                        <span className="w-10 h-10 rounded-full bg-white text-secondary-color flex items-center justify-center">
                            <FaXTwitter />
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-max py-4 bg-primary-color flex phone:flex-col phone:gap-2 text-lg phone:px-4 justify-between px-40 items-center">
                <p>Copyright © The Curve Africa</p>
                <p className="text-center">Site Developed by a Prodigee of The Curve Africa</p>
            </div>
        </div>
    );
};

export default HomeFooter;
