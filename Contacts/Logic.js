//$(document).ready(function() {
var list = [];
//});

//Create object that stores all values. Loop through array and show values.
$("#contact").on('submit',function(e) {
    e.preventDefault();
    var contact = {
        name: e.target.name.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
    };
    list.push(contact);
    display();
});

function display() {
    for (var i = 0; i < list.length; i++) {
        console.log(i);
        //$("#contactList").append(list[i]);
    }
};