import { Column, Entity } from "typeorm";

@Entity('user')
export class User{
    @Column()
    userId!:number;

    @Column()
    userName!:string;

    @Column()
    emailId!:string;

    @Column()
    password!:string;
}