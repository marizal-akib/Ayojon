import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import singUp from "../../../../public/login.gif";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile, createUserWithGoogle } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((res) => {
        console.log(res?.user);
        const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "user"}
        axiosPublic.post('/users', userInfo)
        .then(res => console.log(res.data));
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
        navigate("/");
      })
      .catch((error) => console.log("error", error));
  };

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("Updated");
          const userInfo = {
            name: data.name,
            email: data.email,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User has been created",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.error(error));
    });
  };

  return (
    <>
      <Helmet>
        <title> Ayojon | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Sign-Up now!</h1>
          <img src={singUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center mt-12">
              <button
                onClick={handleGoogleLogin}
                className="btn text-xs font-semibold py-2 "
              >
                <span className="text-lg">
                  <FcGoogle />
                </span>{" "}
                Google
              </button>
              <div className="ml-16 mt-8 w-2/3 divider">OR</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[0-9])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password must be 6 character.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password must be in between 20 character.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Password requires at least one uppercase letter, one
                    lowercase letter, one number, one special character.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="mt-2 text-red-600 font-semibold text-xs">
                    Photo URL field is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign-Up"
                />
                <button></button>
              </div>

              <p className="mt-8">
                <small>
                  Already Have An Account?{" "}
                  <Link to="/login">Please Login.</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
