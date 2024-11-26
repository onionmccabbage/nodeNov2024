import pino from "pino"; // remember to npm install (from package.json)
import { fileLogger } from "./log_writer.js";
export const fetchPhotos = async (id='')=>{ // we may specify default values for arguments
    const logger = pino();
    const APIUrl = 'https://jsonplaceholder.typicode.com/photos'
    try{// use the id as an argument in the URL
        const response = await fetch(`${APIUrl}/${id}`) // GET by default
        if (response['status']==200){
            return response.json() // wait for the JSON to be extracted from the response object
        }
    }
    catch(err){
        logger.error(err)
        fileLogger(err)// we might prefer to log this to a file
    }
    finally {

    }
}