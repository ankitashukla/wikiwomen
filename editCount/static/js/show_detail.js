$(function(){
	var page = 206337;
	var ajax_call = function(){
		$.ajax({
			url: 'http://ec2-54-186-46-239.us-west-2.compute.amazonaws.com/editCount/api/v1.0/article/',
			type: 'GET',
			dataType: 'json',
		})
		.done(function( data ) {
			//console.log( data["Usha_Meena"] );
			//console.log(data.object);
			var values;
			$.each( data, function( key, val ) {
				values = val;
			});
			var count = 1, articleData, totalEdit = 0;
  			// $.each(values, function(key, val) {
  			// 	 /* iterate through array or object */
  			// 	 console.log(key + val);
  			// 	 if (key === 'timestamp')
  			// 	 	continue;
  			// 	 key = key.replace('_', ' ')
  			// 	 articleData = "<tr><td> " + count + " </td> <td>" + key+ "</td> <td>" + val+ "</td> </tr>";
  			// 	 $('#articleData').append(articleData);
  			// 	 count = count + 1;
  				// });
  			// https://en.wikipedia.org/wiki/key
  			
  			$('#articleData').find('tr').remove();

			for ( var key in values){
				if (key === 'timestamp')
					continue;
				val = values[key];
				totalEdit = totalEdit + val;
				var name = key.replace(/\_/g,' ');
				var href = "https://en.wikipedia.org/wiki/" + key;
				articleData = "<tr><td> " + count + " </td> <td> <a target = '_blank' href="+ href +">" + name+ "</a></td> <td>" + val + "</td> </tr>";
				$('#articleData').append(articleData);
				count = count + 1;
			}
			$('#totalArticleCount').text(count);
			$('#totalEditCount').text(totalEdit);

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
	ajax_call();
	setInterval(ajax_call, 1000*60*3);
});
