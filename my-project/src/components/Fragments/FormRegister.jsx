import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormRegister = () => {

    return (
        <form action="">
            <InputForm label="Fullname" type="email" placeholder="Fullname" name="fullname">

            </InputForm>
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email">

            </InputForm>
            <InputForm label="Password" type="password" placeholder="***" name="password">

            </InputForm>
            <InputForm label="Confirm Passwrod" type="password" placeholder="***" name="confirmPassword">

            </InputForm>

            <Button classname="bg-blue-500 text-white w-full">Register</Button>
        </form>
    );

};

export default FormRegister;