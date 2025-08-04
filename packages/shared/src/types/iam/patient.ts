import { IPatientCorporationBody } from '../corporation';

import { ITag } from './tag';
import { IAddress, IAddressDto } from './address';
import { ICountry, IdNumber, IPhone } from './common';
import { ICommonTerm, IOptionType } from '../common';
import { IFile } from '../file';
import { IParams } from '@manadr/core';

export interface IEmergency {
  name: string;
  phoneNumber: string;
  phoneCountryCode: string;
  relationCode: string;
}

export type IOccupation = ICommonTerm;
export type IRace = ICommonTerm;
export type IRelation = ICommonTerm;
export interface ILanguage extends ICommonTerm {
  phoneCountryCode?: string;
}

export interface IPatientDto {
  id: string;
  nricNo: string;
  cpfAccountNo?: string;
  manadrPatientId?: string;
  address: IAddressDto;
  birthCountry?: ICountry;
  createdAt: string;
  deletedAt: string;
  dob: string;
  birthTime?: string;
  email: string;
  emergencyContact: IEmergency;
  fullname: string;
  gender: string;
  idNumber?: IdNumber;
  isRefined: boolean;
  isActive: boolean;
  language?: ILanguage;
  maritalStatusCode: string;
  nationalCountry?: ICountry;
  nationalityCountryCode: string;
  occupation: IOccupation;
  phone?: IPhone;
  race?: IRace;
  religion: IRelation;
  religionCode?: string;
  residencyStatusCode: string;
  updatedAt: string;
  hsgStatus?: string;
  avatar?: IFile;
  lastVisitedAt?: string;
  props?: {
    isMerged?: boolean;
    mergingInfo?: {
      at?: string;
      by?: string;
      to?: string;
    };
  };
  schemes?: IPatientSchemeDto[];
  tags: ITag[];
  contacts: IContact[];
  glocoKey?: { patientId: string };
  dataSource: string;
}

export interface IPatient extends IPatientDto {
  address: IAddress;
  gender: string;
  age: string;
  schemesLabel?: string;
  eligibleForHsgReferrals?: boolean;
  manadrId?: number;
}

export interface IPatientDemographicBody extends IPatientBody {
  family: IAddFamilyMemberForm[];
  familyDirty?: boolean;
}

export interface IContact {
  phoneNumber?: string;
  phoneCountryCode?: string;
  name?: string;
  key?: string;
}
export interface IPatientBody {
  id?: string;
  address: IAddress | undefined | null;
  isNextOfKin?: boolean;
  birthCountryCode?: string;
  createdAt?: string;
  selectedPatient?: IPatient;
  deletedAt?: string;
  dob?: string;
  birthTime?: string;
  email: string;
  fullname?: string;
  gender?: string;
  idNumber?: IdNumber;
  isActive?: boolean;
  languageCode?: string;
  maritalStatusCode?: string;
  occupationCode?: string;
  phone?: IPhone;
  raceCode?: string;
  religionCode?: string;
  residencyStatusCode?: string;
  nationalCountryCode?: string;
  updatedAt?: string;
  emergencyName?: string;
  emergencyPhoneNumber?: string;
  emergencyPhoneCountryCode?: string;
  emergencyRelationCode?: string;
  cpfAccountNo?: string;
  contacts?: IContact[];
}

export interface IDrugAllergyItem {
  code: string;
  description: string;
}

export interface IDrugAllergyData {
  cmisAdverseReaction: IDrugAllergyItem[];
  cmisDrug: IDrugAllergyItem[];
  cmisDrugProbability: IDrugAllergyItem[];
  cmisReactionOutcome: IDrugAllergyItem[];
  cmisDrugType: IDrugAllergyItem[];
}

export interface IDrugAllergyBody {
  drugCode?: string;
  visitId?: string;
  drug: string;
  reactionCode?: string;
  reaction?: string;
  onsetDate: string | null;
  reactionOutcomeCode?: string;
  reactionOutcome?: string;
  drugProbability?: string;
  drugProbabilityCode?: string;
  remarks: string | null;
}
export interface IDrugAllergyResponse extends IDrugAllergyBody {
  id: string;
  patientId: string;
}

export interface IMedicalHistoryBody {
  medicalHistory: string;
  familyHistory: string;
  socialHistory: string;
}

export interface IPatientQueryParams {
  page?: string | number;
  pageSize?: string | number;
  searchTerm?: string;
  withDeactivated?: boolean;
  hsgStatus?: string;
  countTotal?: boolean;
}

export interface IPatientOrdersParams extends IParams {
  doctorId?: string;
}

export interface IAddFamilyMemberForm {
  dob?: string;
  fullname: string;
  idNumber?: IdNumber;
  phone?: IPhone;
  cpfAccountNo?: string;
  relationCode?: string;
  gender?: string;
  address?: IAddress | null;
  isNextOfKin?: boolean;
}

export interface IFamilyMember extends IAddFamilyMemberForm {
  id?: string;
}
export interface IPatientSchemeDto {
  id: string;
  name: string;
  code: string;
  validFrom: string | undefined;
  validTo: string | undefined;
}

export interface IPatientScheme extends IPatientSchemeDto {
  schemesLabel?: string;
}

export interface IPatientStats {
  totalAmountPayable: number;
  totalAmountPaid: number;
  totalAmountClaiming: number;
  totalAmountClaimed: number;
  total: number;
}

export interface IAddPatientSchemeForm {
  code: string | undefined;
  validFrom: string | undefined | null;
  validTo: string | undefined | null;
}

export interface IPatientMedicationFormBody {
  id?: string;
  medicineCode?: string | number;
  medicine?: string;
  formCode?: string;
  form?: IOptionType;
  strength?: string | null;
  strengthUnitCode?: string;
  strengthUnit?: IOptionType;
  dose?: string | null;
  doseUnitCode?: string;
  doseUnit?: IOptionType;
  routeCode?: string;
  route?: IOptionType;
  frequencyCode?: string;
  frequency?: IOptionType;
  reasonForUseCode?: string;
  reasonForUse?: IOptionType;
  note?: string;
  status: string;
  visitId?: string;
}

export interface IPatientMedicationBody {
  medicineCode?: string | number;
  medicine?: string;
  formCode?: string;
  form?: string;
  strength?: string | null;
  strengthUnitCode?: string;
  strengthUnit?: string;
  dose?: string | null;
  doseUnitCode?: string;
  doseUnit?: string;
  routeCode?: string;
  route?: string;
  frequencyCode?: string;
  frequency?: string;
  reasonForUseCode?: string;
  reasonForUse?: string;
  note?: string;
  status: string;
  visitId?: string;
  visitDate?: string;
}
export interface IPatientMedication extends IPatientMedicationBody {
  id: string;
}

export interface ResponsePatientType {
  data?: IPatient;
}

export interface IGeneralNoteBody {
  content: string;
}

interface ICreatedBy {
  id: string;
  createdAt: string;
  updatedAt: string;
  fullname: string;
  mcr: string;
  isActive: boolean;
  isProvider: boolean;
}

export interface IGeneralNote {
  id: string;
  content: string;
  updatedAt: string;
  createdBy: ICreatedBy;
  updatedBy: ICreatedBy;
}

export interface IPatientData extends IPatientBody {
  schemes: Array<IAddPatientSchemeForm>;
  family: Array<IAddFamilyMemberForm>;
  corporations: Array<IPatientCorporationBody>;
}
