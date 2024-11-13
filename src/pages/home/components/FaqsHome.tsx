import type {CollapseProps} from "antd";
import {Collapse} from "antd";

const items: CollapseProps["items"] = [
    {
        key: "1",
        label: "What are the requirements to join the Curve africa",
        children: (
            <ul>
                <li>
                    -You must be available for the whole 6 month duration of the
                    training{" "}
                </li>

                <li>-own or have access to a working laptop</li>

                <li>-And be willing to learn and dedicate to the training</li>
            </ul>
        ),
    },
    {
        key: "2",
        label: "How do I apply for the training",
        children: (
            <ul>
                <li>- visit our website</li>

                <li>- click on the register buttonp</li>

                <li>- fill the form and submit</li>
            </ul>
        ),
    },
    {
        key: "3",
        label: "Where is your location",
        children: (
            <ul>
                <li>-we are currently located in Lagos, Nigeria</li>
            </ul>
        ),
    },
    {
        key: "4",
        label: "Is your program online",
        children: (
            <ul>
                <li>Currently, we only run the onsite training</li>
            </ul>
        ),
    },
    {
        key: "5",
        label: "Do you have weekend classes",
        children: (
            <ul>
                <li>Currently our training is only on weekdays</li>
            </ul>
        ),
    },
    {
        key: "6",
        label: "When are your training days",
        children: (
            <ul>
                <li>Our training days are Mondays, Wednesdays and Fridays.</li>
            </ul>
        ),
    },
    {
        key: "7",
        label: "How long is the trainings",
        children: (
            <ul>
                <li>our intensive training runs for 6 months</li>
            </ul>
        ),
    },
];

const FaqsHome = () => {
    return <Collapse accordion items={items} size="large" />;
};

export default FaqsHome;
