import { Link } from "react-router-dom"
import SocialLogin from "../../../Components/ExtraLogin/SocialLogin"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');

  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content px-16 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
      <div className="divider">Or continue with</div>

          <SocialLogin/>
          <p className="text-center mt-4">Don't have an account? <Link to={"/register"} className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link></p>
    </div>
  </div>
</div>
  )
}

export default Login