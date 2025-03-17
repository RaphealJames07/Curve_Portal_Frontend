/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from "react";
import UsersDropdown from "./components/UsersDropdown";
import data from "./components/test.json";
import fingerprintImg from "../../assets/fingerprint.png";
import {toast} from "react-toastify";
import {startRegistration} from "@simplewebauthn/browser";

export interface StudentDataType {
    firstName: string;
    lastName: string;
    _id: string;
}

const AttendanceRegister = () => {
    const [selectedStudent, setSelectedStudent] =
        useState<StudentDataType | null>(null);
    const [registrationOptions, setRegistrationOptions] = useState(null);

    // Fetch registration challenge from the backend
    const handleFetchChallenge = async () => {
        if (!selectedStudent) {
            return toast.error("Please select a student to register");
        }
        try {
            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/attendance/requestRegisterOptions",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        studentId: selectedStudent._id,
                    }),
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to fetch challenge"
                );
            }
            const data = await response.json();
            setRegistrationOptions(data.options);
        } catch (error: any) {
            console.log("Error fetching challenge:", error);
            toast.error("Failed to fetch registration challenge.");
        }
    };

    // Handle fingerprint scan and send attestation data to backend
    const handleFingerPrintScan = async () => {
        if (!registrationOptions) {
            return toast.error(
                "Please fetch the registration challenge first."
            );
        }

        try {
            const attestationResponse = await startRegistration({
                optionsJSON: registrationOptions,
            });
            console.log(attestationResponse);

            const response = await fetch(
                `http://127.0.0.1:3000/api/v1/attendance/registerFinger`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        studentId: selectedStudent?._id,
                        data: attestationResponse,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to register fingerprint.");
            }

            toast.success("Fingerprint registered successfully!");
        } catch (error: any) {
            console.log("Error during registration:", error);
            toast.error("Fingerprint registration failed.");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center p-4">
            <p className="text-2xl font-semibold">Fingerprint Registration</p>
            <div className="w-[50%] phone:w-full h-[80%] flex flex-col gap-4 items-center justify-center shadow-xl border-gray-200 border rounded-xl">
                <div className="w-full h-full flex flex-col items-center gap-8 text-center p-4">
                    <p>Select your name to continue</p>
                    <UsersDropdown
                        studentsData={data}
                        setSelectedStudent={setSelectedStudent}
                    />
                    <button
                        className="w-max h-max flex p-2 bg-primary-color rounded"
                        onClick={handleFetchChallenge}
                    >
                        Fetch Registration Challenge
                    </button>
                    <div
                        className="w-full h-60 bg-purple-300 flex items-center justify-center cursor-pointer"
                        onClick={handleFingerPrintScan}
                    >
                        <img
                            src={fingerprintImg}
                            alt="Fingerprint Scanner"
                            className="h-full"
                        />
                    </div>
                    <div className="w-full h-max flex gap-6 items-center justify-center">
                        <button className="w-max h-max flex p-2 bg-primary-color rounded">
                            Proceed to Login
                        </button>
                        <button className="w-max h-max flex p-2 bg-primary-color rounded">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceRegister;
