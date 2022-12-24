import React, { Component } from "react"
import InputForm from "./InputForm"

class SongInput extends Component {
    constructor() {
        super()
        this.state = {
            title: " ",
            artist: " ",
            genre: " ",
            rating: " ",
        }
        this.onChange = this.onChange.bind(this)
        this.addSong = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState( {
            [event.target.name] : event.target.value
        })
    }
    
    onSubmit(event) {
        event.preventDefault()
        this.props.addSong(this.state)
        this.setState({
            title: " ",
            artist: " ",
            genre: " ",
            rating: " "
        })
    }

    render() { 
        return ( 
            <InputForm 
                onSubmit = {this.onSubmit}
                onChange = {this.onChange}
                title = {this.state.title}
                artist = {this.state.artist}
                genre = {this.state.genre}
                rating = {this.state.rating}
            />
        );
    }
}
 
export default SongInput;