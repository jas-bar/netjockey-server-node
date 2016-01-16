Room = require '../../domain/room'
RoomInfo = require '../../domain/room_info'

rooms = undefined

class RoomsRepository
    constructor: ->
        @getRoomsMap()

    _onDestroy: (room)->
        if room?
            rooms.delete(room.getInfo().getId())

    getRoomsMap: ->
        if not rooms?
            rooms = new Map()
        rooms
    getRoom: (id) ->
        @getRoomsMap().get(id)

    addRoom: (room) ->
        that = @
        room.onDestroy = (room)->
            that._onDestroy(room)
        @getRoomsMap().set(room.getInfo().getId(), room)

@repo = new RoomsRepository()

module.exports = @repo
