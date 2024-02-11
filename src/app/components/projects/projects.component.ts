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
        id: '_genshin-impact-terminal',
        name: 'Genshin Impact Terminal',
        tags: ['React Native', 'TypeScript'],
        description: `Akasha Terminal Inspired React Native Mobile Application for Genshin Impact Wiki`,
        image: 'https://opengraph.githubassets.com/5898d143aff627e10c79f6594d10c895a253eca06e2fe2e2d7c151914f63ab35/vamsiathmakuri/genshin-impact-terminal',
        underDevelopment: true,
    }, {
        id: '_magneto',
        name: 'Mangeto UI',
        tags: ['Angular', 'TypeScript'],
        description: `UI Components Framework for Angular 12+. Modular Theming with Realtime Custom Theme Builder`,
        image: 'https://opengraph.githubassets.com/4cb2dc5c8314b19bf7bfc8a24d35847a07bcbce3a1d5e514c3bb66178918becb/vamsiathmakuri/magneto-ui',
        link: 'https://vamsiathmakuri.github.io/magneto/',
        code: 'https://github.com/vamsiathmakuri/magneto-ui',
        underDevelopment: true,
    }, {
        id: '_gi-scrapper',
        name: 'Genshin Impact Wiki Scrapper',
        tags: ['Node JS', 'TypeScript'],
        description: `Scrapper for Genshin Impact Wiki, Using Puppeteer`,
        image: 'https://opengraph.githubassets.com/33beea2b4a044be9a592c3ebefbe8e9f9bc988fc1e594661accb756189d38038/vamsiathmakuri/gi-scraper',
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
