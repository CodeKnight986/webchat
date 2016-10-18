<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Real Time Web Chat using Node.js Power</title>

    <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="/chat.js" type="text/javascript"></script>
    <script src="/socket.io/socket.io.js" type="text/javascript"></script>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/style.css" rel="stylesheet" type="text/css">

  </head>

  <body>
    {{{body}}}
  </body>


  <div class="modal fade" tabindex="-1" role="dialog" id="modal_alert">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title"></h4>
	      </div>
	      <div class="modal-body">
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


</html>
