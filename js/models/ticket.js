var Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string')
});

Ticket.FIXTURES = [
	{
		id: 1,
		title: 'Ticket 1',
		description: 'This is the first ticket',
		status: 'New'
	},
	{
		id: 2,
		title: 'Ticket 2',
		description: 'This is the second ticket',
		status: 'New'
	},
	{
		id: 3,
		title: 'Ticket 3',
		description: 'And, well what are tickets if you don\'t have three of them',
		status: 'New'
	}
];

module.exports = Ticket;

