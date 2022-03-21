var status = 'none'
var audio = document.createElement('audio')

audio.setAttribute('src', 'suara air hujan 1.mp3')
audio.setAttribute('loop', 'true')

  function audio_control() {
    switch (status) {
      case 'none':
        audio.play()
        audio.volume = 0.5
        status = 'low'
        break
      case 'low':
        audio.volume = 0.75
        status = 'mid low'
        break
      case 'mid low':
        audio.volume = 1
        status = 'mid'
        break
      case 'mid':
        audio.volume = 1.25
        status = 'mid high'
        break
      case 'mid high':
        audio.volume = 1.5
        status = 'high'
        break
      case 'high':
        audio.pause()
        status = 'none'
        break
    }

    chrome.browserAction.setIcon({
      path: {
        "19": "images/" + status + "19rain.png",
        "38": "images/" + status + "38rain.png" 
      }
    })

  }

chrome.browserAction.onClicked.addListener(audio_control)