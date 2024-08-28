import fs from "fs";
import os from "os";

export const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const ip = req.ip || req.connection.remoteAddress;
    const hostname = os.hostname();  

    const logMessage = `[ ${ip} - ${timestamp}]  ${method}  -${url}  - Host: ${hostname}\n`;
    console.log(logMessage);

    fs.appendFile("requestLog.log", logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    next();
};
