var Messages = {
_data:[]
add: function(message){
Messages._data.push(message);
},

update: function (messages) {
    Messages._data = messages
}
};
