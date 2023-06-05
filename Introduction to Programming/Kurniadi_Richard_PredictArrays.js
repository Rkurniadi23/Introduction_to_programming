var contactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
console.log(contactInfo[2]);
/* It will print out: 1234 Main Street because it is the 
third (index 2) character in the array */

var produce = ["apples", "oranges"];
var frozen = ["broccoli", "ice cream"];
frozen.push("hashbrowns");
console.log(frozen);
/* It will print out:
['broccoli', 'ice cream', 'hashbrowns'] because the push function adds
'hashbrowns into the end of frozen array */

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zorro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/* It will print out:
['Bambi','Beetlejuice','Toy Story','Zorro']
because the push function adds 'Zorro' into the end of movieLibrary array
and 'E.T' was replaced by 'Beetlejuice' */
