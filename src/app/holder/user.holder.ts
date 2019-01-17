import { IUser } from '../interfaces/IUser';

export class UserHolder {

    private constructor(){}

    private static userHolder:UserHolder;
    private user:IUser;

    public static getInstance():UserHolder{
        if (this.userHolder === undefined) {
                this.userHolder = new UserHolder;
        }
        return this.userHolder;
    }

    getUser():IUser{
        return this.user;
    }

    setUser(user:IUser){
        this.user = user;
    }
}