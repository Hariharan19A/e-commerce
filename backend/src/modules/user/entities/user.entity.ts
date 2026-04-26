import { Entity } from "typeorm";

@Entity('user')
export class User{
    userId!:number;
    userName!:string;
    emailId!:string;
    password!:string;
}