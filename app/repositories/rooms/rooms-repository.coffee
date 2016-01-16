Room = require '../../domain/room'
RoomInfo = require '../../domain/room_info'

rooms = undefined

class RoomsRepository
    constructor: ->
        @getRoomsMap()
        that = @
        @roomChecker = setInterval ->
            that._checkRooms()
        , 1000 * 60 * 5
    _checkRooms: ->
        @getRoomsMap().forEach (value, key, map)->
            if value.isDestroyed()
                map.delete(key)

    getRoomsMap: ->
        if not rooms?
            rooms = new Map()
        rooms
    getRoom: (id) ->
        room = @getRoomsMap().get(id)
        if room.isDestroyed()
            @getRoomsMap.delete(room)
            undefined
        else
            room
    addRoom: (room) ->
        @getRoomsMap().set(room.getInfo().getId(), room)

@repo = new RoomsRepository()

module.exports = @repo
