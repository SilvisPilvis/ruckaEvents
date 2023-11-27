import { redirect, json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const secret = import.meta.env.VITE_SECRET;

export async function load({cookies}) {

    if(!cookies.get('Authorization')){
        throw redirect(302, '/login');
    }
    const token = cookies.get('Authorization').split(" ")[1];
    if(token){
        if(jwt.verify(token, secret)){
            cookies.delete('Authorization');
            throw redirect(302, '/login');
            // return {message: "Esat veiksmīgi izlojogojušies!😊",};
        }
    }
}