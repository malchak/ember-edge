var TicketController = Ember.ObjectController.extend({
	statuses: ['New','Open','Closed'],
	isEditing: false
});

module.exports = TicketController;

