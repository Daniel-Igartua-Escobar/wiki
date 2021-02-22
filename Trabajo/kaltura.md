# kaltura_ue-mwEmbed

## mw.DoubleClick.js

```js

    _this.embedPlayer.a();
    _this.embedPlayer.hideSpinner();

    CONTENT_PAUSE_REQUESTED


    LOADED
    if ( _this.isLinear ) {
        // Hide player content
        _this.hideContent();
        // show the loading spinner until we start ad playback
        _this.embedPlayer.addPlayerSpinner();
        // if on iPad hide the quicktime logo:
        _this.hidePlayerOffScreen( _this.getAdContainer() );
        // show notice message
        _this.embedPlayer.getInterface().find( ".ad-notice-label" ).text( "" ).show();
        // Monitor ad progress
        _this.monitorAdProgress();
    } 

    86282
    addPlayerSpinner:
    86300
    hideSpinner:

```

## mw.EmbedPlayer.js
```js
> monitor
syncCurrentTime
bufferHandling
bufferStart

```

## mw.EmbedPlayerNative.js
```js

monitor
```

onSeek
bufferEnd