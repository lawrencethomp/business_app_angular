"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, address, email, phonenumber, pronoun, additionalNotes, geoLocation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phonenumber = phonenumber;
        this.pronoun = pronoun;
        this.additionalNotes = additionalNotes;
        this.geoLocation = geoLocation;
    }
    return Contact;
}());
exports.Contact = Contact;
