/* eslint-disable no-unused-vars */
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handlesignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.file.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    // Create a new user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        form.reset();
        updateUserData(user, name);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        toast.error("User creation failed");
      });

    // Update profile
    const updateUserData = (user, name) => {
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {})
        .catch(() => {});
    };
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

  const handleChecked = (e) => {
    const checked = e.target.checked;
    setAccepted(checked);
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a href="#" className="mb-6 text-4xl font-semibold">
          Deshi<span className="text-green-500">Chef</span>
        </a>
        <div className="w-full bg-green-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form onSubmit={handlesignUp} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your photo
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
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
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onClick={handleChecked}
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      className="font-medium text-gray-600 hover:underline"
                      to="/terms"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={!accepted}
                className={
                  !accepted
                    ? "w-full text-white bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-not-allowed"
                    : "w-full text-white bg-gray-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                }
              >
                Create an account
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
              <p className="text-sm font-light text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-gray-600 hover:underline"
                >
                  Login here
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

export default Register;
