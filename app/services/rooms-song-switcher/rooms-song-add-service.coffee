getYTVideoInfo = require 'youtube-info'
Song = require '../../domain/song'
Youtube = require '../../domain/youtube/youtube'

youtubeRegex = /\?v=(.{11})/

class RoomsSongAddService
    constructor: ->
        @roomsRepository_ = require '../../repositories/rooms/rooms-repository'
    _queueAdd: (song, room)->
        wasActive = room.isActive()
        room.getQueue().add(song)
        if not wasActive
            room.activate()
    addToQueue: (roomId, url) ->
        room = @roomsRepository_.getRoom(roomId)
        if room?
            that = this
            Youtube.songFromUrl((song) ->
                    if song?
                        that._queueAdd(song, room)
            ,url)
            {status: "ok"}
        else
            {error: "Room not found"}

module.exports = new RoomsSongAddService()
