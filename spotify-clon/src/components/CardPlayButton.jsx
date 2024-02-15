import { Pause, Play } from './Player'
import { usePlayerStore } from '../store/playerStore'

export function CardPlayButton({id, size = 'small'}){
const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
      } = usePlayerStore(state => state)


      
const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
      
const handleClick = () => {
    if (isPlayingPlaylist){
        setIsPlaying(false)
        return
    }
    /*setCurrentMusic({ //Asking for the playlist with this ID I got here
        playlist: {
            id
        }
    })*/                //Instead of this code, I'm gonna ask the API to load the info I need

    fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())            //Fetch is waiting for a promise, to resolve this I do "then"
        .then(data => {
            const { songs, playlist } = data

            setIsPlaying(true)
            setCurrentMusic({ songs, playlist, song: songs[0] })

            console.log(songs,playlist)
        })
    setIsPlaying(!isPlaying)
}

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'


    return (
    <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
        {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
    )

}
