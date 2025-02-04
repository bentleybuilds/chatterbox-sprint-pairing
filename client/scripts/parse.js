var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};


/* Example of helper function */
// function dogController(){
//   getRandomDog(function(model){
//     const view = createDog(model.message)
//     $('.dogContainer').empty()
//     $('.dogContainer').append(view)
//   })
// }

// $('#getDog').click(dogController)

// var Parse = {

//   server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

//   create: function(message, successCB, errorCB = null) {
//     // todo: save a message to the server
//   },

//   readAll: function(successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   }

// };