const borderRadiusRange = document.getElementById('borderRadiusRange');

borderRadiusRange.addEventListener('change', borderRadiusSliderChange);

function borderRadiusSliderChange(){
    let radius = borderRadiusRange.value;
    document.getElementById("borders1").style.borderRadius = radius + "px";
    document.getElementById("outputText").innerHTML = "Radius value: " + radius + "px";
}