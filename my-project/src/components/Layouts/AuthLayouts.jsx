import { Link } from "react-router-dom"

const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" flex items-center justify-center">
                <div className="bg-white border p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                    <p className="font-medium text-slate-500 mb-8">
                        Welcome, Please enter your details
                    </p>
                    {children}
                    <Navigation type={type}></Navigation>

                </div>

            </div>

        </div>

    );
};

const Navigation = ({ type }) => {

    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center">
                Dont' have account?{" "}

                <Link to="/register" className="font-bold text-blue-600">Register</Link>
            </p>
        );
    }
    else {
        return (
            <p className="text-sm mt-5 text-center">
                Have an account?{" "}

                <Link to="/login" className="font-bold text-blue-600">Login</Link>
            </p>
        );
    }
}

export default AuthLayout;