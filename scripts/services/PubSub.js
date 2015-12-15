angular.module("MovieDbApp").service("PubSub", [function(){

    this.subscribers = {};

    this.subscribe = function(eventName, eventHandler) {
        if (typeof(this.subscribers[eventName]) == "undefined") {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(eventHandler);
    };

    this.unsubscribe = function(eventName, eventHandler){};

    this.publish = function(eventName, eventData) {
        var eventSubscribers = this.subscribers[eventName] || [];
        for (var i in eventSubscribers) {
            eventSubscribers[i](eventData);
        }
    };

}]);
