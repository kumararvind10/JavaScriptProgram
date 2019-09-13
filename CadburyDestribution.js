function cadBurryProblem() {

    let totalNumberOfStudentsDistributed = 0;
    for (let i = 5; i <= 6; i++) {
        for (let j = 3; j <= 4; j++) {
            console.log(" i * j =" + i + " * " + j + " =" + i * j);

            let studDistrubuted = noOfStudentDistributed(i, j);
            console.log("No of student got cadbery =" + studDistrubuted)
            totalNumberOfStudentsDistributed += studDistrubuted;

        }

    }
    return totalNumberOfStudentsDistributed;
}


function noOfStudentDistributed(i, j) {
    let count = 0;

    do {
        if (i == 1 && j == 1) {
            console.log("i==j returning 1");
            i = 0;
            j = 0;
            count++;
        } else if (i > j) {
            i = i - j;
            console.log("Remaning size =" + i + "*" + j);
            count++;

        } else {
            j = j - i
            console.log("Remaining size =" + i + "*" + j);
            count++;
        }

    } while (i != 0 && j != 0)

    return count;

}


console.log(cadBurryProblem(5, 6, 3, 4));