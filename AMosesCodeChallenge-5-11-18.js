console.time("runTime");
(QuestionMarks = function(str){
var str="7?a??b4";
var success = true;

for(i = 0; i <= str.length; i ++){
    for(j = i+1; j < str.length; j++){
        if(Number(str[i]) + Number(str[j]) === 10){
           if(str.slice(i, j).split("?").length-1 == 3){
               success = true;
           }
        }
    }
}

console.log(success);
})();
console.timeEnd("runTime");