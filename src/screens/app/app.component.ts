import { NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    skills = [
        'Teamwork',
        'Problem solving',
        'Continuous learning',
        'Agile methodologies',
        'Web development',
        'Mobile development',
        'APIs',
        'Version control',
        'Code review',
        'CI/CD',
        'DevOps',
        'Cloud computing',
        'UX/UI',
        'Performance',
        'Responsive design',
        'Scalability',
        'Microservices',
        'Machine learning',
    ]
}
