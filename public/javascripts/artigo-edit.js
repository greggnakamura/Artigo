function publish() {
	put({
		post_published: true,
		date_type: $('#date_type').val(),
		post_created_at: $('#post_created_at').val()
	}, function(d) {
		if( d.post ) {
			
			var post_pub = new Date(d.post.created_at);
			var permalink = "/" + post_pub.getFullYear() + "/" + (post_pub.getMonth()+1) + "/" + post_pub.getDate() + "/" + d.post.permalink;
			
			if( $('#date_type').val() !== 'default' ) {
				// show the message
				$('#publish_warning code.permalink').html( permalink );
				$('#publish_warning a.permalink').attr( 'href', permalink );
				$('#publish_warning').show();
			}
			
			$('#notice').slideDown(function() { $(this).html('Post is now public').glow("#ffff99", 3000); });
			setTimeout(function() {
				$('#notice').slideUp(function(){ $(this).html(''); });
			}, 4000);
			$('.publish').slideUp(function(){ $('.unpublish').slideDown(); });
		}
	});
}

function unpublish() {
	put({
		post_published: false
	}, function(d) {
		if( d.post ) {
			$('#notice').slideDown(function() { $(this).html('Post is now private.').glow("#ffff99", 3000); });
			setTimeout(function() {
				$('#notice').slideUp(function(){ $(this).html(''); });
			}, 4000);
			$('.unpublish').slideUp(function() { $('.publish').slideDown(); });
		}
	});
}

function put(data, success, error) {
    var postid = window.location.href.substring( window.location.href.indexOf('/posts/') + 7 ).replace(/\/edit/ig, '') * 1; 
	$.ajax({
		url: '/posts/' + postid + '.json',
		data: data,
		dataType: 'json',
		type: 'PUT',
		success: success,
		error: error
	});
}

function preview(e) {
    e.preventDefault();
    var context = $('.edit').size() > 0 ? '.edit' : '.new';
    $('.preview #title').html( $('#title', context).val() );
    $('.preview #summary').html( $('#summary', context).val() );
    $('.preview #content').html( $('#content', context).val() );
    $('.container').animate({
        left: "-=800px"
    }, 750);
	prettyPrint();
    return false;
}

function goback(e) {
    e.preventDefault();
    $('.container').animate({
        left: "+=800px"
    }, 500); 
    return false;
}


(function($) {
	$(function() {
		$('button#publish').click(publish);
		$('button#unpublish').click(unpublish);
		$('#date_type').change(function(){
			$('#post_created_at').toggle( $(this).val() === "custom" );
		});
        $('.edit button#preview, .new button#preview').click(preview);
        $('.preview button#goback').click(goback);
	});
})(jQuery);