function icecreamParlor(m: number, arr: number[]): number[] {
    // Write your code here
    let obj: { [key: number]: number } = {}
    let result: number[] = []
    for (var i in arr) {
        if (obj.hasOwnProperty(m - arr[i])) {
            result.push(obj[m - arr[i]])
            result.push(+i + 1)
            break
        }
        else {
            if (!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = +i + 1
            }
        }
    }
    return result
}
console.log(icecreamParlor(4,[1, 4, 5, 3,2]))