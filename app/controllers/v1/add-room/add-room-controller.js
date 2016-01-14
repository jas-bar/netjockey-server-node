
function AddRoomController() {
    this.roomEditor = require('../../../services/room-editor/room-editor-service');
}

function post(req, res, next) {

    var newRoom = this.roomEditor.addRoom();

    res.status(200).json({ roomInfo: newRoom.getInfo().view() });
}

AddRoomController.prototype = {
  post: post
};

var addRoomController = new AddRoomController();

module.exports = addRoomController;
