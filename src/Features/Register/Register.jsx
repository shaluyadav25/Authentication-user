import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useCreateUserMutation } from "../../app/api/userApi.js";

const Register = () => {
  const navigate = useNavigate();

  const [createUser] = useCreateUserMutation();

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum 3 characters is required"),

    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum 6 characters is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await createUser(data);
    reset();
    navigate("/");
  };

  return (
    <>
      <div className="border-gray-400 shadow-2xl rounded-2xl w-100 h-130 m-20">
        <form onSubmit={handleSubmit(onSubmit)}>

          <p className="m-2 text-xs">
            GET STARTED
          </p>

          <h1 className="font-bold text-4xl m-2">
            Create your account
          </h1>

          <p className="m-2 text-sm">
            Enter your details to register.
          </p>

          <div className="p-5 flex flex-col">

            <label
              htmlFor="name"
              className="font-bold"
            >
              Name:
            </label>

            <input
              className="border-2 border-gray-200 rounded-md mx-2 p-1"
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-red-500">
                {errors.name.message}
              </p>
            )}

            <label
              htmlFor="email"
              className="font-bold"
            >
              Email:
            </label>

            <input
              type="email"
              className="border-2 border-gray-200 rounded-md mx-2 p-1"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500">
                {errors.email.message}
              </p>
            )}

            <label
              htmlFor="password"
              className="font-bold"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className="border-2 border-gray-200 rounded-md mx-2 p-1"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500">
                {errors.password.message}
              </p>
            )}

          </div>

          <div className="flex justify-center items-center m-5 rounded-xl p-3 bg-blue-950 text-white font-semibold">
            <button type="submit">
              Create User
            </button>
          </div>

          <p className="font-xs m-5 text-center">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-600"
            >
              Sign in
            </Link>
          </p>

        </form>
      </div>
    </>
  );
};

export default Register;  