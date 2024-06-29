function mergeInterval(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = [];
    let last = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push([last[0], last[1]]);
            last = current;
        }
    }
    
    merged.push([last[0], last[1]]);
    
    return merged;
}

function gridlandMetro(n, m, k, track) {
    let trackObj = {};
    let result = BigInt(n) * BigInt(m); // Total cells in the grid
    
    // Store tracks in trackObj by row
    for (let i = 0; i < k; i++) {
        let row = track[i][0];
        let start = track[i][1];
        let end = track[i][2];
        
        if (trackObj.hasOwnProperty(row)) {
            trackObj[row].push([start, end]);
        } else {
            trackObj[row] = [[start, end]];
        }
    }
    
    let totalCoverCells = 0;
    
    // Calculate covered cells using merged intervals for each row
    for (let key in trackObj) {
        let mergedIntervals = mergeInterval(trackObj[key]);
        
        for (let interval of mergedIntervals) {
            totalCoverCells += (interval[1] - interval[0]) + 1;
        }
    }
    
    return (BigInt(n) * BigInt(m) - BigInt(totalCoverCells));
}

console.log(gridlandMetro(4,4,3,[[2,2,3],[3,1,4],[4,4,4]]))