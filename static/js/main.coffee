requirejs.config
    baseUrl: 'static/js/lib'

    paths:
      bootstrap: 'bootstrap'
      text: 'text'
      response: '../model/response'
      responselist: '../model/responselist'
      responseview: '../view/response'
      responselistview: '../view/responselist'

    shim:
      underscore:
        exports: '_'
      
      backbone:
        deps: ['underscore', 'jquery']
        exports: 'Backbone'

      handlebars:
        exports: 'Handlebars'

      pusher:
        exports: 'Pusher'

require(['backbone', 'responselistview'], (Backbone, ResponseListView) ->
  new ResponseListView()
)
