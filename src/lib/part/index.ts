const printAllUniqueParts = (n: number): Array<any> => {

    let results: Array<any>;
    let p: Array<any>;


    results = [];

    // An array to store a partition
    p = new Array(n);

    // Index of last element in a
    // partition
    let k: number = 0;

    // Initialize first partition as
    // number itself
    p[k] = n;


    // while flag
    let searching = true;

    // This loop first prints current
    // partition, then generates next
    // partition. The loop stops when
    // the current partition has all 1s
    while (searching) {

        // print current partition
        // printArray(p, k + 1);
        results.push([...p])


        // Generate next partition

        // Find the rightmost non-one
        // value in p[]. Also, update
        // the rem_val so that we know
        // how much value can be
        // accommodated
        let rem_val: number = 0;

        while (k >= 0 && p[k] == 1) {
            rem_val += p[k];
            k--;
        }

        // If k < 0, all the values are 1 so
        // there are no more partitions
        if (k < 0) {

            searching = false;


        } else {


            // Decrease the p[k] found above
            // and adjust the rem_val
            p[k]--;
            rem_val++;

            // If rem_val is more, then the sorted
            // order is violated. Divide rem_val in
            // different values of size p[k] and copy
            // these values at different positions
            // after p[k]
            while (rem_val > p[k]) {
                p[k + 1] = p[k];
                rem_val = rem_val - p[k];
                k++;
            }

            // Copy rem_val to next position and
            // increment position
            p[k + 1] = rem_val;
            k++;

        }
    }


    return results;
};

const average = (nums:Array<any>):number =>{
    let sum = nums.reduce( (acc,val)=> acc+val)
    return sum/nums.length
}

const median = (nums:Array<any>):number =>{

    if(nums.length ===0) return 0;

    nums.sort(function(a,b){
        return a-b;
    });

    var half = Math.floor(nums.length / 2);

    if (nums.length % 2)
        return nums[half];

    return (nums[half - 1] + nums[half]) / 2.0;
}




export function part(n: number) {

    const solutions = []
    let curr = n;


    let res = []
    for (let i = 1; i <= n; i++) {
        let diff = n - i
        let count = 0

        let sol = [i]
        for (let j = 1; j <= (n - i); j++) {
            sol.push(i)
        }
        res.push(sol)

    }
    console.log(res)

    let unique: Set<number> = new Set([1, 2, 3])

}

part(4)