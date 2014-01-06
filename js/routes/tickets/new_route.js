var PreloadsUsers = require('../../mixins/preloads_users.js');

var TicketsNewRoute = Ember.Route.extend({
	model: function(){
		return{};
	},
	actions: {
		save: function(){
			var attrs = this.get('controller').getProperties('title','status','description','creator','assinee');
			var ticket = this.get('store').createRecord('ticket',attrs);
			var promise = ticket.save();
			this.transitionTo('ticket',promise);
		},
		cancel: function(){
			this.transitionTo('tickets');
		}
	}
});

module.exports = TicketsNewRoute;

