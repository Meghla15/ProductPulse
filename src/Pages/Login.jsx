import { Link, useNavigate} from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth.jsx';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import toast from 'react-hot-toast';

const Login = () => {
	const {signInUser} = UseAuth()
	const navigate = useNavigate()
	const from = location.state || '/';
	
	const onSubmit = async e =>{
		e.preventDefault ()
		const form = e.target
        const email = form.email.value 
		const password = form.password.value
         
		console.log({email, password})

		signInUser(email, password)
		.then(result =>{
            toast.success("Login Successfully")
            navigate(from)
            console.log(result)
         })
		.catch(error =>{
			console.log(error)
			toast.error('Invalid email or password')
		})

	}
    
    return (
        <div className=' '>
            <div className=" border border-slate-600  mx-auto mt-6 mb-16 w-full max-w-md p-10 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-3xl font-bold font-sans text-center">Login</h1>
	<form onSubmit={onSubmit}  noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="Email" className="block dark:text-gray-600">Your Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			<div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block p-3 text-center  rounded-2xl bg-orange-600 text-white font-semibold px-5 text-xm py-3 w-2/3 mx-auto">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<SocialLogin></SocialLogin>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"><Link to='/register'>Sign up</Link></a>
	</p>
</div>
        </div>
    );
};

export default Login;