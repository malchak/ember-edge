var PreloadsUsers = require('../mixins/preloads_users.js');

var TicketRoute = Ember.Route.extend({
	
	actions: {
		edit: function(){
			this.set('controller.isEditing', true);
		},
		done: function(){
			this.set('controller.isEditing', false);
			this.modelFor('ticket').save();
		}
	}
});

module.exports = TicketRoute;

