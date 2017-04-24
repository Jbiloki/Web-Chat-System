(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');
    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({
            message: 'pow!'
        });
        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(data) {
        _classCallCheck(this, ChatMessage);

        var m = data.message,
            _data$user = data.user,
            u = _data$user === undefined ? 'batman' : _data$user,
            _data$timestamp = data.timestamp,
            t = _data$timestamp === undefined ? new Date().getTime() : _data$timestamp;

        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcYXBwLmpzIiwiYXBwXFxzY3JpcHRzXFxzcmNcXG1haW4uanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSx1QkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQzdCLFlBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0I7QUFDMUIscUJBQVM7QUFEaUIsU0FBaEIsQ0FBZDtBQUdBLDJCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0gsS0FMRDtBQU1BLHVCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3BDLGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsS0FGRDtBQUdILEM7O0lBR0MsVztBQUNGLHlCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFBQSxZQUVELENBRkMsR0FLVixJQUxVLENBRVYsT0FGVTtBQUFBLHlCQUtWLElBTFUsQ0FHVixJQUhVO0FBQUEsWUFHSixDQUhJLDhCQUdBLFFBSEE7QUFBQSw4QkFLVixJQUxVLENBSVYsU0FKVTtBQUFBLFlBSUMsQ0FKRCxtQ0FJTSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFKTDs7QUFNZCxhQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsYUFBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNIOzs7O29DQUVXO0FBQ1IsbUJBQU87QUFDSCxzQkFBTSxLQUFLLElBRFI7QUFFSCx5QkFBUyxLQUFLLE9BRlg7QUFHSCwyQkFBVyxLQUFLO0FBSGIsYUFBUDtBQUtIOzs7Ozs7a0JBR1UsTzs7Ozs7QUN0Q2Y7Ozs7OztBQUNBOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2YsYUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUMxQyxXQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0gsS0FIRDtBQUlIOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDN0MsV0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEVBQUUsSUFBekI7QUFDQSxZQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7QUFDQSx3QkFBZ0IsSUFBaEI7QUFDSCxLQUpEO0FBS0g7O0FBRUQsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFdBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FBWjtBQUNIOztrQkFHYztBQUNYLFVBQU0sSUFESztBQUVYLDRDQUZXO0FBR1gsa0RBSFc7QUFJWDtBQUpXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XHJcblxyXG5jbGFzcyBDaGF0QXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XHJcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncG93ISdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHZhciB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG0sXHJcbiAgICAgICAgICAgIHVzZXI6IHUgPSAnYmF0bWFuJyxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0gPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICAgICAgdGhpcy51c2VyID0gdTtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcixcclxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcclxuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xyXG5uZXcgQ2hhdEFwcCgpO1xyXG4iLCJsZXQgc29ja2V0O1xyXG5cclxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcclxuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XHJcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcclxuICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQ6IGluaXQsXHJcbiAgICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcclxuICAgIHNlbmRNZXNzYWdlXHJcbn07XHJcbiJdfQ==
