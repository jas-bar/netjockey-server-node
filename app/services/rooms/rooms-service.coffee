class RoomsService
    constructor: ->
        @roomsRepository_ = require '../../repositories/rooms/rooms-repository'
    getRoomInfos: ->
        roomsMap = @roomsRepository_.getRoomsMap()
        roomInfos = []
        roomsMap.forEach (room, key, map) ->
            roomInfos.push(room.getInfo())
        roomInfos
    getRoom: (id) ->
        @roomsRepository_.getRoom(id)
    getRoomInfo: (id) ->
        room = @getRoom(id)
        if room?
            room.getInfo()
        else
            undefined
    getRoomQueue: (id) ->
        room = @getRoom(id)
        if room?
            room.getQueue()
        else
            undefined
    getRoomTime: (id) ->
        room = @getRoom(id)
        if room?
            room.getCurrentSongTime()
        else
            return undefined

module.exports = new RoomsService()
