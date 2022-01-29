import { Link } from "react-router-dom";
export default function Signup() {
  
  return (
    <div className="mx-auto mt-16 flex-col items-center md:w-1/4 ">
      <Link to="/"className="flex ml-6 mr-6 md:w-3/4 mx-auto items-center">
          <img
            className="w-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        
        <h3 className="text-2xl font-semibold">
          Kitchen Mania
          <span style={{ color: "red" }} className="font-bold ">
            .
          </span>
        </h3>
      </Link>
      <div className="ml-6 mr-6 flex-col">
        <div className="mt-1 mb-2 w-full relative rounded-md shadow-lg">
          <input
            type="text"
            name="first_name"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="First Name"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            type="email"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            type="password"
            name="password"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="mb-2 relative rounded-md shadow-lg">
          <input
            type="password"
            name="confirm_password"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="#"
            className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </Link>
          <Link to="/signin">Have an account?</Link>
        </div>
      </div>
    </div>
  );
}
