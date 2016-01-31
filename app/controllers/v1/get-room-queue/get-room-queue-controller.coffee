class GetRoomQueueController
    constructor: ->
        @roomsService_ = require '../../../services/rooms/rooms-service'

    get: (req, res, next) ->
        queue = @roomsService_.getRoomQueue(req.params.roomid)
        if queue?
            if req.query.maxResults?
                res.status(200).json(queue.viewMax(req.query.maxResults))
            else
                res.status(200).json(queue.view())
        else
            res.status(404).json({error: "Room not found"})

module.exports = new GetRoomQueueController()
