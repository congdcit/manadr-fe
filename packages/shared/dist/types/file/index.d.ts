import { BaseEntity } from '../common';
export interface IFile extends BaseEntity {
    createdBy: string;
    name: string;
    mime: string;
    size: number;
    extension: string;
    originalPath: string;
    previewPath: string;
    thumbPath: string;
    isPublic: boolean;
    description: string;
    meta: Record<string, any>;
    tags: string[];
}
//# sourceMappingURL=index.d.ts.map