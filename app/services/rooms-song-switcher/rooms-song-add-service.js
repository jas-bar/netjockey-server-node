var getYTVideoInfo = require('youtube-info');
var Song = require('../../domain/song');

function RoomsSongAddService() {
    this.roomsRepository_ = require('../../repositories/rooms/rooms-repository');
}

var youtubeRegex = /\?v=(.{11})/;

function _queueAdd(videoInfo, roomId){
    var room = this.roomsRepository_.getRoom(roomId);
    var song = new Song(videoInfo.duration, videoInfo.title, videoInfo.videoId, videoInfo.thumbnailUrl);
    var wasActive = (room.isActive());
    room.getQueue().add(song);
    if(!wasActive) {
        room.activate();
    }
}

function addToQueue(roomId, url){
    var room = this.roomsRepository_.getRoom(roomId);
    if(room === undefined){
        return {"error": "Room not found"};
    }
    if(url == undefined){
        return {"error": "No URL specified"};
    }
    var array = youtubeRegex.exec(url);
    if(!array) {
        return {"error": "Malformed or unsupported url detected"};
    }

    var videoId = array[array.length-1];

    if(!videoId) {
        return {"error": "Malformed or unsupported url detected"};
    }

    //var queueCallback = this._queueAdd;
    var that = this;
    getYTVideoInfo(videoId).then(function (videoInfo){
        if(videoInfo) {
            that._queueAdd(videoInfo, roomId);
        }
    });

    return true;
}

RoomsSongAddService.prototype = {
    addToQueue : addToQueue,
    _queueAdd : _queueAdd
};

var roomsSongAddService = new RoomsSongAddService();

module.exports = roomsSongAddService;
