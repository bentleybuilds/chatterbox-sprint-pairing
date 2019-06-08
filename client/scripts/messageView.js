var MessageView = {

  render: _.template(
      "<div class='chat'>" +
          "<div class='username'>" +
            "<%-username%>"+
          "</div>" +
        "<div>"+
          "<%-text%>"+
        "</div>" +
      "</div>"
    )

};


//JavaScript templating refers to the client side data binding method implemented with the JavaScript language. 
// This approach became popular thanks to JavaScript's increased use, its increase in client processing capabilities, 
// and the trend to outsource computations to the client's web browser. Popular JavaScript templating libraries are AngularJS,
//  Backbone.js, Ember.js, Handlebars.js, Vue.js and Mustache.js. A frequent practice is to use double curly brackets (i.e. {{key}}) 
// to call values of the given key from data files, often JSON objects.ˀ