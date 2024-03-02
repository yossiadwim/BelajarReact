import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products"
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm label="email" type="email" placeholder="example@mail.com" name="email">

            </InputForm>
            <InputForm label="password" type="password" placeholder="***" name="password">

            </InputForm>

            <Button classname="bg-blue-500 text-white w-full" type="submit">Login</Button>
        </form>
    );

};

export default FormLogin;