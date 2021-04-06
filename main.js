function borderRadiusSliderChange(){
    let radius = document.getElementById("borderRadiusRange").value;
    document.getElementById("borders1").style.borderRadius = radius + "px";
    document.getElementById("outputText").innerHTML = "Radius value: " + radius + "px";
}