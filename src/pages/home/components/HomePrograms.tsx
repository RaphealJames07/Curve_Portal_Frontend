import {FaReact, FaNode,FaFigma} from "react-icons/fa6";
import data from "../assets/programs.json";

type IconKey = "FaReact" | "FaNode" | "FaFigma";

const iconMap: Record<IconKey, React.ElementType> = {
    FaReact: FaReact,
    FaNode: FaNode,
    FaFigma: FaFigma,
};

const HomePrograms = () => {
    return (
        <div className="w-full h-max px-40 phone:px-4 flex flex-col gap-20 mt-20 phone:mt-5 phone:gap-10">
            <div className="w-full h-max flex items-center flex-col">
                <p className="text-4xl">
                    Discover our main{" "}
                    <span className="highlighted-text3 relative ">
                        three programs
                    </span>
                </p>
            </div>
            <div className="w-full h-max flex justify-between gap-10 phone:flex-col">
                {data.map((item, index) => {
                    const IconComponent = iconMap[item.icon as IconKey];
                    return (
                        <div
                            className="w-1/3 phone:w-full h-max flex flex-col gap-4 hover:-translate-x-1 transition-all duration-700"
                            key={index}
                        >
                            <p className="text-4xl w-full flex justify-between">
                                {item?.id}{" "}
                                <span>
                                    {IconComponent && (
                                        <IconComponent
                                            className="text-primary-color"
                                            size={30}
                                        />
                                    )}
                                </span>
                            </p>
                            <hr />
                            <p className="text-xl font-semibold">
                                {item?.header}
                            </p>
                            <p>{item?.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePrograms;
