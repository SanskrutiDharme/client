import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-full max-w-md backdrop-blur-lg shadow-3xl  rounded px-8 pt-6 pb-8 mb-4  border-orange-200 text-left "
        style={{ marginTop: "100px" }}
      >
        <form>
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

          <div className="flex items-center justify-between">
            <button
              className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          New User?
          <button
            onClick={handleClick}
            className=" hover:text-white  text-black font-bold py-2 px-4 cursor-pointer "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
