/* 18.1.2-Starting with Mongo JS
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// A. Use the command line to create a classroom database. 
use classroom;
// Insert entries for yourself and the people in your row in a students collection. 
// Each document should have:
db.classroom.insert([{'name': 'sean', 'rownumber':4, 'operating_system':'Win', 'hobbies':['music', 'weed', 'front-end']}, 
                    {'name': 'tony', 'rownumber':4, 'operating_system':'Mac', 'hobbies':['bass', 'surf', 'being an ass', 'talk a lot']}, 
                    {'name': 'melissa', 'rownumber':4, 'operating_system':'Mac', 'hobbies':['music', 'weed', 'front-end']}]); 
// 1. A field of name with the person's name.
// 2. A field of rownumber which will contain the row number that they are in.
// 3. A field of os which will contain the Operating System 
//    of the computer they are using: 'Mac', 'Win', etc
// 4. A field of hobbies with an array of the hobbies the person likes to do.

db.classroom.find({"rownumber":4});

// B. Use find commands to get:
// 1. A list of everyone in your row.
db.classroom.find({'name':'sean'})
// 2. An entry for a single person.

// 3. The entries for all the Mac users in your row. 

// Bonus:
// If you finish early, check out the MongoDB documentation 
// and figure out how to find users by an entry in an array.
db.classroom.find({},
    {
    _id:{}, 
    name:1, 
    hobbies: {$elemMatch:{eq:"music"}}});

