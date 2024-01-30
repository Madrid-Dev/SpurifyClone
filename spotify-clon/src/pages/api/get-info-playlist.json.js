import { allPlaylists, songs as allSongs } from '../../lib/data'

export async function GET({ params, request}){
    //Get Id from the URL Params
    const { url } = request
    const urlObject = new URL(url)
    /*const [, queryString] = url.split("?") //Divides the URL, this is needed because the Url has that '?' symbol
                                           //We also cut the string on two parts cause of the split
                                           //And doing const _,queryString, we left the first one empty
                                           //Because we dont need it.
    const searchParams = new URLSearchParams()*/

    //By doing URL(request) we can have id from an easy way
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find((playlist) => playlist.id === id)
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: { "content-type": "application/json"},
    })
}