import SongItem from "./SongItem";

function SongList({songs, deleteList}) {

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
        <div className="list-body">
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
            <button className="delete-button" onClick={deleteList}>Delete all</button>
        </div>
        
     );
}
 
export default SongList;