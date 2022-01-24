import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render () {
        // this.props === { songs: state.songs}
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// by convention this is called this name
const mapStateToProps = (state) => {
    // console.log(state)
    return {songs: state.songs};
}
// connect does the calling of dispatch
export default connect(mapStateToProps, {selectSong}) (SongList);
