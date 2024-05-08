//! Chapter 4: Projection

//? Control over which fields we want to display, which we don't want.

//? To include specific fields, use projection with a value of 1 for the fields you want.
//? To exclude fields, use projection with a value of 0 for the fields you want to exclude.
//? Except _id, We cannot include and exclude fields simultaneously in the same query projection.

//* Syntax:
// db.collection.find({}, { field1: 1, field2: 1 })

//* Example:
// To include: db.comments.find({'comments': {$size: 2}}, {comments: 1}); => only id and comments field will be visible.
// To exclude: db.comments.find({'comments': {$size: 2}}, {title: 0}); => All fields will be visible except title.


//* Acceptance Criteria:

// db.comments.find({'comments': {$size: 2}}, {comments: 1, title: 1}); => Accepted
// db.comments.find({'comments': {$size: 2}}, {comments: 0, title: 0}); => Accepted
// db.comments.find({'comments': {$size: 2}}, {comments: 1, title: 0}); => Not Accepted
// db.comments.find({'comments': {$size: 2}}, {comments: 0, title: 1}); => Not Accepted
