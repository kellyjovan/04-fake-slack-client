var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get(messagesRoute)
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  var user = $('#submit-user').val();
  var content = $('#submit-content').val();
  for(var i = 0; i < 1000; i++)
  {
    content = Math.pow(99, i);
    sendMessage(user, content, function()
    {
      
    }
  )}
});


/* use setInterval to periodically get new messages and update the list */

window.setInterval(function () {

  getMessages(function (messages) {
    // empty message log
    $('.messages').empty();

    // TODO: append messages to <ul class="messages">
    for(var i = 0; i < messages.length; i++)
    {
      $(".messages")
        .append(
          producesMessage(
            messages[i].user, 
            messages[i].content
          )
        );
    }
  });

}, 10);

function producesMessage(user, content)
{
  return "<li>" + user + ": " + content + "</li>";
}
