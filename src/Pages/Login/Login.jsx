import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12 ">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6"> 
                            <input className="btn btn-primary" type="submit" value='Login' />
                            <p className='text-center mt-3'><small>New to this website Please <Link className='text-primary font-semibold' to={'/signup'}> Register</Link> </small></p>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold text-center mb-8'>Login with</h4>
                        
                        <div className='grid grid-row-3 mb-8 mx-3 gap-3'> 
                            <button className="btn btn-outline btn-primary text-3xl"><FaFacebook></FaFacebook></button> 
                            <button className="btn btn-outline btn-error text-3xl"><FaGoogle></FaGoogle></button> 
                            <button className="btn btn-outline btn-success text-3xl"><FaTwitter></FaTwitter></button> 
                        {/* <input className="btn btn-primary" type="submit" value='Google' />
                        <input className="btn btn-primary" type="submit" value='Facebook' />
                        <input className="btn btn-primary" type="submit" value='Twitter' /> */}

                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;