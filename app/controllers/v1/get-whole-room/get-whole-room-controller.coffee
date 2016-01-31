class GetWholeRoomController
    constructor: ->
        @roomsService_ = require '../../../services/rooms/rooms-service'
    get: (req, res, next)->
        room = @roomsService_.getRoom(req.params.roomid)
        if room?
            if req.query.maxResults?
                res.status(200).json(room.viewMax(req.query.maxResults))
            else
                res.status(200).json(room.view())
        else
            res.status(404).json({error: "Room not found"})

module.exports = new GetWholeRoomController()
