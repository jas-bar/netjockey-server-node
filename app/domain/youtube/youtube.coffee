youtubeGet = require 'youtube-get'
Song = require '../song'
moment = require 'moment'

youtubeRegex = /\?v=(.{11})/

apiKey = 'AIzaSyDxJwk3B-SVXot_r1E2Ys3RbFN_D3ygOcw'
ytApi = youtubeGet(apiKey)

class Youtube

    songFromUrl: (callback, url)->
        array = youtubeRegex.exec(url)
        if array?
            videoId = array[array.length - 1]
            if videoId?
                ytApi("videos", {
                    'id': videoId
                    'part': 'id, snippet, contentDetails'
                }, (err, data) ->
                    item = data['items'][0]
                    duration = moment.duration(item['contentDetails']['duration']).asSeconds()
                    title = item['snippet']['title']
                    videoId = item['id']
                    thumbnailUrl = item['snippet']['thumbnails']['default']['url']
                    song = new Song(duration, title, videoId, thumbnailUrl)
                    callback(song)
                )
                {status: "ok"}
            else
                callback(undefined)

module.exports = new Youtube()
