var TicketsRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('ticket');
	}
});

module.exports = TicketsRoute;

