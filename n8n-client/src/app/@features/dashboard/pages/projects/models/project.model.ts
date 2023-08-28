export interface Project {
    id?: string;
    name: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export type FormExport<T> = Partial<{
    [P in keyof T]: T[P] | null;
}>;