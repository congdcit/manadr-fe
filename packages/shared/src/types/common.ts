// Common Entity Types
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  tenantId: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: Array<{ label: string; value: string | number }>;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface ICommonTerm {
  code: string;
  term: string;
}
export interface IOptionType {
  label: string;
  value?: string | number | null;
}
