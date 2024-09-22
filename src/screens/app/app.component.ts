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

    experiences = [
        {
            imgUrl: 'img/international.png',
            imgAlt: 'International',
            title: 'Curso intensivo desarrollo web, Argentina',
            date: '2020',
        },
        {
            imgUrl: 'img/computers.png',
            imgAlt: 'Computers',
            title: 'Ingeniería en sistemas, Universidad de Caldas',
            date: '2020 - presente',
        },
        {
            imgUrl: 'img/teamwork.png',
            imgAlt: 'Teamwork',
            title: 'Desarrollador web, Opi Technologies',
            date: '2022 - presente',
        },
    ]
}
