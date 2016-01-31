class SongQueue
    constructor: ->
        @playlist = []
    getPlaylist: -> @playlist
    add: (song) -> @playlist.push song
    getFirst: -> @playlist[0]
    removeFirst: -> @playlist.shift()
    isEmpty: -> @playlist.length == 0
    view: -> {
        playlist: (song.view() for song in @playlist)
    }
    viewMax: (max)->
        playlist = []
        for song in @playlist
            playlist.push(song.view())
        if playlist.length > max
            playlist = playlist.slice(0, max)
        {
            playlist: playlist
        }

module.exports = SongQueue;
