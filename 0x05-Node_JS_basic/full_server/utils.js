import { promises as fs } from "fs";

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const dataArray = data.trim().split('\n').slice(1);

        const fieldDict = {};
        for (const line of dataArray) {
          const lineArray = line.split(',');
          const field = lineArray[lineArray.length - 1];

          if (!fieldDict[field]) {
            fieldDict[field] = [];
          }

          fieldDict[field].push(lineArray[0]);
        }
        return fieldDict;
    } catch {
        throw new Error('Cannot load the database');
    }
}
export default readDatabase;