class RenameRoomController
    constructor: ->
        @roomEditor = require '../../../services/room-editor/room-editor-service'

    post: (req, res, next) ->
        id = req.params.roomid
        newName = req.body.name

        result = @roomEditor.rename(id, newName)
        if result?
            res.status(200).json({status: 'ok'})
        else
            res.status(400).json({status: "bad request"})

module.exports = new RenameRoomController()
