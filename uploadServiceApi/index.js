import axios from "axios";
import fs from 'fs';
import FormData from 'form-data'
import {config}  from '../config/index.js'

const api = axios.create({
    baseURL: config.api.upload.url + "/upload",
    timeout: config.api.upload.timeout,
});

const imageToBuffer = (imageName) => {
    return fs.createReadStream(imageName)
}
const addTagsToRequest = (formDataBody, tags) => {
    tags.forEach((tag, index) => {
        formDataBody.append(`tags[${index}]`, tag)
    });
}

export const uploadImg = async (imageObj) => {
    try {
        const formDataBody = new FormData();
        formDataBody.append('image', imageToBuffer(`images/${imageObj.name}`));
        formDataBody.append('user[name][firstName]', "hadar");
        formDataBody.append('user[name][lastName]', "vaknin");
        formDataBody.append('user[genesisId]', "123");
        formDataBody.append('uploadedByFalcon', 'true');
        addTagsToRequest(formDataBody, imageObj?.tags);

        await api.post('/noAuth', formDataBody);
    } catch (error) {
        console.log(`Error while uploading image: ${JSON.stringify(imageObj)} to flacon. error: ${error}`)
    }

}
