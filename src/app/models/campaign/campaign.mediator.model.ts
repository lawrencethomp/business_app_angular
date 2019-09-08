import { Contact } from '../contact/contact.model';
import { ContactHandler } from '../contact/contact.handler.model';


export class CampaignMediator {

    contactIDArray: any;
    contactArray: Array<Contact>;
    contactHandlerModel: ContactHandler;
    currentContact;
    contactPosition = 1;
    constructor(contactArray: Array<Contact>) {
        this.contactHandlerModel = new ContactHandler(contactArray);
        this.contactIDArray = this.contactHandlerModel.getTravelingSalesmanArray();
        this.contactArray = contactArray;
        this.currentContact = this.contactArray[1];
    }

    // service -> Mediator -> Component

    init() {

    }

    changeContact(direction: string) {
        if (direction === 'forward') {
            // const position = this.contactPosition + 1;
            const endPoint = this.contactArray.length - 1;
            if (this.contactPosition >= endPoint) {
                return;
            }
            this.contactPosition = this.contactPosition + 1;
            this.currentContact = this.contactArray[this.contactPosition];
        }
        if (direction === 'backward') {
            if (this.contactPosition === 1) {
                return;
            }
            this.contactPosition--;
            this.currentContact = this.contactArray[this.contactPosition];
        }
    }
}
