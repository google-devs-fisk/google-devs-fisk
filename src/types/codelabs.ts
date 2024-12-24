export interface KeyLearning {
    content: string;
    icon?: string;
}

export interface Codelab {
    id: string;
    gcsUrl: string;
    title: string;
    keyLearnings: KeyLearning[];
    releasedDate: string;
    author?: string;
}

export interface CodelabsPageResponse {
    codelabs: Codelab[]
}