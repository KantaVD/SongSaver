import React, { Component } from "react";
import SongInput from "./SongInput";
import SongList from "./SongList";

class SongContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [
                {id:1, title: "U R my no.1", artist: "Myself", genre:"Imaginairy", rating:"5"},
                {id:2, title: "U R my no.2", artist: "Myself", genre:"Imaginairy", rating:"5"},
                {id:3, title: "U R my no.3", artist: "Myself", genre:"Imaginairy", rating:"5"},
                {id:4, title: "U R my no.4", artist: "Myself", genre:"Imaginairy", rating:"5"},
                {id:5, title: "U R my no.5", artist: "Myself", genre:"Imaginairy", rating:"5"}
            ]
        }
        this.addSong = this.addSong.bind(this)
    }

    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length +1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        this.setState({songs: this.state.songs.concat(newSong)})
    }
    
    render() { 
        return ( 
            <div className="container">
                <SongInput />
                <SongList 
                    songs ={this.state.songs}
                    addSong = {this.addSong}
                />
            </div>
        );
    }
}
 
export default SongContainer ;