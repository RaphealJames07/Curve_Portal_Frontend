import SchemeCalendar from "./components/SchemeCalendar";

const Calendar = () => {
    return (
        <div className="w-full h-max flex flex-col gap-4">
            <p className="text-lg font-medium flex flex-col">
                Frontend Scheme
                <span className="text-xs font-normal">Jan 12th to July 29th</span>
            </p>
            <div className="w-full h-max ">
              <SchemeCalendar/>
            </div>
        </div>
    );
};

export default Calendar;
