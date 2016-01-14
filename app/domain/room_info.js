function RoomInfo(id, name){
    if(id === undefined ){
        throw new Error("id is undefined");
    }
    this.id = ''+id;
    this.name = name;
}

function getId(){
    return this.id;
}

function getName(){
    return this.name;
}

function setName(newName){
    this.name = newName;
}

function view(){
    return {
        id: this.id,
        name: this.name
    };
}

RoomInfo.prototype = {
    getId: getId,
    getName: getName,
    setName: setName,
    view: view
};

module.exports = RoomInfo;
