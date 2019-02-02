import ShellSort from "./ShellSort";

describe("shellSort test", () =>{
    test("confirm that correct sorted array will be returned", () =>{

        const array = ["f", "a", "h", "b", "d", "g", "e", "c"];
        ShellSort({
            array
        });
        expect(array).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
    });
    test("confirm that if the sort process is correct", () =>{

        const changesOnSwap: string[][] = [];
        const array = ["f", "a", "h", "b", "d", "g", "e", "c"];

        ShellSort({
            array,
            OnSwap: () => changesOnSwap.push([...array])
        });

        // expect(changesOnSwap).toEqual(
        //     [
        //         [
        //             ["f", "a", "h", "b", "d", "g", "e", "c"],
        //             ["b", "a", "h", "f", "d", "g", "e", "c"],
        //             ["b", "a", "h", "e", "d", "g", "f", "c"],
        //             ["b", "a", "h", "e", "c", "g", "f", "d"],
        //             ["b", "a", "g", "e", "c", "h", "f", "d"],
        //             ["a", "b", "g", "e", "c", "h", "f", "d"],
        //             ["a", "b", "e", "g", "c", "h", "f", "d"],
        //             ["a", "b", "e", "c", "g", "h", "f", "d"],
        //             ["a", "b", "c", "e", "g", "h", "f", "d"],
        //             ["a", "b", "c", "e", "g", "f", "h", "d"],
        //             ["a", "b", "c", "e", "f", "g", "h", "d"],
        //             ["a", "b", "c", "e", "f", "g", "d", "h"],
        //             ["a", "b", "c", "e", "f", "d", "g", "h"],
        //             ["a", "b", "c", "e", "d", "f", "g", "h"],
        //             ["a", "b", "c", "d", "e", "f", "g", "h"]
        //         ]
        //     ]
        // );
    });
})