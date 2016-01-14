
function RoomsController() {
    this.roomsService_ = require('../../../services/rooms/rooms-service');
}

function get(req, res, next) {
    var roomInfos = this.roomsService_.getRoomInfos();
    var result = new Array();
    for(var roomInfo of roomInfos){
        result.push(roomInfo.view());
    }
    res.status(200).json(result);
}

RoomsController.prototype = {
  get: get
};

var roomsController = new RoomsController();

module.exports = roomsController;
