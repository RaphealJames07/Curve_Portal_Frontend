/* eslint-disable @typescript-eslint/no-explicit-any */
import UsersDropdown from "./components/UsersDropdown";
import data from "./components/test.json";
import fingerprintImg from "../../assets/fingerprint.png";
import {useState} from "react";
import {toast} from "react-toastify";
import {StudentDataType} from "./AttendanceRegister";
import {startAuthentication} from "@simplewebauthn/browser";

const LoginAttendance = () => {
    const [selectedStudent, setSelectedStudent] =
        useState<StudentDataType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authenticationOptions, setAuthenticationOptions] = useState(null);

    // Fetch login options (challenge) from the backend
    const handleFetchChallenge = async () => {
        if (!selectedStudent) {
            return toast.error("Please select a student first.");
        }
        try {
            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/attendance/requestLoginOptions",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({studentId: selectedStudent._id}),
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to fetch challenge."
                );
            }
            const data = await response.json();
            setAuthenticationOptions(data.options);
        } catch (error: any) {
            console.error("Error fetching challenge:", error.message);
            toast.error("Failed to fetch login challenge.");
        }
    };

    // Handle fingerprint login
    const handleFingerLogin = async () => {
        if (!selectedStudent) {
            toast.error("Please select a student first.");
            return;
        }
        if (!authenticationOptions) {
            return toast.error("Please fetch the login challenge first.");
        }

        try {
            setIsLoading(true);

            const fingerprint = await startAuthentication({
                optionsJSON: authenticationOptions,
            });

            console.log(fingerprint);

            const requestBody = {
                fingerprint,
                studentId: selectedStudent._id,
                classDay: 5,
            };

            const response = await fetch(
                "http://127.0.0.1:3000/api/v1/attendance/loginFinger",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json();
            setIsLoading(false);

            if (!response.ok) {
                throw new Error(data.message || "Login failed.");
            }

            toast.success(
                data.message || `Welcome, ${selectedStudent.firstName}!`
            );
        } catch (error: any) {
            setIsLoading(false);
            console.error("Error during login:", error);
            toast.error(error.message || "An error occurred during login.");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center p-4">
            <p className="text-2xl font-semibold">Fingerprint Login</p>
            <div className="w-[50%] phone:w-full h-[80%] flex flex-col gap-4 items-center justify-center shadow-xl border-gray-200 border rounded-xl">
                <div className="w-full h-full flex flex-col items-center gap-8 text-center p-4">
                    <p>Select your name to continue</p>
                    <UsersDropdown
                        studentsData={data}
                        setSelectedStudent={setSelectedStudent}
                    />
                    <button
                        onClick={handleFetchChallenge}
                        className="w-max h-max p-2 bg-primary-color rounded"
                    >
                        Get Challenge
                    </button>
                    <div
                        className={`w-full h-60 flex items-center justify-center cursor-pointer ${
                            isLoading ? "bg-gray-300" : "bg-purple-300"
                        }`}
                        onClick={!isLoading ? handleFingerLogin : undefined}
                    >
                        {isLoading ? (
                            <p>Scanning...</p>
                        ) : (
                            <img
                                src={fingerprintImg}
                                alt="Fingerprint Scanner"
                                className="h-full"
                            />
                        )}
                    </div>
                    <div className="w-full h-max flex gap-6 items-center justify-center">
                        <button
                            className="w-max h-max flex p-2 bg-primary-color rounded"
                            onClick={handleFingerLogin}
                            disabled={isLoading}
                        >
                            Proceed to Login
                        </button>
                        <button
                            className="w-max h-max flex p-2 bg-primary-color rounded"
                            onClick={() => toast.info("Login canceled.")}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAttendance;
