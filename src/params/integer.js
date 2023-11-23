import { error } from '@sveltejs/kit';
/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    if (/^\d+$/.test(param)){
        return /^\d+$/.test(param);
    }else{
        // throw error(404, 'Not found😥');
        return error(404, 'Not found😥');
    }
}