import FaqsHome from "./FaqsHome";
import herobg from "../../../assets/highlighttwo.svg";

const HomeQuestions = () => {
    return (
        <div className="w-full h-max px-40 phone:px-4 flex phone:flex-col gap-20 mt-20 phone:mt-14 phone:gap-1">
            <div className="w-[50%] phone:w-full h-max flex flex-col gap-10">
                <div className="w-max h-max flex flex-col gap-2">
                    <p className="text-2xl font-semibold">
                        Top #5 questions answered
                    </p>
                    <p className="w-[70%]">
                        Visitors and interested ones have asked these questions
                        often and we off course have answers.
                    </p>
                </div>
                <div className="w-full h-max bgb">
                    <FaqsHome />
                </div>
            </div>
            <div className="w-[50%] phone:w-full mt-10 phone:pb-10 h-max flex  justify-end phone:justify-center">
                <img
                    src={herobg}
                    alt=""
                    className="w-[80%] h-[30rem] phone:h-[20rem] object-contain"
                />
            </div>
        </div>
    );
};

export default HomeQuestions;
