import herobg from "../../../assets/hero-bg.svg";
import heroquote from "../../../assets/HeroImagequote.png";
import heroimggif from "../../../assets/heroimggif.png";

const Hero = () => {
    return (
        <div className="w-full h-max">
            <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex phone:flex-col">
                <div className="w-[40%] phone:w-full h-max flex flex-col gap-8 relative phone:items-center">
                    <span className="absolute right-0 -top-10 ">
                        <img src={heroquote} alt="" className="w-14 phone:w-10"/>
                    </span>
                    <p className="text-6xl phone:text-5xl font-light phone:text-center">
                        Unleash your <br />{" "}
                        <span className="highlighted-text relative text-6xl phone:text-5xl">
                            Potential
                        </span>
                        .
                    </p>
                    <p className="mt-4 text-lg phone:text-center">
                        Elevate Your Skills, Join The Curve Africa Academy for a
                        Comprehensive Learning Experience, Hands-on Training, a
                        Stellar Portfolio, and Potential Internship
                        Opportunities – All at No Cost!
                    </p>
                    <button className="w-max h-max px-10 py-4 rounded-full bg-primary-color ">
                        Register For Free
                    </button>
                    <span className="absolute -left-14 phone:left-2 -bottom-24 ">
                        <img src={heroimggif} alt="" className="w-20 animate-bounce"/>
                    </span>
                </div>
                <div className="w-[60%] phone:w-full phone:pb-10 h-max flex  justify-end phone:justify-center">
                    <img
                        src={herobg}
                        alt=""
                        className="w-[80%] h-[30rem] phone:h-[20rem] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
