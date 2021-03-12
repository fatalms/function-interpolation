function basic(containerSelector, pointsData, dataSet) {
    const container = document.querySelector(containerSelector);

    const graph = Flotr.draw(container, pointsData, {
        yaxis: {
            max: dataSet.d,
            min: dataSet.c,
        },
        xaxis: {
            max: dataSet.b,
            min: dataSet.a,
        },
        grid: {
            minorVerticalLines: true,
        },
    });
}

export default basic;
