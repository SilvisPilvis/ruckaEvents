import { mysqlConnection } from "$lib/db/mysql";
import { writeFile } from "fs/promises";
import { extname } from "path";
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const secret = import.meta.env.VITE_SECRET;

export async function load({cookies}) {

    if(!cookies.get('Authorization')){
        throw redirect(302, '/login');
    }

    const token = cookies.get('Authorization').split(" ")[1];
    if(!jwt.verify(token, secret)){
        throw redirect(302, '/login');
    }

}

export const actions = {
	default: async ({request, cookies}) => {

        if(!cookies.get('Authorization')){
            throw redirect(302, '/login');
        }
    
        const token = cookies.get('Authorization').split(" ")[1];
        if(!jwt.verify(token, secret)){
            throw redirect(302, '/login');
        }
        
        const formData = await request.formData();
        const body = Object.fromEntries(formData);
        // console.log(body);
        // console.log(body['startTime'], Date.parse(body['startDate']));
        // console.log(body['startDate']);
        const uploadedFile = formData?.get('bgImage');
        // console.log(uploadedFile['size']);
        const name = crypto.randomUUID();
        const fileName = `./src/lib/images/${name}${extname(uploadedFile?.name)}`;
        if(uploadedFile['size'] != 0){
            // console.log('big.');
            await writeFile(fileName, Buffer.from(await uploadedFile?.arrayBuffer()));
        }

        let mysqlconn = await mysqlConnection();
        try {
            let results = await mysqlconn
            .query(
                'INSERT INTO events(eventName, eventDescription, contactPhone, contactEmail, logo, color, bgImage, startTime, startDate) VALUES(?,?,?,?,?,?,?,?,?)',
                [body['eventName'], body['eventDescription'], body['contactPhone'], body['contactEmail'], body['muizaLogo'], '#8f9a50', `${name}${extname(uploadedFile?.name)}`, body['startTime'], body['startDate']],
                // function(err, results, fields) {
                //     console.log(results); // results contains rows returned by server
                //     console.log(fields); // fields contains extra meta data about results, if available
                // }
            );
            return "Success!";
        } catch (error) {
            console.error("Got an error!!!");
            console.log(error);
            return error;
        }
	}
};