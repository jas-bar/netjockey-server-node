class GetRoomTimeController
    constructor: ->
        @roomsService_ = require '../../../services/rooms/rooms-service'

    get: (req, res, next) ->
        time = @roomsService_.getRoomTime(req.params.roomid)
        if time?
            res.status(200).send({currentSongTime: time})
        else
            res.status(404).json({error: "Room not found"})

module.exports = new GetRoomTimeController()
