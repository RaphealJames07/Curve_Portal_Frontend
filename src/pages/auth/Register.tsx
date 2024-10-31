import {FaEye, FaEyeSlash} from "react-icons/fa6";

const Register = () => {
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
                                    type="text"
                                    className="w-1/2 h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="w-1/2 h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="w-full h-max flex justify-between gap-4">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full h-max flex justify-between gap-4">
                                <select
                                    name=""
                                    id=""
                                    className="w-1/2 h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                >
                                    <option value="">--Select Stack--</option>
                                    <option value="">Frontend</option>
                                    <option value="">Backend</option>
                                    <option value="">Product Design</option>
                                </select>
                                <select
                                    name=""
                                    id=""
                                    className="w-1/2 h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                >
                                    <option value="">--Select Gender--</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div>
                            <div className="w-full h-max flex rounded justify-between items-center border px-2 text-sm border-yellow-500 gap-2">
                                <input
                                    type="password"
                                    className="w-[80%] h-10 outline-none"
                                    placeholder="Password"
                                />
                                <FaEye size={18} className="cursor-pointer" />
                            </div>
                            <div className="w-full h-max flex rounded justify-between items-center border px-2 text-sm border-yellow-500 gap-2">
                                <input
                                    type="password"
                                    className="w-[80%] h-10 outline-none"
                                    placeholder="Confirm Password"
                                />
                                <FaEyeSlash
                                    size={18}
                                    className="cursor-pointer"
                                />
                            </div>
                            <div className="w-full h-max flex justify-between gap-4">
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Admission Code"
                                />
                            </div>
                            <div className="w-full h-max flex justify-between gap-4">
                                <button className="w-full h-10 rounded border pl-2 text-sm font-semibold bg-yellow-500 outline-none">
                                    REGISTER
                                </button>
                            </div>
                            <div className="w-full h-max flex">
                                <p>
                                    Already have an account? <span className="text-blue-500 cursor-pointer">Log In</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
