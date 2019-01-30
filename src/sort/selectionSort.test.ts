import selectionSort from "./selectionSort";

describe("selectionSort test", () => {
    test("confirm that correct sorted array will be returned", () => {

        const array = [7,3,2,4,5,42];
        selectionSort({
            array
        });
        expect(array).toEqual([2,3,4,5,7,42]);
    });

    test("", () => {

        const changesOnSwap: number[][] = [];
        const array = [7,3,2,4,5,42];

        selectionSort({
            array,
            OnSwap: () => changesOnSwap.push([...array])
        });

        expect(changesOnSwap).toEqual(
            [
                [ 2, 3, 7, 4, 5, 42 ],
                [ 2, 3, 4, 7, 5, 42 ],
                [ 2, 3, 4, 5, 7, 42 ]
            ]
        );

    });
})