import linear_search from "./linear_search";

describe("test linear_serch.ts", () =>{
    test("expects no target return -1", () =>{
        
        const array = ["d","f","g","r","k","c","h","e"]

        const target = "a"
        
        let target_index = linear_search({
            array,
            target
        });

        expect(target_index).toEqual(-1);

    });
    test("expects string target return precise index number", () =>{
        
        const array = ["d","a" ,"f","g","r","k","c","h","e"]

        const target = "a"
        
        let target_index = linear_search({
            array,
            target
        });

        expect(target_index).toEqual(1);

    });
    test("expects number target return precise index number", () =>{
        
        const array = [6, 3, 9, 12, 346, 5, 4, 1234, 987]

        const target = 5
        
        let target_index = linear_search({
            array,
            target
        });

        expect(target_index).toEqual(5);

    });
})