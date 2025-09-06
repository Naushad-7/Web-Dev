class Students{

    pass = 80;
    avg = 30 ;
    fail = 20;


    clearTheExam()
    {
        console.log("The number of the student that pass the exam = ", this.pass);

    }

    avgStudent()
    {
        console.log("The number of the student that get the average marks = ", this.avg);

    }

    failedStudent()
    {
        console.log("The number of the student that failed the exam = " , this.fail);

    }

}


let result = new Students;

result.clearTheExam();
result.avgStudent();
result.failedStudent();