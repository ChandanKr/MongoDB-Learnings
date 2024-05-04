//! Chapter 2: Insert Operations in MongoDB

//? Inserting Documents in MongoDB.
//? When to use Quotes and when not to?
//? Ordered and Unordered Inserts.
//? Case Sensitivity in MongoDB.

//===============================================
//todo: Inserting Documents in MongoDB.
//===============================================

//? To Insert Single Document
//* Syntax:
// db.<collection-name>.insertOne({
//     field1: value1,
//     field2: value2,
//     ...
// });

//* Example:
// db.studentData>.insertOne({
//     'name': 'Chandan',
//     age: 26,
// });

//? To Insert Multiple Document
//* Syntax:
// db.<collection-name>.insertMany([
//     {field1: value1, field2: value2,...},
//     {field1: value1, field2: value2,...},
//     ...
// ]);

//* Example:
// db.studentData.insertMany([
//     {'name': 'Vinayak', age: 21},
//     {'name': 'Ajay', age: 25},
// ]);

//===============================================
//todo: When to use Quotes and when not to?
//===============================================

//* Special Characters:
// If a field name contains special characters or spaces, or starts with a numeric digit, using quote is necessary.

//* Reserved Words:
// If a field name is a reserved keyword in MondoDB, use quotes to distinguish it from the reserved keyword.


//! Best Practice => Always use Quotes.

//===============================================
//todo: Ordered and Unordered Inserts.
//===============================================

// When executing bulk write operations, "ordered" and "unordered" determines the batch behavior.

//? Ordered Inserts:
// Default behavior is ordered, where MongoDB stops on the first error.
// It will insert all the documents that comes before the error documents, rest those comes after the error document will not be inserted. 
// db.<collection-name>.insertMany([ doc1, doc2, ... ]);

//? Unordered Inserts:
// When executing bulk write operations with unordered flag, mongoDB processing after encountering an error.
// It will insert all the documents except the error documents, the error document will be excluded and ignored. 
// db.<collection-name>.insertMany([ doc1, doc2, ... ], { ordered: false });

//===============================================
//todo: Case Sensitivity in MongoDB.
//===============================================

// Collection names are case-sensitive.
// Field names within the documents are also case-sensitive.

//db.Product.insertOne({ name: 'chandan', age: 26 });
//db.product.insertOne({ name: 'chandan', age: 26 });
//? Here, "Product" and "product", both are different collections.


//db.product.insertOne({ Name: 'chandan', name: 'kumar' });
//? Here, "Name" and "name, both are different Field_names.