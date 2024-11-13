import {useState} from "react";
import {FaEyeSlash} from "react-icons/fa6";
import {toast} from "react-toastify";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const url = "https://curve-portal-backend.vercel.app/api/v1/users/login";
    const data = {email, password};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = (e: any) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Please fill all fields");
        } else {
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="w-full h-screen">
            <div className="w-full h-full flex">
                <div className="w-[60%] h-full"></div>
                <div className="w-[40%] h-full">
                    <div className="w-full h-full flex flex-col justify-center gap-5 px-10">
                        <div className="w-full h-max flex flex-col items-center">
                            <p>Welcome to Curve Portal</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit?
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-6">
                            <div className="w-full h-max flex justify-between gap-4">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="w-full h-max flex rounded justify-between items-center border px-2 text-sm border-yellow-500 gap-2">
                                <input
                                    type="password"
                                    className="w-[80%] h-10 outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {/* <FaEye size={18} className="cursor-pointer" /> */}
                                <FaEyeSlash
                                    size={18}
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="w-full h-max flex justify-between gap-4">
                                <button
                                    className="w-full h-10 rounded border pl-2 text-sm font-semibold bg-yellow-500 outline-none"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                            <div className="w-full h-max flex">
                                <p>
                                    Don't have an account?{" "}
                                    <NavLink to={"/register"}>
                                        <span className="text-blue-500 cursor-pointer">
                                            Register
                                        </span>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
