module('Store');

test('Ember Data version', function(){
	equal(DS.VERSION,'1.0.0 beta.3');
});

test('store uses DS.LSAdapter', function(){
	var store = App.__container__.lookup('store:main'),
	adapter = store.adapterFor('application'),
	name = adapter.constructor.toString();

	equal(name, 'DS.FixtureAdapter');
});