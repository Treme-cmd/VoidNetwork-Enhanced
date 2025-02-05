
          //window.onload = GameMaker_Init;
        //if(!Number.isNaN && window.isNaN) Number.isNaN = isNaN;

        window.onload = function() {
            if(!window.AudioContext && !window.webkitAudioContext) g_WebAudioContext = {};
            GameMaker_Init();
            if(!window.AudioContext && !window.webkitAudioContext) g_WebAudioContext = null;
         };