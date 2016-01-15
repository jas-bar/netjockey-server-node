class GetRoomInfoController
    constructor: ->
        @roomsService = require '../../../services/rooms/rooms-service'

    get: (req,res,next)->
        roomInfo = @roomsService.getRoomInfo(req.params.roomid)
        if roomInfo?
            res.status(200).json(roomInfo.view())
        else
            res.status(404).json({"error": "Room not found"})

module.exports = new GetRoomInfoController();
