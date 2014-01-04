var container, store;

module('User', {
	setup: function(){
		container = new Ember.Container();
		container.register('store:main', DS.Store);
		container.register('model:user', App.User);

		store = container.lookup('store:main');
	}
});

test('displayName', function(){
	var user;
	Ember.run(function(){
		user = store.createRecord('user',{
			firstName: 'Tom',
			lastName: 'Dale'
		});
	});
	equal(user.get('displayName'), 'Tom Dale')
});

test('gravatarURL', function(){
	var user;
	Ember.run(function(){
		user = store.createRecord('user', {
			email: 'tom@example.com'
		})
	});
	equal(user.get('gravatarURL'),'“http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
});

test('gravatarURL with blank email', function(){
	var user;
	Ember.run(function(){
		user.store.createRecord('user', {
			email: ''
		});
	});
	equal(user.get('gravatarURL'), 'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
});

test('gravatarURL with undefined email', function(){
	var user;
	Ember.run(function(){
		user = store.createRecord('user');
	});
	equal(user.get('gravatarURL'),'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
});

test('view user details', function(){
	visit('/')
	.click('a:contains("Users")')
	.click('a:contains("Tom Dale")')
	.then(function(){
		ok(find('img[src^="http://www.gravatar.com/avatar/9bf3a766e037b9d5a4da0a6f9d0f4f68.jpg"]').length,
			'expected to find gravatar image');
	});
});







