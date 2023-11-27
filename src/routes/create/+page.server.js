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
        
		// TODO log the user in
        const formData = await request.formData();
        const body = Object.fromEntries(formData);
        console.log(body);
        const uploadedFile = formData?.get('bgImage');
        console.log(uploadedFile);
        const name = crypto.randomUUID();
        const fileName = `./src/lib/images/${name}${extname(uploadedFile?.name)}`;
        await writeFile(fileName, Buffer.from(await uploadedFile?.arrayBuffer()));
        // await writeFile(fileName, uploadedFile);

        let mysqlconn = await mysqlConnection();
        try {
            let results = await mysqlconn
            .query(
                'INSERT INTO events(eventName, eventDescription, contactPhone, contactEmail, logo, color, bgImage) VALUES(?,?,?,?,?,?,?)',
                [body['eventName'], body['eventDescription'], body['contactPhone'], body['contactEmail'], body['muizaLogo'], '#8f9a50', `${name}${extname(uploadedFile?.name)}`],
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