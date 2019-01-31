import InsertionSort from "./insertionSort";

describe("insetionSort test", () => {
    test("confirm that correct sorted array will be returned", ()=> {
        const array = [91, 921, 1000, 5, 2];
        InsertionSort({
            array
        });

        expect(array).toEqual([2, 5, 91, 921, 1000]);

    });
    test("confirm that if the sort process is correct", () =>{

        const changesOnSwap: number[][] = [];
        const array = [91, 921, 1000, 5, 2];

        InsertionSort({
            array,
            OnSwap: () => changesOnSwap.push([...array])
        });

        expect(changesOnSwap).toEqual(
            [
                [91, 921, 5, 1000, 2],
                [91, 5, 921, 1000, 2],
                [5, 91, 921, 1000, 2],
                [5, 91, 921, 2, 1000],
                [5, 91, 2, 921, 1000],
                [5, 2, 91, 921, 1000],
                [2, 5, 91, 921, 1000]
            ]
        );
    });
})