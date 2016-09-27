function getSubreddit(subreddit) {
	var url = 'https://www.reddit.com/r/'+subreddit+'.json';
	var promise = $.ajax({
		url: url,
		type: 'get',
		dataType: 'json'
	});

	promise.then(function(response) {
		var templateSource = $('#reddit').html();
		var template = Handlebars.compile(templateSource);
		var html = template({
			redditItems: response.data.children
		});
		$('#redditList').html(html);
	}, function() {
		console.log("There was an error.");
	});
}

function showDescr(id) {
	document.getElementById(id).style.display = "block";
}