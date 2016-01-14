
function GetRoomInfoController() {
    this.roomsService_ = require('../../../services/rooms/rooms-service');
}

function get(req, res, next) {
    var roomInfo = this.roomsService_.getRoomInfo(req.params.roomid);
    if(!roomInfo){
        res.status(404).json({"error": "Room not found"});
    } else {
        res.status(200).json(roomInfo.view());
    }
}

GetRoomInfoController.prototype = {
  get: get
};

var getRoomInfoController = new GetRoomInfoController();

module.exports = getRoomInfoController;
