import { ProjectProvider } from './project.prisma';
export declare class ProjectController {
    private readonly repository;
    constructor(repository: ProjectProvider);
    getProjects(): Promise<{
        id: number;
        name: string;
        description: string;
        images: string[];
        level: number;
        type: string;
        highlight: boolean;
        repository: string;
    }[]>;
    getProjectById(id: string): Promise<({
        technologies: {
            id: number;
            name: string;
            description: string;
            highlight: boolean;
            image: string;
            projectId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        images: string[];
        level: number;
        type: string;
        highlight: boolean;
        repository: string;
    }) | null>;
}
