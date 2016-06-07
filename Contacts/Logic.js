$(document).ready(function() {
	var contacts = [];
    var person = info;

    function info(Name, address, phone) {
        this.Name = Name;
        this.address = address;
        this.phone = phone;
    }

});

//Create object that stores all values. Loop through array and show values.
$("#contact_form").submit(function(e){
e.preventDefault();
var formData = {
	name: e.target.name.value,
	address: e.target.address,
	phone: e.target.phone,
}

});



var printPerson = function(person) {
    console.log(person.Name+" "+person.address + " " + person.phone);
};

var list = function() {
    var contactsLength = [];
    for (i = 0; i < contacts.length; i++) {
        printPerson(contacts[i])
    };

};