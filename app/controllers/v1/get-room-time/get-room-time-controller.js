
function GetRoomTimeController() {
    this.roomsService_ = require('../../../services/rooms/rooms-service');
}

function get(req, res, next) {
    var time = this.roomsService_.getRoomTime(req.params.roomid);
    if(!time){
        res.status(404).json({"error": "Room not found"});
    } else {
        res.status(200).send(time);
    }
}

GetRoomTimeController.prototype = {
  get: get
};

var getRoomTimeController = new GetRoomTimeController();

module.exports = getRoomTimeController;
