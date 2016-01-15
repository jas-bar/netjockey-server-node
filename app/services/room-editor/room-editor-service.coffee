Room = require '../../domain/room'
RoomInfo = require '../../domain/room_info'

class RoomEditorService
    constructor: ->
        @roomsRepository_ = require '../../repositories/rooms/rooms-repository'
    addRoom: ->
        id = new Date().getTime()
        roomInfo = new RoomInfo(id, "room")
        room = new Room(roomInfo)
        @roomsRepository_.addRoom(room)
        room

    rename: (id, newName) ->
        room = @roomsRepository_.getRoom(id)
        if room?
            room.getInfo().setName(newName)
            room
        else
            undefined

module.exports = new RoomEditorService()
