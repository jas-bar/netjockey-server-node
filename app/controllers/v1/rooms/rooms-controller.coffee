class RoomsController
    constructor: ->
        @roomsService_ = require '../../../services/rooms/rooms-service'
    get: (req, res, next) ->
        roomInfos = @roomsService_.getRoomInfos()
        result = (roomInfo.view() for roomInfo in roomInfos)
        res.status(200).json({rooms: result})

module.exports = new RoomsController()
