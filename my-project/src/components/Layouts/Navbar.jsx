import Button from "../Elements/Button";


const email = localStorage.getItem('email');

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">My App</div>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <div className="justify-center ">
                            <a href="#" className="text-white hover:text-gray-300 ">{email}</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center">
                            <Button classname="bg-white text-black text-sm w-fit" onClick={handleLogout}>
                                Logout</Button>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>

    );
}

export default Navbar;