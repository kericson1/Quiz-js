(function(window) {
    var helloSpeaker = {};
    var helloWord = "Hello";
    helloSpeaker.speak = function speak(name) {
        console.log(helloWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);
