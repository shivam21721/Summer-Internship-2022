const checkGrade = (marks, examType) =>{
    if((examType === "final" && marks >=90) || (marks >= 89 && examType != "final" ))
        return true;
    else return false;

};

console.log(checkGrade(95, "mid"));
console.log(checkGrade(89,"final"));