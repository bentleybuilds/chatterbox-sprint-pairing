// var FormView = {

//   $form: $('form'),
//   currentUser: null,

//   initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },

//   setUser: function(username) {
//     FormView.currentUser = username;
//   },

//   handleSubmit: function(event) {
//     // Stop the browser from submitting the form
//     var msgText = $('#message').val();
//     var msg = {username: FormView.currentUser, text: msgText, roomname: window.filter};
    
//     Parse.create(msg, (data) => {
//       console.log(data);
//     });

//     $('#refresh').click();
//   },

//   setStatus: function(active) {
//     var status = active ? 'true' : null;
//     FormView.$form.find('input[type=submit]').attr('disabled', status);
//   }

// };

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    // add click event handler to submit new messages
    $('.submit').click(function (){

      var message = {
        room: 'lobby',
        text: FormView.$form.find($('#message')).val(),
        username: App.username
      };

      // append input text to message div
      // input.value** grabs value of what is inputted into text box
      // $('#message').val()
      Parse.create(message, ()=>{
        Messages.add(message);
        MessagesView.render();
      });
     
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};