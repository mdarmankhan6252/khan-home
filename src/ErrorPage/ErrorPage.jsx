import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col text-center w-full h-screen items-center justify-center">
            <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-red-500 pb-2">ERROR</h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">404 page is not found</h1>
            <Link className="border py-2 inline-block mt-6 border-black px-6 hover:bg-black hover:text-white duration-300" to='/'>Go to home</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;