'use strict'

var tinyOverlay

function createDom () {
  if (tinyOverlay) {
    return tinyOverlay
  }

  tinyOverlay = document.createElement('div')
  var style = tinyOverlay.style
  style.width = '100%'
  style.height = '100%'
  style.opacity = 0.5
  style.position = 'fixed'
  style.left = 0
  style.top = 0
  style.backgroundColor = 'hsla(187, 100%, 42%, 0.12)'
  document.body.appendChild(tinyOverlay)
  return tinyOverlay
}

function close () {
  if (tinyOverlay) {
    document.body.removeChild(tinyOverlay)
    tinyOverlay = null
  }
}

function maybeDefer (fn, timeoutMs) {
  if (timeoutMs) {
    setTimeout(fn, timeoutMs)
  } else {
    fn()
  }
}

var tinyOverlayApi = {
  show: createDom,
  hide: function (timeoutMs) {
    maybeDefer(close, timeoutMs)
  }
}

module.exports = tinyOverlayApi
