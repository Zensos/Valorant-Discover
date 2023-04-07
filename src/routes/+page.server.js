import { api } from '$lib/API';

/** @type {import('./$types').PageLoad} */
export async function load({ setHeaders }) {
    setHeaders({
        "cache-control": "max-age=30",
    });
    return api.get("/match/upcoming").then(res => res.data.data)
}