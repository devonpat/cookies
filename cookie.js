$(document).ready(function(){

	$("#chipCount").html(Cookies.get('chocolate'));
	$("#sugarCount").html(Cookies.get('sugar'));
	$("#lemonCount").html(Cookies.get('lemon'));

	$("#chocolate").click(function() {
		if (Cookies.get('chocolate') === undefined) {
			Cookies.set('chocolate', 0);
		}
		Cookies.set('chocolate', parseInt(Cookies.get('chocolate')) + 1);
		$("#chipCount").html(Cookies.get('chocolate'));
	});

	$("#sugar").click(function() {
		if (Cookies.get('sugar') === undefined) {
			Cookies.set('sugar', 0);
		}
		Cookies.set('sugar', parseInt(Cookies.get('sugar')) + 1);
		$("#sugarCount").html(Cookies.get('sugar'));
	});

	$("#lemon").click(function() {
		if (Cookies.get('lemon') === undefined) {
			Cookies.set('lemon', 0);
		}
		Cookies.set('lemon', parseInt(Cookies.get('lemon')) + 1);
		$("#lemonCount").html(Cookies.get('lemon'));
	})

	$("#resetChip").click(function() {
		if (Cookies.get('chocolate') === undefined) {
			Cookies.set('chocolate', 0);
		}
		Cookies.set('chocolate', parseInt(Cookies.get('chocolate')) * 0);
		$("#chipCount").html(Cookies.get('chocolate'));
	})

	$("#resetSugar").click(function() {
		if (Cookies.get('sugar') === undefined) {
			Cookies.set('sugar', 0);
		}
		Cookies.set('sugar', parseInt(Cookies.get('sugar')) * 0);
		$("#sugarCount").html(Cookies.get('sugar'));
	})

	
	$("#resetLemon").click(function() {
		if (Cookies.get('lemon') === undefined) {
			Cookies.set('lemon', 0);
		}
		Cookies.set('lemon', parseInt(Cookies.get('lemon')) * 0);
		$("#lemonCount").html(Cookies.get('lemon'));
	})	
});






