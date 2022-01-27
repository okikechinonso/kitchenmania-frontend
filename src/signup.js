import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div>
      
      <div className="w-2/5 flex-col">
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
        <Link
          to="#"
          className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
