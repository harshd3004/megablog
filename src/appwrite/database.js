import { Client, Account, ID, Query } from "appwrite";
import conf from "../config/conf";

export class DatabaseService{
    client = new Client();
    database;
    constructor(){
        this.client.setEndpoint(conf.appwriteURL);
        this.client.setProject(conf.appwriteProjectId);
        this.database = new Database(this.client);
    }

    async createPost({title, slug, content, featuredImage, status}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.error("Error getting post:", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.error("Error getting posts:", error);
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;