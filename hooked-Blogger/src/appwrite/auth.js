import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
  try {
    // Optional: logout if already logged in
    try {
      await this.account.deleteSession('current');
    } catch (_) {
      // Ignore error if no session
    }

    // Now login fresh
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
}


    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
  try {
    // Always logout current session only to avoid issues
    await this.account.deleteSession('current');
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}

}

const authService = new AuthService();

export default authService;