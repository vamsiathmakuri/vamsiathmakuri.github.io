import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: 'about-me.component.html',
    styleUrls: ['about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

    @ViewChild('scrollview') elementRef?: ElementRef<HTMLDivElement>;

    active: string = 'bio';

    constructor() { }

    ngAfterViewInit(): void {
        this.elementRef?.nativeElement.addEventListener('scroll', (e: any) => {
            const childs = [...e.target.children].map((data) => {
                return {
                    id: (data as HTMLElement).id,
                    height: (data as HTMLElement).offsetHeight
                }
            });
            
            const scrollHeight = e.target.scrollTop;

            let position = 0;
            let positionScroll = scrollHeight;

            for(const { id, height } of childs) {
                if(positionScroll > height) {
                    positionScroll -= height;
                    position++;
                } else {
                    if(height - positionScroll < height / 2) {
                        position++;
                    }
                    break;
                }
            }

            this.active = childs[position].id;
        });
    }

    ngOnInit() { }

    goTo(htmlId: string) {
        const element = document.getElementById(htmlId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}
