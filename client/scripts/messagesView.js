var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(obj) {
    var msg = "";
    for ( var i = 0; i < obj.results.length; i++) {
      //console.log(this);
      if(obj.results[i].username === undefined) {
        obj.results[i].username = "anonymous";
      }
      if(obj.results[i].text === undefined) {
        obj.results[i].text = "";
      }
      msg += MessageView.render(obj.results[i]);
      this.$chats.append(msg);
    }
  }
};



// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//     window.filter = null;
//   },

//   // clear messages 
//   clearMessages: function() {
//     MessagesView.$chats.empty();
//   },

//   // render messages 

//   renderMessage: function (msg) {
//     if (!msg.username || !msg.text || !msg.roomname) {
//       return;
//     }
//     if (window.filter === null) {
//       window.filter = msg.roomname.toLowerCase();
//     }
//     if (window.filter !== msg.roomname.toLowerCase()) {
//       return;
//     }
//     MessagesView.$chats.append(MessageView.render(msg));
//   },

//   render: function() {
//   }
  
// };