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
