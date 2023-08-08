import fs from 'fs'


export function writeErrorToFile(error) {
    const errorMessage = `${new Date().toISOString()} - ${error.stack}\n`;
    try {
      fs.appendFileSync('error.log', errorMessage);
    } catch (error) {
      console.error(`Error writing to file: ${error.message}`);
    }
  }
