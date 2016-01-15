SongQueue = require './song_queue'

class Room
    constructor: (@info) ->
        if not @info?
            throw new Error "roomInfo is undefined"
        @queue = new SongQueue
        @timer = undefined
        @currentSongTime = 0
    getInfo: -> @info
    getQueue: -> @queue
    getCurrentSongTime: -> @currentSongTime
    resetTimer: ->
        clearInterval @timer if @timer?
        @timer = undefined
        @currentSongTime = 0
    tick: ->
        if @queue.isEmpty()
            @resetTimer
        else
            @currentSongTime += 1
            if @queue.getFirst().getDuration() is @currentSongTime
                @queue.removeFirst()
                @currentSongTime = 0
    activate: ->
        if not @queue.isEmpty()
            @currentSongTime = 0
            @timer = setInterval ->
              @tick()
            , 1000
            null
        else undefined
    isActive: ->
        @timer?
    view: -> {
        roomInfo: @info.view(),
        currentSongTime: @currentSongTime,
        queue: @queue.view()
    }

module.exports = Room
