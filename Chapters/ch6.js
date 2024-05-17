//! Chapter 6: Update Operation in MongoDB

//? updateOne() and updateMany().
//? Removing and renaming fields.
//? Updating arrays (Adding/Removing item) / embedded documents.


//===============================================
//* updateOne() and updateMany()
//===============================================

//! Note: a special operator will be used for the update operation => "$set"

//? updateOne()
//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$set: {existingField: newValue, newField: "new value", // ....}}
// );

//* Example:
//todo: Update the price value = 45 in a products collection, where the _id = ObjectId("45d4asd6fas4666644")
// db.studentData.updateOne({
//     {_id: ObjectId("45d4asd6fas4666644")},
//     {$set: {"price": 45}}
// });

//todo: Update the isFeatured value = true in a products collection, where the name = Designer Handbag.
// db.studentData.updateOne({
//     {"name": "Designer Handbag"},
//     {$set: {"isFeatured": true}}
// });


//---------------------------------------------------------------------------------------------------
//? updateMany()
//* Syntax:
// db.<collection-name>.updateMany(
//     {filter},
//     {$set: {existingField: newValue, // ....},}
// );

//* Example:
//todo: Update all the isFeatured value = true in a products collection, where the price = 120
// db.studentData.updateMany({
//     {"price": 120},
//     {$set: {"isFeatured": true}}
// });

//===============================================
//* Removing and renaming fields
//===============================================

//? Removing Field:

//! Note: a special operator will be used for the removing field operation => "$unset"

//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$unset: {fieldName: 1}}
// );

// note that 1 will always be there to remove


//---------------------------------------------------------------------------------------------------
//? Renaming Field:

//! Note: a special operator will be used for the renaming field operation => "$rename"

//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$rename: {oldFieldName: "newFieldName"}}
// );

//* Example:
//todo: Rename the products collection isFeatured to isFeature, where the price = 123
// db.studentData.updateOne({
//     {"price": 123},
//     {$rename: {"isFeatured": "isFeature"}}
// });

//================================================================
//* Updating arrays (Adding/Removing item) / embedded documents
//================================================================

//? Updating arrays (Adding item):

//! Note: a special operator will be used for adding item into an array => "$push"

//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$push: {arrayField: "new element"}}
// );

//---------------------------------------------------------------------------------------------------
//? Updating arrays (Removing item):

//! Note: a special operator will be used for removing item into an array => "$pop"

//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$pop: {arrayField: value}}
// );

//---------------------------------------------------------------------------------------------------
//? Updating embedded documents:

//! Note: a special operator will be used for updating embedded documents => "$set" and a positional operator ("$")
 
//* Syntax:
// db.<collection-name>.updateOne(
//     {filter},
//     {$set: {"arrayField.$.text": "Updated text"}}
// );

//* Example:
// db.comments.updateOne({_id: 7, "comments.user": "Alice"}, {$set: {"comments.$.text": "Awesome Learning..."}})