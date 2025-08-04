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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: Record<string, any>;
  tags: string[];
}
