Room = require '../../domain/room'
RoomInfo = require '../../domain/room_info'

rooms = undefined

class RoomsRepository
    constructor: ->
        @getRoomsMap()
    getRoomsMap: ->
        if not rooms?
            rooms = new Map()
        rooms
    getRoom: (id) ->
        @getRoomsMap().get(id)
    addRoom: (room) ->
        @getRoomsMap().set(room.getInfo().getId(), room)

@repo = new RoomsRepository()

module.exports = @repo
