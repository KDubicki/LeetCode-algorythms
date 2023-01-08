function maxPoints(points: number[][]): number {
    if (points.length < 3) return points.length;

    return points.reduce((maxPointsOnLine, point1, i) => {
        const slopes: { [key: string]: number } = {};
        let overlap = 0;
        for (let j = i + 1; j < points.length; j++) {
            const point2 = points[j];
            if (point1[0] === point2[0] && point1[1] === point2[1]) {
                overlap++;
                continue;
            }
            let key: string;
            if (point1[0] === point2[0]) key = "vertical";
            else {
                const slope = (point1[1] - point2[1]) / (point1[0] - point2[0]);
                key = slope.toString();
            }
            slopes[key] = (slopes[key] || 0) + 1;
        }
        const pointsOnLine = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0) + overlap + 1;
        return Math.max(maxPointsOnLine, pointsOnLine);
    }, 0);
}