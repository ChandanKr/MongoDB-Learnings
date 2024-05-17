//! Chapter 5: Managing Embedded Documents (Arrays and Objects)

//? Control over Arrays and Objects inside a document.

//? Query documents inside embedded documents using dot notation.

//* Syntax:
// db.collection.find({ "parent.child": value })

//* Example:
// Example-Data we have:
// [
//   {
//     _id: 6,
//     title: "This is the example title",
//     content: "Designing schemas for optimal use...",
//     author: "Emily Jones",
//     comments: [
//       { user: "Kelvin", text: "Wow, this is Awesome !!" },
//       { user: "Lily", text: "Well Structured, Loved it !!" },
//     ],
//     metadata: { views: 456, likes: 46 },
//   },
// ];

// Q1: Find posts with comments by a specific user (Array)
// Sol: db.comments.find({'comments.user': "Lily"});

// Q2: Find the documents where the views in metadata field > 1200 (Object)
// Sol: db.comments.find({'metadata.views': {$gt: 1200}});

// Q3: Find out the document where the user in comments is "Henry" and also the metadata likes value > 50
// Sol: db.comments.find({'comments.user': "Henry", 'metadata.likes' : {$gt: 50}});

// Q4: Return a comment array which must have this user = (alice and henry) elements only in it.
//? We must use $all operator. 
// Sol: db.comments.find({'comments.user': "Henry", 'metadata.likes' : {$gt: 50}});



//! $all vs $elemMatch

//* The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
// Syntax: {<field>: {$all: [<value1>, <value2>, ...]}}
// Example: db.comments.find({'comments.user': {$all: ['Alice', 'Henry']}});

//* The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
// Syntax: {<field>: {$elemMatch: {<query1>, <query2>, ...}}}
// Example: db.comments.find({'comments': {$elemMatch: {"user": "Alice", "text": "This is Awesome!"}}});