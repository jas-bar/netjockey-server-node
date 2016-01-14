function Song(duration, title, id, thumbnailUrl){
    if(duration === undefined){
        throw new Error("duration is undefined");
    }

    if(title === undefined){
        throw new Error("title is undefined");
    }

    if(id === undefined){
        throw new Error("id is undefined");
    }

    if(thumbnailUrl === undefined){
        throw new Error("thumbnailUrl is undefined");
    }

    this.duration = duration;
    this.title = title;
    this.id = id;
    this.thumbnailUrl = thumbnailUrl;
    this.uuid = ''+(new Date().getTime());
}

function getDuration(){
    return this.duration;
}

function getTitle(){
    return this.title;
}

function getId(){
    return this.id;
}

function getThumbnailUrl(){
    return this.thumbnailUrl;
}

function view(){
    return {
        duration: this.duration,
        title: this.title,
        id: this.id,
        thumbnailUrl: this.thumbnailUrl,
        uuid: this.uuid
    };
}

Song.prototype = {
    getDuration: getDuration,
    getTitle: getTitle,
    getId: getId,
    getThumbnailUrl: getThumbnailUrl,
    view: view
};

module.exports = Song;
