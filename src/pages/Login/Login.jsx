/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        form.reset();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Login Error");
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Google signed in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google signed in failed");
      });
  };
  const handleGithubSignIn = (e) => {
    e.preventDefault();
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        toast.success("Google signed in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google signed in failed");
      });
  };
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="mb-6 text-4xl font-semibold">
          Deshi<span className="text-green-500">Chef</span>
        </a>
        <div className="w-full bg-green-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gray-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-white text-center">or</p>
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center border-2 border-white flex justify-center items-center hover:text-gray-600"
              >
                <FaGoogle className="mr-2"></FaGoogle>
                Sign in with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                type="submit"
                className="w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center border-2 border-white flex justify-center items-center hover:text-gray-600"
              >
                <FaGithub className="mr-2"></FaGithub>
                Sign in with Github
              </button>
              <p className="text-sm font-light text-white ">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-gray-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
