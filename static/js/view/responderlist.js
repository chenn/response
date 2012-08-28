// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'responder', 'responderlist', 'responderview', 'pusher'], function(Backbone, Responder, ResponderList, ResponderView, Pusher) {
    var ResponderListView;
    return ResponderListView = (function(_super) {

      __extends(ResponderListView, _super);

      function ResponderListView() {
        return ResponderListView.__super__.constructor.apply(this, arguments);
      }

      ResponderListView.prototype.el = $("#responderlist");

      ResponderListView.prototype.initialize = function() {
        this.collection = new ResponderList();
        this.collection.on("add", this.render, this);
        this.initializePusher();
        return this.render();
      };

      ResponderListView.prototype.initializePusher = function() {
        var channel, pusher,
          _this = this;
        pusher = new Pusher('fcae1137cc539c41993f');
        channel = pusher.subscribe('responses');
        return channel.bind('textresponse', function(response) {
          return _this.addNewResponse(response.name, response.message);
        });
      };

      ResponderListView.prototype.render = function() {
        this.$el.empty();
        _.each(this.collection.models, function(responder) {
          var view;
          view = new ResponderView({
            model: responder
          });
          return this.$el.append(view.render().el);
        }, this);
        return this;
      };

      ResponderListView.prototype.addNewResponse = function(name, message) {
        return this.collection.add(new Responder({
          name: name,
          message: message
        }));
      };

      return ResponderListView;

    })(Backbone.View);
  });

}).call(this);
