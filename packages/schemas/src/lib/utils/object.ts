import {Maybe} from "./logic";

export type PartialNull<T> = {
    [P in keyof T]: Maybe<T[P]>;
};

export type RecordToEnum<
    T extends Record<
        string | number | symbol,
        string | number | symbol | boolean
    >
> = T[keyof T];

export type Required<T> = {
    [P in keyof T]-?: T[P];
};

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;