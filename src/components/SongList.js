import SongItem from "./SongItem";

function SongList({songs}) {

    const musicList = songs.map(song => (
        <SongItem 
            key = {song.id}
            id = {song.id}
            title = {song.title}
            artist = {song.artist}
            genre = {song.genre}
            rating = {song.rating} 
        />
    ))
    
    return ( 
        <div className="song-list">
            <table className="table">
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Artist </th>
                        <th> Genre </th>
                        <th> Rating </th>
                    </tr>
                </thead>
                <tbody>
                    {musicList}
                </tbody>
            </table>
        </div>
     );
}
 
export default SongList;