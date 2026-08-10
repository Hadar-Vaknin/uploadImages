import * as dotenv from 'dotenv' 
dotenv.config()

export const config = {
    api: {
        upload: {
            url: "http://localhost:4040",
            timeout: 1000 * 20,
        }
    }
}
