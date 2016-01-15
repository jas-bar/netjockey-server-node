class Song
    constructor: (@duration, @title, @id, @thumbnailUrl) ->
        if not @duration?
            throw new Error "duration is undefined"
        if not @title?
            throw new Error "title is undefined"
        if not @id?
            throw new Error "id is undefined"
        if not @thumbnailUrl?
            throw new Error "thumbnailUrl is undefined"
        @uuid = "" + (new Date).getTime()

    getDuration: -> @duration
    getTitle: -> @title
    getId: -> @id
    getThumbnailUrl : -> @thumbnailUrl
    view: -> {
        duration: @duration,
        title: @title,
        id: @id,
        uuid: @uuid,
        thumbnailUrl: @thumbnailUrl
    }

module.exports = Song
