The function generateCustomerReports() returns all the reports of all the customers in a single array.

A single CustomerReport contains:

1. Customer info (Customer object with id, firstName, Lastname)
2. Receipts with product information (Items array with Item objects (customerId, productId, quantity, createdAt, id, product, price) )
3. Total customer receipts sum
4. Receipt sum grouped by day (byDay object)

