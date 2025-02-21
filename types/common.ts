import { CountryCode } from "libphonenumber-js";

export type Country = {
  code: CountryCode;
  dialingCode: string;
};

export type Option = {
  id: string;
  name: string;
  status?: string;
  image?: string;
  children?: Option[];
};
