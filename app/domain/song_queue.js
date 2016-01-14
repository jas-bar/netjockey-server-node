function SongQueue(){
    this.playlist = new Array();
}

function getPlaylist(){
    return this.playlist;
}

function add(song){
    this.playlist.push(song);
}

function getFirst(){
    return this.playlist[0];
}

function removeFirst(){
    return this.playlist.shift();
}

function isEmpty(){
    return (this.playlist.length == 0);
}

function view(){
    var pl = new Array();
    for(var song of this.playlist){
        pl.push(song.view());
    }

    return {
        playlist: pl
    };
}

SongQueue.prototype = {
    getPlaylist: getPlaylist,
    add: add,
    isEmpty: isEmpty,
    getFirst: getFirst,
    removeFirst: removeFirst,
    view: view
};

module.exports = SongQueue;
