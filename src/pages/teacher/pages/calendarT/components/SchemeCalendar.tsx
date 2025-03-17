import React from "react";
import {Calendar, Badge} from "antd";
import type {Dayjs} from "dayjs";
// import dayjs from "dayjs";

const frontendSchemeData = [
  // May 2025
  { classDay: 1, date: "05-03-2025", dayText: "Monday", subject: ["Intro to HTML", "JavaScript Basics"] },
  { classDay: 2, date: "07-03-2025", dayText: "Wednesday", subject: ["CSS Fundamentals", "JS Variables & Scope"] },
  { classDay: 3, date: "10-03-2025", dayText: "Friday", subject: ["CSS Flexbox & Grid", "JS Functions & Closures"] },
  { classDay: 4, date: "12-03-2025", dayText: "Monday", subject: ["CSS Animations", "ES6+ Features"] },
  { classDay: 5, date: "14-03-2025", dayText: "Wednesday", subject: ["HTML Forms & Validation", "JavaScript DOM Manipulation"] },
  { classDay: 6, date: "17-03-2025", dayText: "Friday", subject: ["Bootstrap & Tailwind CSS", "Event Listeners in JS"] },
  { classDay: 7, date: "19-03-2025", dayText: "Monday", subject: ["Intro to React", "JSX & Components"] },
  { classDay: 8, date: "21-03-2025", dayText: "Wednesday", subject: ["React Props & State", "Handling Events in React"] },
  { classDay: 9, date: "24-03-2025", dayText: "Friday", subject: ["React Lifecycle Methods", "useState & useEffect"] },
  { classDay: 10, date: "26-03-2025", dayText: "Monday", subject: ["React Router Basics", "SPAs with React"] },
  { classDay: 11, date: "28-03-2025", dayText: "Wednesday", subject: ["Styled Components & CSS Modules", "Form Handling in React"] },
  { classDay: 12, date: "31-03-2025", dayText: "Friday", subject: ["React Context API", "State Management Overview"] },

  // June 2025
  { classDay: 13, date: "02-04-2025", dayText: "Monday", subject: ["Advanced React State", "Performance Optimization"] },
  { classDay: 14, date: "04-04-2025", dayText: "Wednesday", subject: ["React Hooks Deep Dive", "Custom Hooks"] },
  { classDay: 15, date: "07-04-2025", dayText: "Friday", subject: ["Redux Basics", "React with Redux Toolkit"] },
  { classDay: 16, date: "09-04-2025", dayText: "Monday", subject: ["React Query & API Fetching", "Error Handling in React"] },
  { classDay: 17, date: "11-04-2025", dayText: "Wednesday", subject: ["React Authentication", "JWT & OAuth"] },
  { classDay: 18, date: "14-04-2025", dayText: "Friday", subject: ["Testing React Apps", "Jest & React Testing Library"] },
  { classDay: 19, date: "16-04-2025", dayText: "Monday", subject: ["Next.js Basics", "Server-side Rendering (SSR)"] },
  { classDay: 20, date: "18-04-2025", dayText: "Wednesday", subject: ["Next.js Routing & API Routes", "Static Site Generation (SSG)"] },
  { classDay: 21, date: "21-04-2025", dayText: "Friday", subject: ["CSS-in-JS & Tailwind in Next.js", "SEO Best Practices"] },
  { classDay: 22, date: "23-04-2025", dayText: "Monday", subject: ["Building a Fullstack App", "MERN Stack Overview"] },
  { classDay: 23, date: "25-04-2025", dayText: "Wednesday", subject: ["Connecting Frontend to Backend", "Fetching Data Efficiently"] },
  { classDay: 24, date: "28-04-2025", dayText: "Friday", subject: ["Deploying React Apps", "Vercel & Netlify Deployment"] },

  // July 2025
  { classDay: 25, date: "30-04-2025", dayText: "Monday", subject: ["CI/CD Pipelines", "Version Control with Git"] },
  { classDay: 26, date: "02-05-2025", dayText: "Wednesday", subject: ["React Performance Optimization", "Code Splitting & Lazy Loading"] },
  { classDay: 27, date: "05-05-2025", dayText: "Friday", subject: ["Progressive Web Apps (PWA)", "Service Workers"] },
  { classDay: 28, date: "07-05-2025", dayText: "Monday", subject: ["GraphQL with React", "Apollo Client"] },
  { classDay: 29, date: "09-05-2025", dayText: "Wednesday", subject: ["React Native Basics", "Building Mobile Apps"] },
  { classDay: 30, date: "12-05-2025", dayText: "Friday", subject: ["State Management in React Native", "Navigation in React Native"] },
  { classDay: 31, date: "14-05-2025", dayText: "Monday", subject: ["WebSockets in React", "Real-time Applications"] },
  { classDay: 32, date: "16-05-2025", dayText: "Wednesday", subject: ["Docker & Containerization", "Running React in Containers"] },
  { classDay: 33, date: "19-05-2025", dayText: "Friday", subject: ["Microfrontends", "Building Scalable Frontend Apps"] },
  { classDay: 34, date: "21-05-2025", dayText: "Monday", subject: ["AI & ML in Frontend", "Integrating AI APIs in React"] },
  { classDay: 35, date: "23-05-2025", dayText: "Wednesday", subject: ["Best Practices for Large-scale React Apps", "Maintaining Code Quality"] },
  { classDay: 36, date: "26-05-2025", dayText: "Friday", subject: ["Final Project & Presentation", "Recap & Q&A"] },
]

const SchemeCalendar: React.FC = () => {
    const dateCellRender = (value: Dayjs) => {
        const formattedDate = value.format("DD-MM-YYYY");
        const event = frontendSchemeData.find(
            (item) => item.date === formattedDate
        );

        return event ? (
            <ul style={{listStyle: "none", padding: 0}}>
                {event.subject.map((topic, index) => (
                    <li key={index}>
                        <Badge status="success" text={topic} />
                    </li>
                ))}
            </ul>
        ) : null;
    };

    return (
        <div style={{padding: 20}}>
            <Calendar cellRender={dateCellRender} />
        </div>
    );
};

export default SchemeCalendar;
