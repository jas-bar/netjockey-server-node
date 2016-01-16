SongQueue = require './song_queue'

class Room
    constructor: (@info) ->
        if not @info?
            throw new Error "roomInfo is undefined"
        @queue = new SongQueue()
        @timer = undefined
        @currentSongTime = 0
        @destroyTimer = undefined
        @destroyed = false
    getInfo: -> @info
    getQueue: -> @queue
    getCurrentSongTime: -> @currentSongTime
    isDestroyed: ->
        @destroyed
    resetTimer: ->
        clearInterval @timer if @timer?
        @timer = undefined
        @currentSongTime = 0
        that = @
        @destroyTimer = setTimeout ->
            if that.getQueue().isEmpty()
                that.destroyed = true
            undefined
        , (1000 * 60 * 10)

    tick: ->
        if @queue.isEmpty()
            @resetTimer()
        else
            @currentSongTime += 1
            first = @queue.getFirst()
            if first? and first.getDuration() == @currentSongTime
                @queue.removeFirst()
                @currentSongTime = 0
                undefined
    activate: ->
        if not @queue.isEmpty()
            @currentSongTime = 0
            clearTimeout @destroyTimer if @destroyTimer?
            that = @
            @timer = setInterval ->
              that.tick()
              undefined
            , 1000
            undefined
        else undefined
    isActive: ->
        @timer?
    view: -> {
        roomInfo: @info.view(),
        currentSongTime: @currentSongTime,
        queue: @queue.view()
    }

module.exports = Room
