import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../../public/giphy.gif";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const Login = () => {
  const { createUserWithGoogle, signIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location.state);
  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((res) => {
        console.log(res?.user);
        const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName}
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
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);

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
      navigate(from, { replace: true });
    });
  };

  return (
    <>
    <Helmet>
    <title> Ayojon | Sign Up</title>
  </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold mb-3">Login now!</h1>

          <img src={login}></img>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
            <p>
              <small>
                New Here? <Link to="/signUp">Create an account</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
