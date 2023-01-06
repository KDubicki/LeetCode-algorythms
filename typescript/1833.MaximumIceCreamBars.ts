const maxIceCream = (costs: number[], coins: number): number => {
    let iceCreams = 0;
    costs.sort((a, b) => a - b).forEach(cost => {
        coins -= cost;
        if (coins < 0) return false;
        iceCreams++
    })

    return iceCreams;
};