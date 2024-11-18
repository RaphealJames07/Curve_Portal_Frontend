import {useRef, useState, useEffect} from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import {toast} from "react-toastify";

const TestPage = () => {
    const webcamRef = useRef<Webcam | null>(null); // Specify the type
    const [loading, setLoading] = useState(true);

    const BASE_URL = "https://raw.githubusercontent.com/RaphealJames07/face-recognition-models/main/models-face-recognitions";

    useEffect(() => {
        const loadModels = async () => {
            try {
                await faceapi.nets.tinyFaceDetector.loadFromUri(`${BASE_URL}`);
                await faceapi.nets.faceLandmark68Net.loadFromUri(`${BASE_URL}`);
                await faceapi.nets.faceRecognitionNet.loadFromUri(
                    `${BASE_URL}`
                );
                setLoading(false);
            } catch (error) {
                toast.error("Error loading face detection models.");
                console.error(error);
            }
        };
        loadModels();
    }, []);

    const handleLogin = async () => {
        toast.info("Attempting to log in with face recognition...");
        if (!webcamRef.current) {
            toast.error("Webcam is not initialized.");
            return;
        }

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) {
            toast.error("Failed to capture webcam image.");
            return;
        }

        try {
            const image = await faceapi.fetchImage(imageSrc); // Fetch image from screenshot
            const detections = await faceapi
                .detectSingleFace(image)
                .withFaceLandmarks()
                .withFaceDescriptor();

            if (detections) {
                const descriptor = detections.descriptor;
                const response = await fetch(
                    "http://127.0.0.1:3001/api/v1/attendance/loginWithFace",
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({descriptor}),
                    }
                );

                const result = await response.json();
                if (response.ok) {
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
            } else {
                toast.error("No face detected. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during face recognition.");
        }
    };

    return (
        <div>
            <h1>Face Recognition Attendance</h1>
            <div>
                {!loading ? (
                    <Webcam
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            border: "1px solid #ccc",
                        }}
                    />
                ) : (
                    <p>Loading face detection models...</p>
                )}
            </div>
            <button
                onClick={handleLogin}
                disabled={loading}
                className="cursor-pointer w-max h-max flex items-center justify-center bg-primary-color rounded p-4 mt-4"
            >
                Log In with Face
            </button>
        </div>
    );
};

export default TestPage;
