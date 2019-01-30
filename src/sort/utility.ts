import { OnSwap } from "./event";

export function swap<Value>(
    arr:Value[],
    i: number,
    j: number,
    OnSwap: OnSwap<Value> = () => {}
){
    const oldIValue = arr[i];
    const oldJValue = arr[j];

    [arr[i], arr[j]] = [oldJValue, oldIValue];

    OnSwap({
        i: { index: i, value: oldIValue},
        j: { index: j, value: oldJValue}
    });

}