import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-me',
    templateUrl: 'contact-me.component.html',
    styleUrls: ['contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

    name: string = '';
    email: string = '';
    message: string = '';
    date: Date = new Date();

    submission: boolean = false;

    constructor() { }

    ngOnInit() { }

    formUrl = () => `https://docs.google.com/forms/d/e/1FAIpQLSfKBoj0_62BfEP31zGu8ivUUPRS2pWMX64ZqMijERwz6X6MlA/formResponse?&submit=Submit?usp=pp_url&entry.1766847072=${encodeURI(this.name)}&entry.290273167=${encodeURI(this.email)}&entry.895993157=${encodeURI(this.message)}`;

    submitResponse() {
        if(this.name === '' || this.email === '' || this.message === '') return;

        fetch(this.formUrl(), {
            method: 'GET',
        }).then((response) => {}).catch(() => {}).finally(() => {
            this.submission = true;
        });
    }

    clear() {
        this.name = '';
        this.email = '';
        this.message = '';
        this.submission = false;
    }
}
