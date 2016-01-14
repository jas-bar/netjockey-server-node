var SongQueue = require('./song_queue');

function Room(roomInfo){
    if(roomInfo === undefined){
        throw new Error("roomInfo is undefined");
    }
    this.queue = new SongQueue();
    this.info = roomInfo;
    this.timer = undefined;
    this.currentSongTime = 0;
}

function getQueue(){
    return this.queue;
}

function getInfo(){
    return this.info;
}

function resetTimer(){
    if(this.timer !== undefined){
        clearInterval(this.timer);
    }
    this.timer = undefined;
    this.currentSongTime = 0;
}

function tick(){
    if(!this.getQueue().isEmpty()){
        this.currentSongTime += 1;
        if(this.currentSongTime == this.queue.getFirst().getDuration()) {
            this.getQueue().removeFirst();
            this.currentSongTime = 0;
            //this.playFirst();
        }
    } else {
        resetTimer();
    }
}

function activate(){
    if(!this.getQueue().isEmpty()){
        this.currentSongTime = 0;
        var futureThis = this;
        this.timer = setInterval(function(){
            futureThis.tick();
        }, 1000);
    }
}

function isActive(){
    return (this.timer !== undefined);
}

function getCurrentSongTime(){
    return this.currentSongTime;
}

function view(){
    return {
        roomInfo: this.info.view(),
        currentSongTime: this.currentSongTime,
        queue: this.queue.view()
    };
}

Room.prototype = {
    getQueue: getQueue,
    getInfo: getInfo,
    tick: tick,
    activate: activate,
    resetTimer: resetTimer,
    isActive: isActive,
    getCurrentSongTime: getCurrentSongTime,
    view: view
};

module.exports = Room;
