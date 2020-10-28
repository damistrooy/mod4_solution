(function(window)
  {
    byeSpeaker ={};
    var speakWord = "Good Bye";

    byeSpeaker.speak = function (i) {
      console.log(speakWord + "" + name);
    }

    window.byeSpeaker = byeSpeaker;
  }
)(window);