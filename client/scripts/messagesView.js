var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    var msg = "";
    for ( var i = 0; i < Messages._data.length ; i++) {
      //console.log(this);
      if(Messages._data[i].username === undefined) {
        Messages._data[i].username = "anonymous";
      }
      if(Messages._data[i].text === undefined) {
        Messages._data[i].text = "";
      }
      msg += MessageView.render(Messages._data[i]);
      MessagesView.$chats.append(msg);
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