var socket = null;
var messages = [];

function sendMessage() {
	if (socket == null) {
		showError('Error', 'Web socket is not initialized. If you turn off javascript, please turn on it to try again, please.');
		return;
	}
	if ($('#name').val() == '') {
		showError('Name is Empty', 'Anoymous mode is disabled. Please fill your name first.');
		return;
	}
	if ($('#message').val() == '') {
		showError('Message is Empty', 'Message is empty. You should type the message first.');
		return;
	}

	socket.emit('send', {
		m:$('#message').val(),
		un:$('#name').val(),
	});
	$('#message').val('');
}

function showError(title, message) {
	$('#modal_alert .modal-title').html(title);
	$('#modal_alert .modal-body').html(message);
	$('#modal_alert').modal('show');
}


$(document).ready(function(){

	socket = io.connect('http://localhost:3000');

	socket.on('message', function(data){
		if(data.m) {
			messages.push(data);
			var htmlv = '';
			for (var i=0; i<messages.length; i++) {
				htmlv += '<p>' + (messages[i].un ? messages[i].un : 'Server') + ' : ' + messages[i].m + '</p>';
			}
			$('#content').html(htmlv);
			$("#content").scrollTop($("#content")[0].scrollHeight);

		} else {
			$('#content').html('Oopse. Something went wrong...');
		}
	});

	$('#btn_send').click(function(e){
		e.preventDefault();
		sendMessage();
	});

	$("#message").keyup(function(e) {
        if(e.keyCode == 13) {
            sendMessage();
        }
    });

})


