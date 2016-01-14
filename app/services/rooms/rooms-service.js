
function RoomsService() {
    this.roomsRepository_ = require('../../repositories/rooms/rooms-repository');
}

function getRoomInfos() {
    var roomsMap = this.roomsRepository_.getRoomsMap();

    var result = new Array();

    for(var room of roomsMap.values()) {
        result.push(room.getInfo());
    }
    return result;
}

function getRoom(id){
    var room = this.roomsRepository_.getRoom(id);
    return room;
}

function getRoomInfo(id) {
    var room = this.getRoom(id);
    if(!room){
        return undefined;
    } else {
        return room.getInfo();
    }
}

function getRoomQueue(id) {
    var room = this.getRoom(id);
    if(!room){
        return undefined;
    } else {
        return room.getQueue();
    }
}

function getRoomTime(id) {
    var room = this.getRoom(id);
    if(!room){
        return undefined;
    } else {
        return {
            currentSongTime: room.getCurrentSongTime()
        };
    }
}

RoomsService.prototype = {
  getRoomInfos: getRoomInfos,
  getRoomInfo: getRoomInfo,
  getRoom: getRoom,
  getRoomQueue: getRoomQueue,
  getRoomTime: getRoomTime
};

var roomsService = new RoomsService();

module.exports = roomsService;
