import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password});
        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            setUser(user);
        })
        .catch((error) =>{
            alert(error.code);
        });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">

        <h2 className="text-2xl font-semibold text-center">Login To Your Account</h2>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold">Don't Have an Account? <Link className="text-red-500" to="/auth/register">Register</Link> </p>
    </div>

        </div>
    );
};

export default Login;