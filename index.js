import customers from './data/customers.json' assert {type: "json"};
import products from './data/products.json' assert {type: "json"};
import receipts from './data/receipts.json' assert {type: "json"};

const customerList = customers
const productList = products
const receiptsList = receipts

function generateCustomerReport(customerId) {

	//Getting the customer receipt data with customerId
	const customerReceipts = receiptsList.filter(item => item.customerId === customerId);

	//Getting the customer data with customerId
	const customer = customerList.find(item => item.id === customerId);

	//Getting the customer item objects and sorting them by date
	const items = []

	for (const element of customerReceipts) {

		const customerProduct = productList.filter(item => item.id === element.productId)

		items.push({ ...element, ...customerProduct[0] })
	}

	items.sort((a, b) => {

		let dateA = new Date(a.createdAt);
		let dateB = new Date(b.createdAt);

		return dateA - dateB;
	});

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
	const result = {
		customer: customer,
		items: items,
		total: total,
		byDay: byDay
	}

	return result

}

generateCustomerReport('85c9427f-950f-4936-bcd5-3ed9823c9900')
