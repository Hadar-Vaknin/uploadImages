import fs from 'fs/promises';
import { uploadImg } from './uploadServiceApi/index.js';

const readJsonFile = async () => {
    const rawData = await fs.readFile('documents.json', 'utf8');
    const documents = JSON.parse(rawData);
    return documents?.images;

}

const main = async () => {
    const scannedImages = await readJsonFile();

    for (const image of scannedImages) {
        await uploadImg(image)
    }
}

main()

