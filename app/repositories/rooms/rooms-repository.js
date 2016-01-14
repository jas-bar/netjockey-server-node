var Room = require('../../domain/room');
var RoomInfo = require('../../domain/room_info');

var rooms_;

function RoomsRepository() {
    getRoomsMap();
}

function getRoomsMap() {
    if(!rooms_){
        rooms_ = new Map();
        rooms_.set("a", new Room(new RoomInfo("a","gachiGASM")));
    }
    return rooms_;
}

function getRoom(id){
    return this.getRoomsMap().get(id);
}

function addRoom(room){
    this.getRoomsMap().set(room.getInfo().getId(), room);
    console.log(rooms_);
}

RoomsRepository.prototype = {
    getRoomsMap: getRoomsMap,
    getRoom : getRoom,
    addRoom : addRoom
};

var roomsRepository = new RoomsRepository();

module.exports = roomsRepository;
