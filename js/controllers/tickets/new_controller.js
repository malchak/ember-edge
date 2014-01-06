var NeedsUsers = require('../../mixins/needs_users.js');

var TicketsNewController = Ember.ObjectController.extend({
	statuses: ['New','Open']
});

module.exports = TicketsNewController;

