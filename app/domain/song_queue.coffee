class SongQueue
    constructor: ->
        @playlist = []
    getPlaylist: -> @playlist
    add: (song) -> @playlist.push song
    getFirst: -> @playlist[0]
    removeFirst -> @playlist.shift()
    isEmpty: -> @playlist.legth is 0
    view: -> {
        playlist: [song.view()] for song in @playlist
    }

module.exports = SongQueue;
