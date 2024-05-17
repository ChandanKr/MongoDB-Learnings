//! Chapter 7: Delete Operation in MongoDB

//? deleteOne() and deleteMany()

//======================================================
//! deleteOne()
//======================================================

//* Syntax:
// db.<collection-name>.deleteOne({filter});

//* Example:
// db.comments.deleteOne({_id: 7})

//=====================================================
//! deleteMany()
//=====================================================

//* Syntax:
// db.<collection-name>.deleteMany({"price": 120});

//* Example:
// db.product.deleteMany({price: 55})