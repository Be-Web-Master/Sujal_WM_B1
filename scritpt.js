const studentsMarks = [
    [80, 70, 55],
    [45, 90, 75],
    [70, 60, 60]
];

function calculateQuizResults(studentsMarks) {
    let pass = 200, resultArr = [];
    for (let i = 0; i < studentsMarks.length; i++) {
        let totalMark = 0;
        for (let j = 0; j < studentsMarks[i].length; j++) {
            totalMark += studentsMarks[i][j];
        }
        
        if (totalMark >= pass) resultArr[i] = [totalMark,"pass"];
        else resultArr[i] = [totalMark, "fail"];
    }
    console.log(resultArr);
}

calculateQuizResults(studentsMarks)