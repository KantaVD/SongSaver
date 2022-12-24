const InputForm = ({onChange, onSubmit, title, artist, genre, rating}) => {
    return ( 
        <div className="song-input">
                <h3> Add a new song to the list</h3>
                <form className="input-form" onSubmit={onSubmit}>
                    <input
                        type = "text"
                        placeholder = "Type title here..."
                        value = {title}
                        name = "title"
                        className = "input"
                        onChange = {onChange}
                        />
                    <input
                        type = "text"
                        value = {artist}
                        name = "artist"
                        placeholder = "Type artist here..."
                        className = "input"
                        onChange = {onChange}
                        />
                    <select
                        value = {genre}
                        name = "genre"
                        className = "input"
                        onChange = {onChange}
                        >
                        <option value= "choose"> Choose genre </option>
                        <option value= "Pop"> Pop </option>
                        <option value= "Rock"> Rock </option>
                        <option value= "R&B"> R&B </option>
                        <option value= "Other"> Other </option>
                    </select>
                    <input
                        type = "number"
                        value = {rating}
                        name = "rating"
                        min = "1"
                        max = "5"
                        placeholder= "1-5"
                        className = "input"
                        onChange = {onChange}
                        />
                    <button className="add-song" type= "submit"> Add new song</button>
                </form>
            </div>
    );
}
 
export default InputForm;