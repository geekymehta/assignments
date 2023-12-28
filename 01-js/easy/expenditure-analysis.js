/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Write your code here
  const acc = [];
  transactions.forEach((transaction) => {
    const index = acc.findIndex(
      (item) => item.category === transaction.category
    );
    if (index === -1) {
      acc.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      acc[index].totalSpent += transaction.price;
    }
  });
  return acc;
  //or
  /*
  return transactions.reduce((acc, transaction) => {
    const index = acc.findIndex((item) => item.category === transaction.category);
    if (index === -1) {
      acc.push({ category: transaction.category, totalSpent: transaction.price });
    } else {
      acc.[index].totalSpent += transaction.price;
    }
    return acc;
  }, []);
*/
}

module.exports = calculateTotalSpentByCategory;
