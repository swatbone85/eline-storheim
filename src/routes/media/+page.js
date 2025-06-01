export async function load({ fetch }) {

    const res = await fetch('/images/media/media.json');
    if (!res.ok) {
        return {
            media: []
        };
    }
    const data = await res.json();
    return {
        media: data
    };
}