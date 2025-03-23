import { PrismaProvider } from '../db/prisma.provider';
export declare class TechnologyPrisma {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    getTechnologies(): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        highlight: boolean;
        projectId: number | null;
    }[]>;
    getHighLightedTechnologies(): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        highlight: boolean;
        projectId: number | null;
    }[]>;
}
