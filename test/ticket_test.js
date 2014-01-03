module('Tickets',{
	setup: function(){
		App.reset();
	}
});

test('listing tickets', function(){
	visit('/')
	.click('a:contains("Ticket 1")')
	.then(function(){
		ok(find('a:contains("Ticket 1")').length,
			'expected to find Ticket 1');
	});
});

test('view ticket details', function(){
	visit('/')
	.click('a:contains("Ticket")')
	.click('a:contains("Ticket 1")')
	.then(function(){
		ok(find('*:contains("This is the first ticket")').length,
			'expected to find ticket description');
	});
});