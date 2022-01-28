import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="mx-auto mt-12 w-1/4 flex-col items-center">
      <Link to="/" className="flex w-3/4 mx-auto items-center">
        
          <img
            className="w-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        
        <h3 className=" text-3xl font-semibold">
          Kitchen Mania
          <span style={{ color: "red" }} className="font-bold ">
            .
          </span>
        </h3>
      </Link>
      <div className="flex-col">
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
        <div className="flex justify-between items-center">
          <Link
            to="#"
            className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign In
          </Link>
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </div>
      {/* end signin */}
    </div>
  );
}
