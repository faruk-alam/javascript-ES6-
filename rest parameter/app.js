
function sortname(... names){
    return names.sort();
}
document.write(sortname("hdshshhdh","mcdjd","hdhidd","dskljjjdj")+ "<br>");
document.write(sortname("moti","saila","abir","prianka")+ "<br>");

// Another types of rest parameters

function Myrestparameter(a,b, ... args){
    return args;
}
document.write(Myrestparameter(3,6,9,7,19,54,87));