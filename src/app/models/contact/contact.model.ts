import { Deserializable } from './deserializable.model';
// TODO: figure out preferences
export class Contact implements Deserializable {
    // TODO: Actually use this.
     firstName: string;
     lastName: string;
     address: string;
     email: string;
     phoneNumber: string;
     pronoun: string;
     additionalNotes: string;
     geoLocation_lat: string;
     objectID: string;
     city: string;
     state: string;
     lastEdited: string;
     geoLocation_lng: string;
     zipcode: string;
     addedBy: string;
     timeAdded: string;
     preferredName: string;
     _id: string;
    //  _preferences: Object;
    //  _supportACA: string;
    //  _votedInMidterms: string;
    //  _politicalViews: string;
    //  _supportM4A: string;
    //  _income: string;

    // TODO: make additional notes its own object
    // TODO: make nested items, this is confusing
    
    constructor(
        firstName: string,
        lastName: string,
        address: string,
        email: string,
        phoneNumber: string,
        pronoun: string,
        additionalNotes: string,
        geoLocation_lat: string,
        geoLocation_lng: string,
        city: string,
        state: string,
        lastEdited: string,
        zipcode: string,
        addedBy: string,
        timeAdded: string,
        preferredName: string,
        _id: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.pronoun = pronoun;
        this.additionalNotes = additionalNotes;
        this.geoLocation_lat = geoLocation_lat;
        this.geoLocation_lng = geoLocation_lng;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.addedBy = addedBy;
        this.lastEdited = lastEdited;
        this.timeAdded = timeAdded;
        this.preferredName = preferredName;
        this._id = _id;
        // this._preferences = {
        //       this._supportACA = supportACA,
        //       this._supportM4A = supportM4A,
        //       this._votedInMidterms = votedInMidterms,
        //       this._politicalViews = politicalViews,
        //       this._income = income;
        // };

        this.objectID = this.makeid();
    }
    // getFirstName(): string {
    //     return this.firstName;
    // }

    // set firstName(name) {
    //     this.firstName = name;
    // }

    // getFullName() {
    //     return this.firstName + ' ' + this.lastName;
    // }

    // get lastName(): string {
    //     return this.lastName;
    // }

    // set lastName(name) {
    //     this.lastName = name;
    // }

    // get address(): string {
    //     return this.address;
    // }

    // set address(address) {
    //     this.address = address;
    // }

    // get email(): string {
    //     return this.email;
    // }

    // set email(email) {
    //     this.email = email;
    // }

    // get phonenumber(): string {
    //     return this.phonenumber;
    // }

    // set phonenumber(phonenumber) {
    //     this.phonenumber = phonenumber;
    // }

    // get pronoun(): string {
    //     return this.pronoun;
    // }

    // set pronoun(pronoun) {
    //     this.pronoun = pronoun;
    // }

    // get additionalNotes(): string {
    //     return this.additionalNotes;
    // }
    // set additionalNotes(notes) {
    //     this._additionalNotes = notes;
    // }

    // get geoLocation_lat(): string {
    //     return this._geoLocation_lat;
    // }

    // set geoLocation_lat(_geoLocation_lat) {
    //     this._geoLocation_lat = _geoLocation_lat;
    // }

    // get geoLocation_lng(): string {
    //     return this._geoLocation_lng;
    // }

    // set geoLocation_lng(_geoLocation_lng) {
    //     this._geoLocation_lng = _geoLocation_lng;
    // }

    /***
     *  @function getLatitude
     *  @returns String
     */
    // getLatitude(point: string) {
    //     const geo = this._geoLocation.split(', ');
    //     switch (point) {
    //         case 'latitude':
    //             return geo[0];
    //         case 'longitude':
    //             return geo[1];
    //         }
    // }

    /***
     *  @function generateID - generate the ID for the contact.
     *  @returns String
    */
    makeid() {
        var text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 7; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }

}
