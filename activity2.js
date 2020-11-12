function back(){
    window.location="activity_1.html";
}
function getscore(){
    score=localStorage.getItem("scorekey");
    document.getElementById("output").innerHTML="<h1>Score:"+score+"</h1>";
}