$(document).ready(function(){
	$('div').click(function(){
		$(this).show_popup();
		});
	});

	function show_popup() {
	  var p = window.createPopup()
	  var pbody = p.document.body
	  pbody.style.backgroundColor = "lime"
	  pbody.style.border = "solid black 1px"
	  pbody.innerHTML = "This is a pop-up! Click outside to close."
	  p.show(150,150,200,50,document.body)
}
