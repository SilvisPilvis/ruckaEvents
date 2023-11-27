import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { mysqlConnection } from "$lib/db/mysql";
import shajs from 'sha.js';

//maybe just hash username password + key and update on password reset
const secret = import.meta.env.VITE_SECRET;

export async function load({cookies}) {
    // console.log(cookies);
    // const user = cookies.get('Authorization');
    // cookies.delete('Authorization');
    if(!cookies.get('Authorization')){
        return {
            error: 'No token.',
        }
    }
    const token = cookies.get('Authorization').split(" ")[1];
    if(token){
        if(jwt.verify(token, secret)){
            throw redirect(302, '/create');
        }
    }

}

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const body = Object.fromEntries(formData);
        //check if in DB

        // console.log(body);
        if(body["username"] == '' || body["password"] == ''){
            console.log("failed");
            // return invalid(400);
        }

        if (body["username"] !== '' && body["password"] !== '') {
            let mysqlconn = await mysqlConnection();
            const [rows, fields] = await mysqlconn.execute('SELECT * FROM users WHERE username=?', [body["username"]]);
            // console.log(rows[0]);
            if(rows[0]['password'] !== shajs('sha256').update(body["password"]).digest('hex')){
                console.log("Passwords don't match");
                return {
                    error: 'Nepareizs lietotājvārds var parole.',
                };
            }

            let payload = {
                owner: rows[0]['id'], //ownerid here
                name: body["username"], //username name here
            }
            var token = jwt.sign(payload, secret, { expiresIn: '10h' });
            // // //insert token into DB
            cookies.set('Authorization', `Bearer: ${token}`);
            throw redirect(302, '/create');
            // return { success: true, token: token,};
            // console.log(signed);


        }
        return {
            error: 'Nepareizs lietotājvārds var parole.',
        };
    },
}
