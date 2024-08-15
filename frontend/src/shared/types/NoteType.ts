export interface INoteType {
    id: number;
    title: string;
    description: string;
    isFavorite: boolean;
    color: string;
    createdAt: Date;
    updatedAt: Date;
}