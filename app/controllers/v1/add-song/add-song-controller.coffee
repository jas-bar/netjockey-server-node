class AddSongController
    constructor: ->
        @songAdder = require '../../../services/rooms-song-switcher/rooms-song-add-service'
    post: (req, res, next) ->
        result = @songAdder.addToQueue req.params.roomid, req.body.url
        if result.error?
            res.status(400).json(result)
        else
            res.status(200).json({status: "ok"})

module.exports = new AddSongController()
