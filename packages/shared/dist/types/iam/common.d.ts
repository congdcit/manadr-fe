export interface ICountry {
    code: string;
    phoneCountryCode: string;
    term: string;
}
export interface IPhone {
    phoneCountryCode?: string;
    phoneNumber?: string;
}
export interface IdNumber {
    code?: string;
    value?: string;
}
export interface IUser {
    accountType: string;
    createdAt: string;
    email: string;
    enable2fa: boolean;
    id: string;
    isActive: boolean;
    phone?: IPhone;
    props: {
        mustChangePassword: boolean;
        mustCreatePassword: boolean;
    };
    tenantId: string;
    updatedAt: string;
    internalId: number;
}
export interface IToken {
    accessToken: string;
    refreshToken: string;
    pubnubToken: string;
    fcm?: string;
}
//# sourceMappingURL=common.d.ts.map