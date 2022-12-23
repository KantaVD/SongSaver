import React, { Component } from "react"

class SongInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: " ",
            artist: " ",
            genre: " ",
            rating: " "
        }
        this.onChange = this.onChange.bind(this)
        this.addSong = this.addSong.bind(this)
    }

    onChange({name, value}) {
        this.setState( {
            [name]: value
        })
        console.log(this.state)
    }

    
    
    onSubmit(event) {
        event.preventDefault()
            this.props.addSong(this.state)
            this.setState({
                title: " ",
                artist: " ",
                genre: " ",
                rating: " ",
        })
    }

    render() { 
        return ( 
            <div className="song-input">
                <h3> Add a new song to the list</h3>
                <form className="input-form" onSubmit={this.onSubmit}>
                    <input
                        type = "text"
                        value = {this.state.title}
                        name = "title"
                        placeholder = "Type title here..."
                        className = "input"
                        onChange = {this.onChange}
                        />
                    <input
                        type = "text"
                        value = {this.state.artist}
                        name = "artist"
                        placeholder = "Type artist here..."
                        className = "input"
                        onChange = {this.onChange}
                        />
                    <select
                        value = {this.state.genre}
                        name = "genre"
                        className = "input"
                        onChange = {this.onChange}
                        >
                        <option value= "choose"> Choose genre </option>
                        <option value= "Pop"> Pop </option>
                        <option value= "Rock"> Rock </option>
                        <option value= "R&B"> R&B </option>
                        <option value= "Other"> Other </option>
                    </select>
                    <input
                        type = "number"
                        value = {this.state.rating}
                        name = "rating"
                        min = "1"
                        max = "5"
                        placeholder= "1-5"
                        className = "input"
                        onChange = {this.onChange}
                        />
                    <button className="add-song" type= "submit"> Add new song</button>
                </form>
            </div>
        );
    }
}
 
export default SongInput;