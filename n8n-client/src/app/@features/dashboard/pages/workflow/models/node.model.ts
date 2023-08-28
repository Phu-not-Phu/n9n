export interface NodeModel {
    id?: string;
    name: string;
    type: string;
    disabled?: boolean;
    notesInFlow: boolean;
    notes: string;
    typeVersion: number;
    executeOnce: boolean;
    alwaysOutputData: boolean;
    retryOnFail: boolean;
    maxTries: number;
    waitBetweenTries: number;
    continueOnFail: boolean;
    position: [number, number];
    parameters: {};
    credentials: {};
    createdAt: string;
    updatedAt: string;
}

export interface NodeSocketsType {
    inputs?: string[];
    outputs?: string[];
}

