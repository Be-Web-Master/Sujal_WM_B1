const subjectMarks = {
    math: 80,
    science: 75,
    history: 70,
    english: 65,
    art: 72
};

function calculateAverageAndPercentage(subjectMarks) {
    const { math, science, history, english, art } = subjectMarks;
    const sum = math + science + history + english + art;
    const avg = (sum/5);
    const percent = (sum/400*100);
    return (`averageMarks: ${avg}, percentage: ${percent} `)
}

const result = calculateAverageAndPercentage(subjectMarks);
console.log(result);