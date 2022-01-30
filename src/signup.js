import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./axios";

export default function Signup() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState("")

  const handleComfirmPassword = (event) => {
    if (event.target.value !== user.password) {
      setAlert((c) => (c = "password not match"));
    } else {
      setAlert((c) => (c = ""));
    }
  };

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/signup", user, config)
      .then((result) => {
        console.log("Success:",);
        if (result.data.errors === "") {
          setSuccess((c) => (c = "successful signup") )
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="sm:mx-auto sm:mt-12 sm:w-1/4 w-3/4 mt-40 mx-auto flex-col items-center ">
      <div className="mb-5 text-green-600 text-sm border h-6 p-3 rounded-md bg-green-600">{success}</div>
      <Link to="/" className="flex justify-around  w-3/4 mx-auto items-center mb-3">
        <h3 className="text-2xl font-semibold">
          Kitchen Mania
          <span style={{ color: "red" }} className="font-bold">
            .
          </span>
        </h3>
      </Link>
      <form onSubmit={handleSubmit} className="ml-6 mr-6 flex-col">
        <div className="mt-1 mb-2 w-full relative rounded-md shadow-lg">
          <input
            required
            onChange={handleInput}
            type="text"
            name="first_name"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="First Name"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            required
            onChange={handleInput}
            type="text"
            name="last_name"
            id="last_name"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            required
            onChange={handleInput}
            type="email"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            required
            onChange={handleInput}
            type="password"
            name="password"
            id="password"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="text-sm ml-1 text-red-800">{alert}</div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            required
            onChange={handleComfirmPassword}
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Confirm Password"
          />
        </div>
        <div className="text-sm ml-1 text-red-800">{alert}</div>
        <div className="flex justify-between items-center">
          <input
            type="submit"
            className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            value="Sign Up"
          />
          <Link to="/login">Have an account?</Link>
        </div>
      </form>
    </div>
  );
}
