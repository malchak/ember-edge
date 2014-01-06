var Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string'),
	creator: DS.belongsTo('user', {async: true, inverse: 'ticketsCreated'}),
	assignee: DS.belongsTo('user',{async: true, inverse: 'ticketsAssigned'})
});

Ticket.FIXTURES = [
	{
		id: 1,
		title: 'Ticket 1',
		description: 'This is the first ticket',
		status: 'New',
		creator: 1,
		assignee: 2
	},
	{
		id: 2,
		title: 'Ticket 2',
		description: 'This is the second ticket',
		status: 'New',
		creator: 2,
		assignee: 1
	},
	{
		id: 3,
		title: 'Ticket 3',
		description: 'And, well what are tickets if you don\'t have three of them',
		status: 'New',
		creator: 1
	}
];

module.exports = Ticket;

