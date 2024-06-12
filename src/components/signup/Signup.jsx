import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-full max-w-md backdrop-blur-lg shadow-3xl  rounded px-8 pt-6 pb-8 mb-4  border-orange-200 text-left"
        style={{ marginTop: "60px" }}
      >
        <form>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-transparent shadow appearance-none border border-orange-500 rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-transparent shadow appearance-none border  border-orange-500 rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Select Role
            </label>

            <select
              id="countries"
              className="bg-transparent border border-orange-500 text-orange-500 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-transparent dark:border-orange-600 dark:placeholder-orange-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500"
              name="Role"
            >
              <option value="">Choose a Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="SuperAdmin">Super Admin</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-transparent shadow appearance-none border  border-orange-500 rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="Password"
              minLength={8}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="bg-transparent  shadow appearance-none border  border-orange-500 rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              name="Cpassword"
              minLength={8}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          Already User?
          <button
            onClick={handleClick}
            className=" hover:text-white  text-black font-bold py-2 px-4 cursor-pointer "
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
