import { Contact } from './contact.model';

export class ContactSerializer {
    constructor() {};
    fromJson(json: any): Contact {
        const contact = new Contact(
        json.firstName,
        json.lastName,
        json.address,
        json.email,
        json.phoneNumber,
        json.pronoun,
        json.additionalNotes,
        json.geoLocation_lat,
        json.geoLocation_lng,
        json.city,
        json.state,
        json.lastEdited,
        json.zipcode,
        json.addedBy,
        json.timeAdded,
        json.preferredName,
        json._id,
        );

        return contact;
    }
    toJson(contact: Contact): any {
        return {
            firstName: contact.firstName,
            lastName: contact.lastName,
            address: contact.address,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            pronoun: contact.pronoun,
            additionalNotes: contact.additionalNotes,
            geoLocation_lat: contact.geoLocation_lat,
            geoLocation_lng: contact.geoLocation_lng,
            city: contact.city,
            state: contact.state,
            lastEdited: contact.lastEdited,
            zipcode: contact.zipcode,
            addedBy: contact.addedBy,
            timeAdded: contact.timeAdded,
            preferredName: contact.preferredName,
            _id: contact._id
        };
    }
}
