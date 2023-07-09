import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    categories = [{
        name: 'Angular',
        selected: false
    }, {
        name: 'Node JS',
        selected: false
    }, {
        name: 'React Native',
        selected: false
    }, {
        name: 'TypeScript',
        selected: false
    }, {
        name: 'JavaScript',
        selected: false
    }];

    projects = [{
        id: '_dev-space',
        name: 'DevSpace',
        tags: ['Angular', 'TypeScript'],
        description: `Developers' 👨🏽‍💻 Journal Application built using Angular 11, Monaco Editor for Code Editor and Intellisense, QuillJS for rich-text editor`,
        image: 'https://opengraph.githubassets.com/a51ff2caa193fbe9cd10bb687b565b470175f74104c6b70c9ebc7f4c392ac615/vamsiathmakuri/dev-space',
        link: 'https://vamsiathmakuri.github.io/devspace/',
        code: 'https://github.com/vamsiathmakuri/dev-space'
    }, {
        id: '_sqs-poll',
        name: 'SQS Poll',
        tags: ['Node JS', 'JavaScript'],
        description: `|Under Development| Wrapper for AWS SQS Http Implementation, Using RxJS`,
        image: 'https://opengraph.githubassets.com/674b2f91455557eb32080221dd5cdd0c23a69ae887994b690b38b0e4fea33834/vamsiathmakuri/sqs-poll',
        code: 'https://github.com/vamsiathmakuri/sqs-poll',
        underDevelopment: true,
    }, {
        id: '_magneto',
        name: 'Mangeto UI',
        tags: ['Angular', 'TypeScript'],
        description: `|Under Development| UI Components Framework for Angular 12+. Modular Theming with Realtime Custom Theme Builder`,
        image: 'https://opengraph.githubassets.com/4cb2dc5c8314b19bf7bfc8a24d35847a07bcbce3a1d5e514c3bb66178918becb/vamsiathmakuri/magneto-ui',
        link: 'https://vamsiathmakuri.github.io/magneto/',
        code: 'https://github.com/vamsiathmakuri/magneto-ui',
        underDevelopment: true,
    }];

    originalProjects = this.projects;

    constructor() { }

    ngOnInit() {}

    updateFilter() {
        const selectedCategories = this.categories.filter(category => category.selected).map(category => category.name);
        if(selectedCategories.length === 0) {
            this.projects = this.originalProjects;
            return;
        }
        
        this.projects = this.originalProjects.filter(project => {
            return project.tags.some(tag => selectedCategories.includes(tag));
        });
    }
}
