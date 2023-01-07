function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;

    gas.forEach((station, i) => {
        totalGas += station - cost[i];
        currentGas += station - cost[i];
        if (currentGas < 0) {
            start = i + 1;
            currentGas = 0;
        }
    })

    return totalGas >= 0 ? start : -1;
};