export enum ECorporationEmploymentStatus {
  VALID = 'valid',
  INVALID = 'invalid',
}

export interface IPatientCorporationBody {
  corporationId: string;
  paymentPolicyId?: string;
  status: ECorporationEmploymentStatus;
  [key: string]: unknown;
}
