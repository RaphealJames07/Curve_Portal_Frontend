import {TbUsers} from "react-icons/tb";
import {GrBriefcase} from "react-icons/gr";
import {PiBrainLight} from "react-icons/pi";
import {BsBook} from "react-icons/bs";
import herobg from "../../../assets/highlighttwo.svg";
import highlights from "../assets/highlight.json";
import OwlCarousel from "react-owl-carousel";

type IconKey = "TbUsers" | "GrBriefcase" | "PiBrainLight" | "BsBook";

const iconMap: Record<IconKey, React.ElementType> = {
    TbUsers: TbUsers,
    GrBriefcase: GrBriefcase,
    PiBrainLight: PiBrainLight,
    BsBook: BsBook,
};

const HomeHighlight = () => {
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
                dots: true,
            },
            600: {
                items: 1,
                dots: true,
            },
            1000: {
                items: 1,
                dots: true,
                nav: true,
            },
        },
    };
    return (
        <div className="w-full h-max">
            <div className="w-full h-max px-40 phone:px-4 pt-20 phone:pt-16 flex phone:flex-col gap-5">
                <div className="w-[60%] phone:w-full h-max flex flex-col gap-8 relative phone:items-center">
                    <div className="w-full h-max flex flex-col">
                        <p className="text-2xl">
                            Bootcamp Highlights{" "}
                            <span className="highlighted-text2 relative text-2xl phone:text-2xl">
                                Advantages
                            </span>
                        </p>
                    </div>
                    <div className="w-full h-max flex flex-col gap-3">
                        {highlights.map((item, index) => {
                            const IconComponent = iconMap[item.icon as IconKey];
                            return (
                                <div
                                    className="w-full h-max flex hover:translate-x-2 transition-all duration-700"
                                    key={index}
                                >
                                    <div className="w-16 h-max pt-2">
                                        <span className="w-8 h-8 rounded bg-secondary-color  flex items-center justify-center">
                                            {IconComponent && (
                                                <IconComponent
                                                    className="text-primary-color"
                                                    size={20}
                                                />
                                            )}
                                        </span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] h-max flex flex-col gap-1">
                                        <p className="font-medium text-lg text-primary-color">
                                            {item?.title}
                                        </p>
                                        <p className="text-sm">
                                            {item?.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-[40%] phone:w-full phone:pb-10 h-max pt-20 flex items-center justify-end phone:justify-center">
                    <OwlCarousel
                        {...carouselOptions}
                        dotsEach={true}
                        className="w-full "
                    >
                        <div className="item w-full h-max flex flex-col gap-2 items-center">
                            <img
                                src={herobg}
                                alt=""
                                className="w-[100%] h-[20rem] phone:h-[25rem] object-contain"
                            />
                            <p>Highlight 1</p>
                        </div>
                        <div className="item w-full h-max flex flex-col gap-2 items-center">
                            <img
                                src={herobg}
                                alt=""
                                className="w-[100%] h-[20rem] phone:h-[25rem] object-contain"
                            />
                            <p>Highlight 2</p>
                        </div>
                        <div className="item w-full h-max flex flex-col gap-2 items-center">
                            <img
                                src={herobg}
                                alt=""
                                className="w-[100%] h-[20rem] phone:h-[25rem] object-contain"
                            />
                            <p>Highlight 3</p>
                        </div>
                        <div className="item w-full h-max flex flex-col gap-2 items-center">
                            <img
                                src={herobg}
                                alt=""
                                className="w-[100%] h-[20rem] phone:h-[25rem] object-contain"
                            />
                            <p>Highlight 4</p>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default HomeHighlight;
