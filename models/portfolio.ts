export interface PortfolioPage {
    title: string;
    slug: string;
    shortTitle?: string;
}

export interface SocialLink {
    name: string;
    link: string;
}

export interface PresentationItem {
    slug: string;
    title: string;
    event: string;
    venue: string;
    date: string;
    slides: string;
    image: string;
    gallery: string[];
    description: string;
    type: string;
}

export interface PublicationItem {
    slug: string;
    title: string;
    publication: string;
    date: string;
    link: string;
    doi: string;
    citation: string;
    abstract: string;
    codeRepository: string;
    dataRepository: string;
    type: "Conference Paper" | "Journal Paper" | "Preprint";
    authors: string[];
}

export interface Award {
    name: string;
    year: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    grade: string;
    duration: string;
    description: string;
    awards: Award[];
    skills: string[];
    projects: string[];
    image: string;
}

export interface ExperienceItem {
    institution: string;
    position: string;
    duration: string;
    description: string;
    awards: Award[];
    skills: string[];
    projects: string[];
    image: string;
}

export interface BlogItem {
    name: string;
    link: string;
    description: string;
    image: string;
}

export interface Article {
    link: string;
    title: string;
    date: string;
    image: string;
}

export interface ProjectItem {
    slug: string;
    title: string;
    description: string;
    repository: string;
    image: string;
    publications: string[];
    type: "Academic" | "Work";
    year: string;
};

export interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
    credentialID: string;
    credentialURL: string;
    image: string;
};

export interface Skill {
    title: string;
    icon: string;
    description: string;
}

export interface Home extends PortfolioPage {
    shortTitle: string;
    salutation: string;
    profilePicture: string;
    description: string;
    interests: string[];
    socials: SocialLink[];
    intro: string;
    skills: Skill[];
};

export interface Presentations extends PortfolioPage {
    description: string;
    items: PresentationItem[];
};

export interface Publications extends PortfolioPage {
    description: string;
    items: PublicationItem[];
};

export interface Education extends PortfolioPage {
    description: string;
    items: EducationItem[];
};

export interface Experience extends PortfolioPage {
    description: string;
    items: ExperienceItem[];
};

export interface Blogs extends PortfolioPage {
    description: string;
    blogs: BlogItem[];
    articles: Article[];
};

export interface Vlogs extends PortfolioPage {
    description: string;
    items: Article[];
};

export interface Projects extends PortfolioPage {
    description: string;
    items: ProjectItem[];
};

export interface Certifications extends PortfolioPage {
    description: string;
    items: CertificationItem[];
};

export interface Portfolio {
    home: Home;
    presentations: Presentations;
    publications: Publications;
    education: Education;
    experience: Experience;
    blogs: Blogs;
    vlogs: Vlogs;
    projects: Projects;
    certifications: Certifications;
};
