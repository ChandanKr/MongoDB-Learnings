//! Chapter 3: Read Operations in MongoDB

//? Reading/Finding Documents in MongoDB.
//? Importing JSON in MongoDB
//? Comparison Operators.
//? Logical Operators.
//? Cursors in MongoDB.
//? Elements Operators.

//===============================================
//todo: Reading/Finding Documents in MongoDB.
//===============================================

//* find() / find({}) => to read all the related documents.
// db.<collection-name>.find(); => to read all the documents.
// db.<collection-name>.find({}); => to read all the documents.
// db.<collection-name>.find({ key: value }); => to read all the documents with specific fields and field-value.

//* findOne()  => to read only first related document.
// db.<collection-name>.findOne({ key: value });

//===============================================
//todo: Importing JSON in MongoDB.
//===============================================

//* If JSON is not in array format => {}
// mongoimport jsonfilename.json -d <database-name> -c <collection-name>
// e.g., mongoimport products.json -d shop -c products

//* If JSON is in array format => [{},{}]
// mongoimport jsonfilename.json -d <database-name> -c <collection-name> --jsonArray
// e.g., mongoimport products.json -d shop -c products --jsonArray

//===============================================
//todo: Comparison Operators.
//===============================================

//? Operators:
// $eq => equals to
// $ne => not equals to
// $gt => greater than
// $gte => greater than equals to
// $lt =>  less than
// $lte => less than equals to
// $in => in
// $nin => not in

//* db.collectionName.find({'fieldName': {$operator: value}})
// e.g., db.products.find({'price': {$eq: 699}}); => to show all the documents whose price is 699
// e.g., db.products.find({'price': {$in: [249, 129, 69]}}); => to show all the documents whose price is 249, 129, 69

//===============================================
//todo: Logical Operators.
//===============================================

//? Operators:

//* $and => Performs a logical AND operation on an array of expressions, where all expressions must be true for the document to match.
// {$and: [{condition1}, {condition2}, {condition3}, ...]}
// e.g., db.products.find({ $and: [{'price': { $gt: 100}}, {'name': 'Notebook Collection'}]}) => to find a product whose price should be greater than 100 and name should be "Notebook Collection".

//* $or => Performs a logical OR operation on an array of expressions, where any one expressions should be true for the document to match.
// {$or: [{condition1}, {condition2}, {condition3}, ...]}
// e.g., db.products.find({ $or: [{'price': { $gt: 2000}}, {'name': 'Notebook Collection'}]}) => to find a product whose price should be greater than 2000 or name should be "Notebook Collection".

//* $nor => Performs a logical NOR operation on an array of expressions, to match except all the documents whose data is not matching with any of the conditions.
// {$nor: [{condition1}, {condition2}, {condition3}, ...]}
// e.g., db.products.find({ $nor: [{'price': { $gt: 100}}, {'name': 'Notebook Collection'}]}) => to find all the products whose price should neither be greater than 100 nor name should be "Notebook Collection".

//* $not => Performs a logical NOT operation on the specified expression, inverting the result.
// {fieldName: {$not: {$operator: value}}}
// db.products.find({'price': {$not: {$eq: 100}}}) => to find products with price not equal to 100.

//===============================================
//todo: Cursors in MongoDB.
//===============================================

//? Cursors in MongoDB are used to efficiently retrieve large result sets from queries, providing control over the data retrieval process.
// MongoDB retrieves query results in batches using cursors.
// Cursors are a pointer to the result set on the server.
// Cursors are used to iterate through query results.

//? CURSOR METHODS:
//* count() : counts the total number of documents in the collection.
// db.collectionName.find({'fieldName': {$operator: value}}).count()
// e.g., db.products.find({'price': {$eq: 699}}).count();

//* limit() : limits the number to show first n number of documents.
// db.collectionName.find({'fieldName': {$operator: value}}).limit(number)
// e.g., db.products.find({'price': {$eq: 699}}).limit(5);

//* skip() : to skip the first n number of documents.
// db.collectionName.find({'fieldName': {$operator: value}}).skip(number)
// e.g., db.products.find({'price': {$eq: 699}}).skip(5);

//* sort() : to sort the document with respect to the field-name in ascending/descending order.
// db.collectionName.find({'fieldName': {$operator: value}}).sort({'fieldName': static_value}) => here static_value will be either 1 (for ascending order) or -1 (for descending order)
// e.g., db.products.find({'price': {$eq: 699}}).sort({'price': 1});

//===============================================
//todo: Elements Operators.
//===============================================

//? Operators:

//* $exists : Matches documents that have a specific field, regardless of it's value.
// {fieldName: {$exists: <boolean_value>}}
// e.g., db.products.find({'price': {$exists: true}});

//* $type : The $type operator filters documents based on the BSON data type of a field.
// BSON DataTypes => Double, number, String, Object, Array, Binary data, Undefined, Object id, Boolean, DAte, Null, Regular Expression, JavaScript code
// {fieldName: {$type: "<bson-data-type>"}}
// e.g., db.products.find({'price': {$type: "string"}});

//* $size : Matches documents where the size of an array field matches a specified value.
// {fieldName: {$size: <array-length>}}
// e.g., db.comments.find({'comments': {$size: 2}});
