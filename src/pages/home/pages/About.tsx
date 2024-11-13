import herobg from "../../../assets/online-school-svg-415.svg";
import heroquote from "../../../assets/HeroImagequote.png";
import heroimggif from "../../../assets/heroimggif.png";
import whyimg from "../../../assets/questions-svg-416.svg";
import OwlCarousel from "react-owl-carousel";
import team1 from '../../../assets/s_company_team_image_3.jpg'
import team2 from '../../../assets/alumniImg1.jpg'

const About = () => {
    const carouselOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
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
                dots: false,
            },
            600: {
                items: 1,
                nav: true,
                dots: false,
            },
            1000: {
                items: 1,
                dots: false,
                nav: true,
            },
        },
    };
    return (
        <div className="w-full h-max ">
            {/* Hero Section  */}
            <div className="w-full h-60 bg-sky-200  imgBgAbout ">
                <div className="w-full h-full bg-black bg-opacity-50 flex justify-center flex-col gap-10 px-40 phone:px-5 phone:gap-5">
                    <p className="text-4xl text-primary-color font-semibold opacity-100">
                        About The Curve Africa?
                    </p>
                    <p className="text-white">
                        We are Empowering the Future, Building, Nurturing, and
                        Deploying World-Class Software Engineers
                    </p>
                </div>
            </div>
            {/* Mission Section  */}
            <div className="w-full h-max flex flex-col">
                <div className="w-full h-max">
                    <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex phone:flex-col">
                        <div className="w-[60%] phone:w-full h-max flex flex-col gap-8 relative phone:items-center">
                            <span className="absolute right-0 -top-10 ">
                                <img
                                    src={heroquote}
                                    alt=""
                                    className="w-14 phone:w-10"
                                />
                            </span>
                            <p className="text-6xl phone:text-5xl font-light phone:text-center">
                                Our
                                <span className="highlighted-text relative text-6xl phone:text-5xl">
                                    Mission
                                </span>
                                .
                            </p>
                            <span className="w-full flex flex-col gap-2">
                                <p className="mt-4  phone:text-center">
                                    At The Curve Africa, we empower young
                                    Africans through a free, 6-month software
                                    engineering academy, offering mentorship and
                                    on-site training to unlock their potential.
                                    Our mission is to train over 10,000 aspiring
                                    tech professionals across the continent
                                    within the next decade.
                                </p>
                                <p>
                                    Through a hands-on curriculum and expert
                                    guidance, we prepare students to become
                                    proficient software engineers ready to drive
                                    technological growth in Africa. By investing
                                    in Africa’s youth, we aim to bridge the
                                    digital divide and shape a brighter future.
                                    Join us in building the next generation of
                                    world-class tech talent.
                                </p>
                            </span>
                            <button className="w-max h-max px-10 py-4 rounded-full bg-primary-color ">
                                Register For Free
                            </button>
                            <span className="absolute -left-14 phone:left-2 -bottom-24 ">
                                <img
                                    src={heroimggif}
                                    alt=""
                                    className="w-20 animate-bounce"
                                />
                            </span>
                        </div>
                        <div className="w-[40%] phone:w-full phone:pb-10 h-max flex  justify-end phone:justify-center">
                            <img
                                src={herobg}
                                alt=""
                                className="w-[80%] h-[30rem] phone:h-[20rem] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us Section  */}
            <div className="w-full h-max flex flex-col">
                <div className="w-full h-max flex items-center flex-col gap-4">
                    <p className="text-2xl">
                        Why choose{" "}
                        <span className="highlighted-textabout2 relative text-2xl phone:text-2xl">
                            The Curve Africa
                        </span>
                    </p>
                    <p className="text-center text-secondary-color">
                        Here are 5 reasons about us on why you should choose The
                        Curve Africa
                    </p>
                </div>
                <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex phone:flex-col">
                    <div className="w-[60%] phone:w-full phone:pb-10 h-max flex  justify-start phone:justify-center">
                        <img
                            src={whyimg}
                            alt=""
                            className="w-[80%] h-[25rem] phone:h-[20rem] object-contain"
                        />
                    </div>
                    <div className="w-[40%] phone:w-full h-max flex flex-col gap-8 relative phone:items-center pt-10 phone:pt-2">
                        <div className="w-full h-max ">
                            <OwlCarousel
                                {...carouselOptions}
                                dotsEach={true}
                                className="w-full "
                            >
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">1</p>
                                        <p className="text-lg font-semibold">
                                            Quality and Diverse Pool of
                                            Engineers
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">2</p>
                                        <p className="text-lg font-semibold">
                                            Personalized Support
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">3</p>
                                        <p className="text-lg font-semibold">
                                            Real-Life Project Experience
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">4</p>
                                        <p className="text-lg font-semibold">
                                            Holistic Training Approach
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">5</p>
                                        <p className="text-lg font-semibold">
                                            Portfolio Development and Career
                                            Support
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="item w-full h-max flex flex-col gap-2 items-center">
                                    <div className="w-full h-max flex flex-col gap-4">
                                        <p className="text-4xl">6</p>
                                        <p className="text-lg font-semibold">
                                            Choose The Curve Africa
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Neque
                                            adipisci, animi repellendus ea
                                            fugit, minima error iure, natus
                                            alias saepe ullam. Consectetur,
                                            nobis omnis.
                                        </p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section  */}
            <div className="w-full h-max flex flex-col gap-10 bg-slate-50 px-40 phone:px-5 mt-10 py-20 phone:py-10">
                <div className="w-full h-max flex flex-col gap-2">
                    <p className="text-2xl font-semibold">Meet the Team</p>
                    <p>Dedicated Techies driving your success</p>
                </div>
                <div className="w-full h-max flex flex-col gap-12">
                    <div className="w-full h-max flex justify-between gap-10 phone:flex-col">
                        <div className="w-1/2 phone:w-full h-max flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-sky-200">
                                <img src={team2} alt="" className="w-full h-full rounded-full" />
                            </div>
                            <div className="w-[calc(100%-6rem)]">
                                <p className="text-xl font-semibold">
                                    Samuel Ujunwa
                                </p>
                                <p className="text-gray-500">Team Lead</p>
                                <p className="text-sm">
                                    Founder and chief visionary, Tony is the
                                    driving force behind our bootcamp. He is
                                    passionate about empowering individuals
                                    through education and actively engages in
                                    curriculum development, marketing, and
                                    enhancing the student experience.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 phone:w-full h-max flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-sky-200">
                                <img src={team1} alt="" className="w-full h-full rounded-full" />
                            </div>
                            <div className="w-[calc(100%-6rem)]">
                                <p className="text-xl font-semibold">
                                    Cynthia Onyilimba
                                </p>
                                <p className="text-gray-500">Team Lead</p>
                                <p className="text-sm">
                                    Founder and chief visionary, Tony is the
                                    driving force behind our bootcamp. He is
                                    passionate about empowering individuals
                                    through education and actively engages in
                                    curriculum development, marketing, and
                                    enhancing the student experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex justify-between gap-10 phone:flex-col">
                        <div className="w-1/2 phone:w-full h-max flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-sky-200">
                                <img src={team2} alt="" className="w-full h-full rounded-full" />
                            </div>
                            <div className="w-[calc(100%-6rem)]">
                                <p className="text-xl font-semibold">
                                    Samuel Ujunwa
                                </p>
                                <p className="text-gray-500">Team Lead</p>
                                <p className="text-sm">
                                    Founder and chief visionary, Tony is the
                                    driving force behind our bootcamp. He is
                                    passionate about empowering individuals
                                    through education and actively engages in
                                    curriculum development, marketing, and
                                    enhancing the student experience.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 phone:w-full h-max flex gap-4">
                            <div className="w-20 h-20 rounded-full bg-sky-200">
                                <img src={team1} alt="" className="w-full h-full rounded-full" />
                            </div>
                            <div className="w-[calc(100%-6rem)]">
                                <p className="text-xl font-semibold">
                                    Cynthia Onyilimba
                                </p>
                                <p className="text-gray-500">Team Lead</p>
                                <p className="text-sm">
                                    Founder and chief visionary, Tony is the
                                    driving force behind our bootcamp. He is
                                    passionate about empowering individuals
                                    through education and actively engages in
                                    curriculum development, marketing, and
                                    enhancing the student experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
