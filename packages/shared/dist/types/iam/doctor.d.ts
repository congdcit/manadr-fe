import { BaseEntity } from '../common';
import { IFile } from '../file';
export interface IDoctorProfile extends BaseEntity {
    name: string;
    email: string;
    biography: string | null;
    phoneCountryCode: string;
    phoneNumber: string;
    officeHours: string;
    website: string;
    gender: string;
    dateOfBirth: string;
    address: string | null;
    payoutType: string;
    firstName: string;
    lastName: string;
    verificationStatus: number;
    visibleInApp: boolean;
    visibleInWeb: boolean;
    verifiedAt: string | null;
    ausSubsidyCovidIndex: number;
    sgpSubsidyForeignWorkerIndex: number;
    supportAscottIndex: number;
    currency: string;
    status: {
        finishedOnboarding: boolean;
    };
    signatureFileId: string | null;
    interests: string | null;
    headline: string;
    cover: IFile;
    workExperiences: IWorkExperience[];
}
export interface IWorkExperience {
    id: number;
    createdAt: string;
    updatedAt: string;
    companyName: string;
    companyAvatarFileId?: string;
    workCompany: {
        id: number;
        name: string;
        avatar: IFile | null;
        createdBy: number;
    };
    positions: IPosition[];
}
export interface IPosition {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    startDate: string;
    endDate: string | null;
}
export interface ISpecialty {
    code: string;
    createdAt: string;
    id: string;
    term: string;
    updatedAt: string;
}
export interface ICollege {
    name: string;
    id: string;
    graduatedAt: string;
}
export interface IQualification {
    name: string;
    issuedBy: string;
    id: string;
    issuedAt: string;
}
export interface IProfession {
    id: number;
    name: string;
    licenseNo: string;
    expire: string;
}
export interface ISpeciality {
    name: string;
    id: string;
}
export interface IDoctorTitle {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=doctor.d.ts.map