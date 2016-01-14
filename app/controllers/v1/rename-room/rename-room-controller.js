
function RenameRoomController() {
    this.roomEditor = require('../../../services/room-editor/room-editor-service');
}

function post(req, res, next) {
    var id = req.params.roomid;
    var newName = req.body.name;

    var result = this.roomEditor.rename(id, newName);
    if(result === undefined){
        res.status(400).json({status: "bad request"});
    } else {
        res.status(200).json({ status: 'ok' });
    }
}

RenameRoomController.prototype = {
  post: post
};

var renameRoomController = new RenameRoomController();

module.exports = renameRoomController;
