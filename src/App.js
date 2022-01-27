import "./App.css";

function App() {
  return (
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <link href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </link>
          </div>
          <nav class="hidden md:flex space-x-10">
            <button
              type="button"
              class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Blog</span>
            </button>
            <button
              type="button"
              class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span>Order</span>
            </button>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <link
              href="#"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </link>
            <link
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </link>
          </div>
        </div>
         {/* Sign up section */}
        <div class="w-2/5 flex-col">
          <div class="mt-1 mb-2 w-full relative rounded-md shadow-lg">
            <input
              type="text"
              name="first_name"
              id="price"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="text"
              name="last_name"
              id="last_name"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Last Name"
            />
          </div>
          <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="email"
              name="email"
              id="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="password"
              name="password"
              id="price"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="password"
              name="confirm_password"
              id="price"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Confirm Password"
            />
          </div>
          <link
              href="#"
              class="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </link>
        </div>
        {/* end of signup */}

        {/* signin */}
        <div class="w-2/5 flex-col">
        <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="email"
              name="email"
              id="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div class="mb-2 relative rounded-md shadow-lg">
            <input
              type="password"
              name="password"
              id="price"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <link
              href="#"
              class="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign in
            </link>
        </div>
        {/* end signin */}
      </div>
    </div>
  );
}

export default App;
