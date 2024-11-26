import { appendFile } from "node:fs";
 
export const fileLogger = (str='')=>{
    appendFile("logfile.txt", str)
}