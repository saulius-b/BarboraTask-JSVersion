import customers from './data/customers.json' assert {type: "json"};
import products from './data/products.json' assert {type: "json"};
import receipts from './data/receipts.json' assert {type: "json"};

const generateCustomerReport = () => {

	const result = []

	customers.forEach(element => {
		//Customer information object
		const customer = { id: element.id, firstName: element.firstName, lastName: element.lastName }

		//Getting the customer receipt data with customerId
		const customerReceipts = receipts.filter(item => item.customerId === element.id);

		//Getting the customer item objects and sorting them by date
		const items = []

		for (const element of customerReceipts) {

			const customerProduct = products.filter(item => item.id === element.productId)

			items.push({ ...element, ...customerProduct[0] })
		}

		items.sort((x, y) => new Date(x.createdAt) - new Date(y.createdAt));

		//Getting total price
		const total = items.reduce((accum, item) => accum + (parseInt(item.price) * item.quantity), 0)

		//Getting byDay object
		const dates = items.map(item => item.createdAt.split('T')[0])

		const prices = items.map(item => parseInt(item.price) * item.quantity)

		const byDay = {}

		dates.forEach((item, index) => {

			byDay[item] = prices[index]

		});

		//End result
		result.push(
			{
				[element.id]: {
					customer,
					items,
					total,
					byDay
				}
			}
		)
	});

	return result
}

console.log(generateCustomerReport())