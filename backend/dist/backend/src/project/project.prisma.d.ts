import { PrismaProvider } from 'src/db/prisma.provider';
export declare class ProjectProvider {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
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
    getProjectById(id: number): Promise<({
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
