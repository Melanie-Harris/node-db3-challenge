# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT productname, categoryname
FROM [Products]
join categories on products.categoryid = categories.categoryid
limit 76

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT orderid, shippername
FROM [Orders]

join shippers on orders.shipperid = shippers.shipperid
where orders.orderid < 10409

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT productname, quantity
FROM [Products]

join orderdetails on products.productid = orderdetails.productid
where orderid= 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orderid, customername, lastname
FROM [Orders]

join customers on orders.customerid = customers.customerid
join employees on orders.employeeid = employees.employeeid



### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 