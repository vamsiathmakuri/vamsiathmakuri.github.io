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

    constructor() { }

    ngOnInit() { }
}
