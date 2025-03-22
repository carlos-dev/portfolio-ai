import { PrismaProvider } from 'src/db/prisma.provider';
export declare class TechnologyPrisma {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    getTechnologies(): Promise<{
        id: number;
        name: string;
        description: string;
        highlight: boolean;
        image: string;
        projectId: number | null;
    }[]>;
    getHighLightedTechnologies(): Promise<{
        id: number;
        name: string;
        description: string;
        highlight: boolean;
        image: string;
        projectId: number | null;
    }[]>;
}
