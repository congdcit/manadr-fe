import { ICountry } from './common';
export interface IAddressDto {
    blockNo?: string;
    building?: string;
    floorNo?: string;
    name?: string;
    postalCode?: string;
    street?: string;
    unitNo?: string;
    countryCode?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    city?: string;
    state?: string;
    country?: ICountry;
}
export interface IAddress extends IAddressDto {
    addressLabel?: string;
}
//# sourceMappingURL=address.d.ts.map