import fs from 'fs/promises';
import { uploadImg } from './uploadServiceApi/index.js';

const readJsonFile = async (jsonPath) => {
    const rawData = await fs.readFile(jsonPath, 'utf8');
    const documents = JSON.parse(rawData);
    return documents?.images;

}

const removeDuplicatesFromObjectsArray = (array) => {
    try {
        return Array.from(new Set(array.map(obj => JSON.stringify(obj))))
        .map(str => JSON.parse(str));
    } catch (error) {
        console.error(`Error occured while saving documents to json file. error: ${error}`);
    }
}

const main = async () => {
    const scannedImages1 = await readJsonFile("1.json");
    const scannedImages2 = await readJsonFile("2.json");
    const allImages = removeDuplicatesFromObjectsArray([...scannedImages1, ...scannedImages2]);
    console.log(allImages.length)
    for (const image of scannedImages) {
        await uploadImg(image, "images/")
    }
}

main()

