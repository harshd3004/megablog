import { Client, Account, ID, Query } from "appwrite";
import conf from "../config/conf";

export class StorageService{
    client = new Client();
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL);
        this.client.setProject(conf.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    async deleteFile(fileId){
        try { 
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const storageService = new StorageService();
export default storageService;