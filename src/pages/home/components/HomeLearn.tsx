const HomeLearn = () => {
    return (
        <div className="w-full h-max px-40 phone:px-4 pt-14 phone:pt-16 flex phone:flex-col gap-5 ">
            <div className=" w-full h-max rounded-lg bg-secondary-color ">
                <div className="learnBg h-full w-full flex flex-col gap-4 phone:gap-8 items-center justify-center py-20 phone:py-14">
                    <p className="text-3xl font-semibold text-white phone:text-center phone:mix-blend-difference">Discover our diverse training options</p>
                    <p className=" text-white phone:w-[80%] phone:text-center phone:mix-blend-difference">Looking for a place to learn? We got you covered</p>
                    <button className="w-max h-max px-10 py-5 rounded-full bg-white">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default HomeLearn;
