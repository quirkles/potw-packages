export type Empty<T extends null | undefined | void = null> = T;

export type Maybe<Thing, EmptyType extends Empty = Empty> = Thing | EmptyType;