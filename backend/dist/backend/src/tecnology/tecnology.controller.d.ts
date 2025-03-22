import { Technology } from '@core';
import { TechnologyPrisma } from './technology.prisma';
export declare class TechnologyController {
    private readonly repository;
    constructor(repository: TechnologyPrisma);
    getTechnologies(): Promise<{
        id: number;
        name: string;
        description: string;
        highlight: boolean;
        image: string;
        projectId: number | null;
    }[]>;
    getHighLightedTechnologies(): Promise<Technology[]>;
}
