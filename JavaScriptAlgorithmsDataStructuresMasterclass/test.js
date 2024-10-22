var canCompleteCircuit = function (gas, cost) {
    let startIndex = getStartIndex(gas, cost)
    if (startIndex == -1) return -1
    let gasLen = gas.length 
    let i = startIndex
    let gasValue = gas[i]
    while (gasLen) {
        if (i == gas.length - 1) {
            gasValue = gasValue - cost[i]
            if (gasValue > 0) gasValue += gas[0]
            i = 0
        } else {
            gasValue += - cost[i]
            if (gasValue > 0) gasValue += gas[i + 1]
            i++
        }
        if (gasValue <= 0) return -1
        gasLen--
    }
    if (gasValue == 0) return -1
    return startIndex
};
function getStartIndex(gas, cost) {
    let targetIndex = -1;
    let maxValue = 0;
    for (let i = 0; i < gas.length; i++) {
        let gasValue
        if (gas[i] - cost[i] <= 0) {
            continue
        }
        if (i == gas.length - 1) {
            gasValue = gas[i] - cost[i] + gas[0]
        }
        else {

            gasValue = gas[i] - cost[i] + gas[i + 1]
        }
        if (gasValue > maxValue) {
            maxValue = gasValue
            targetIndex = i
        }
    }
    return targetIndex

}
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
//4+0=4


//4-2+4=6
//6-5+5=6
//6-4+3=5
//5-3+1=3
//3-4
