import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteURL);
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async register(email, password){
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(), 
                email, 
                password
            });
            if(userAccount){
                return this.login(email, password);
            }
        }catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login(email, password){
        try {
            const session = await this.account.createEmailPasswordSession({
                email, 
                password
            });
            return session;
        }catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get();
            return user;
        }catch (error) {
            console.log(error);
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSession("current");
        }catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;