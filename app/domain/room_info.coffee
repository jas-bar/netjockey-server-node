class RoomInfo
    constructor: (id, @name) ->
        # make sure @id is string
        @id = ''+id
        if not @id?
            throw new Error "id is undefined"
    getId: -> @id
    getName: -> @name
    setName: (newName) ->
        @name = newName
    view: -> {
        id: @id,
        name: @name
    }

module.exports = RoomInfo
