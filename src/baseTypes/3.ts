let some:unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some;
} else {
    console.error('Variable "some" does not have a type of string.');
}

export {};