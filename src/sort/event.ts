export type OnSwap<Value> = (swap: SortSwap<Value>) => void;

export interface SortSwap<Element> {
    i: {
        index: number;
        value: Element;
    };
    j: {
        index: number;
        value: Element;
    };
}