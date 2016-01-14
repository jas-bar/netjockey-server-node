
function GetWholeRoomController() {
    this.roomsService_ = require('../../../services/rooms/rooms-service');
}

function get(req, res, next) {
    var room = this.roomsService_.getRoom(req.params.roomid);
    if(!room){
        res.status(404).json({"error": "Room not found"});
    } else {
        res.status(200).json(room.view());
    }
}

GetWholeRoomController.prototype = {
  get: get
};

var getWholeRoomController = new GetWholeRoomController();

module.exports = getWholeRoomController;
