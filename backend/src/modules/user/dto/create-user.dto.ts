import { IsEmail, IsString, Matches } from "class-validator";

export class CreateUserDTO{
    @IsString()
    userName!:string;
    @IsEmail()
    emailId!:string;
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_-])(?=.*[0-9]).{8,20}$/,{
        message:"Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character"
    })
    password!:string;
}