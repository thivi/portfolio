declare module "@citation-js/core" {
    export class Cite {
        constructor(input: string | object);
        toBibTeX(): string;
        toAPA(): string;
        toMLA(): string;
        // Add other citation styles as needed
    }
}
