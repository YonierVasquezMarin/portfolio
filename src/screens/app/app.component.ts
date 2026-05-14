import { NgFor } from '@angular/common'
import { Component, HostListener, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

interface NavItem {
    label: string
    href: string
}

interface Highlight {
    title: string
    description: string
    cta: string
    icon: string
}

interface Experience {
    imgUrl: string
    imgAlt: string
    title: string
    date: string
}

interface Project {
    imgUrl: string
    imgAlt: string
    title: string
    url: string
    date: string
    tag: string
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    scrolled = signal(false)

    navItems: NavItem[] = [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Skills', href: '#skills' },
    ]

    highlights: Highlight[] = [
        {
            title: 'Desarrollo Frontend',
            description:
                'Interfaces modernas con Angular y React, enfocadas en accesibilidad, performance y una experiencia de usuario impecable.',
            cta: 'Conocer más',
            icon: 'frontend',
        },
        {
            title: 'Backend & APIs',
            description:
                'Servicios robustos y escalables con APIs limpias, integraciones con bases de datos y arquitectura orientada a microservicios.',
            cta: 'Ver detalles',
            icon: 'backend',
        },
        {
            title: 'DevOps & Cloud',
            description:
                'Pipelines de CI/CD, despliegues continuos y soluciones en la nube para llevar el producto del repositorio a producción.',
            cta: 'Explorar',
            icon: 'cloud',
        },
    ]

    skills: string[] = [
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

    experiences: Experience[] = [
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
            date: '2022 - 2024',
        },
        {
            imgUrl: 'img/sap-b1.webp',
            imgAlt: 'SAP B1',
            title: 'Ingeniero de software, Consensus S.A.',
            date: '2024 - presente',
        },
    ]

    projects: Project[] = [
        {
            imgUrl: 'img/airplane.png',
            imgAlt: 'Airplane',
            title: 'SurAmerica Airlines',
            url: 'https://suramerica-airlines.netlify.app/',
            date: '2021',
            tag: 'Web app',
        },
        {
            imgUrl: 'img/movil-aplication.png',
            imgAlt: 'Mobile aplication',
            title: 'Fundamentals of Progressive Web Apps',
            url: 'https://yoniervasquezmarin.github.io/Mi-app-PWA/',
            date: '2021',
            tag: 'PWA',
        },
        {
            imgUrl: 'img/economics.png',
            imgAlt: 'Economics',
            title: 'Economic calculator',
            url: 'https://calculadora-financiera.netlify.app/',
            date: '2021',
            tag: 'Finance',
        },
    ]

    stats = [
        { value: '4+', label: 'Años de experiencia' },
        { value: '18+', label: 'Skills dominadas' },
        { value: '10+', label: 'Proyectos entregados' },
    ]

    @HostListener('window:scroll')
    onScroll() {
        this.scrolled.set(window.scrollY > 20)
    }

    openProject(url: string) {
        window.open(url, '_blank')
    }
}
