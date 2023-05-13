import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function listAll() {
  
  return new Promise((resolve, reject) => {
    const dataPath = path.join(__dirname, '../data/data.json');
    //console.log(dataPath);
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataJson = JSON.parse(data);
       // console.log(dataJson);
        resolve(dataJson);
      }
    });
  });
}