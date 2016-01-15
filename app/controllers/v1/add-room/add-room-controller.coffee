class AddRoomController
    constructor: ->
        @roomEditor = require('../../../services/room-editor/room-editor-service');
    post: (req, res, next) ->
        newRoom = @roomEditor.addRoom()
        res.status(200).json({roomInfo : newRoom.getInfo().view()})


module.exports = new AddRoomController()
