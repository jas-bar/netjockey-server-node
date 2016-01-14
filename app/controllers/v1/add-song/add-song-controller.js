
function AddSongController() {
    this.songAdder = require('../../../services/rooms-song-switcher/rooms-song-add-service');
}

function post(req, res, next) {
    var result = this.songAdder.addToQueue(req.params.roomid, req.body.url);

    if(result.error === undefined) {
        res.status(200).json({status: "ok"});
    } else {
        res.status(400).json(result);
    }

}

AddSongController.prototype = {
  post: post
};

var addSongController = new AddSongController();

module.exports = addSongController;
