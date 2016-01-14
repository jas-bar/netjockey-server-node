
function GetRoomQueueController() {
    this.roomsService_ = require('../../../services/rooms/rooms-service');
}

function get(req, res, next) {
    var queue = this.roomsService_.getRoomQueue(req.params.roomid);
    if(!queue){
        res.status(404).json({"error": "Room not found"});
    } else {
        res.status(200).json(queue.view());
    }
}

GetRoomQueueController.prototype = {
  get: get
};

var getRoomQueueController = new GetRoomQueueController();

module.exports = getRoomQueueController;
