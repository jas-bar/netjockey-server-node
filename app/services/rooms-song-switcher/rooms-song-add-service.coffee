getYTVideoInfo = require 'youtube-info'
Song = require '../../domain/song'

youtubeRegex = /\?v=(.{11})/

class RoomsSongAddService
    constructor: ->
        @roomsRepository_ = require '../../repositories/rooms/rooms-repository'
    _queueAdd: (videoInfo, roomId)->
        room = @roomsRepository_.getRoom(roomId)
        song = new Song(videoInfo.duration, videoInfo.title, videoInfo.videoId, videoInfo.thumbnailUrl)
        wasActive = room.isActive()
        room.getQueue().add(song)
        if not wasActive
            room.activate()
    addToQueue: (roomId, url) ->
        room = @roomsRepository_.getRoom(roomId)
        if room?
            if url?
                array = youtubeRegex.exec(url)
                if array?
                    videoId = array[array.length - 1]
                    if videoId?
                        that = this
                        getYTVideoInfo(videoId).then((videoInfo) ->
                            if videoInfo?
                                that._queueAdd(videoInfo, roomId)
                        )
                        {status: "ok"}
                    else
                        {error: "Malformed or unsupported url detected"}
                else
                    {error: "Malformed or unsupported url detected"}
            else
                {error: "No URL specified"}
        else
            {error: "Room not found"}

module.exports = new RoomsSongAddService()
