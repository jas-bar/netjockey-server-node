var Room = require('../../domain/room');
var RoomInfo = require('../../domain/room_info');


function RoomEditorService() {
    this.roomsRepository_ = require('../../repositories/rooms/rooms-repository');
}

function addRoom(){
    var id = new Date().getTime();
    var roomInfo = new RoomInfo(id, "name");
    var room = new Room(roomInfo);

    this.roomsRepository_.addRoom(room);

    return room;
}

function rename(id, newName){
    var room = this.roomsRepository_.getRoom(id);
    if(room == undefined){
        return undefined;
    }
    room.getInfo().setName(newName);
    return room;
}

RoomEditorService.prototype = {
    addRoom: addRoom,
    rename: rename
};

var roomEditorService = new RoomEditorService();

module.exports = roomEditorService;
