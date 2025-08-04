import { IFile } from '../file';

export interface ICompany {
  id: number;
  name: string;
  createdBy: number;
  avatar: IFile;
}
