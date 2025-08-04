export interface ITag {
  id: string;
  isSystem: boolean;
  colorhex: string;
  name: string;
  type: 'visit' | 'appointment' | 'patient';
  createdBy?: string;
  updatedBy?: string;
  updatedAt: string;
  isTaggable: boolean;
  isUntaggable: boolean;
}
