
var Tip=0;    
var billValue;
var numberOfPeople;
var customTip = 0;
$("#custom-tip").change(function(){
    customTip = parseFloat($("#custom-tip").val());
    Tip = customTip;
});

$("#button5").click(function() {
    $("#button5").toggleClass("selected");
    Tip = parseInt($("#button5").val().replace("%",""));
    $("#button10").removeClass("selected");
    $("#button15").removeClass("selected");
    $("#button25").removeClass("selected");
    $("#button50").removeClass("selected");
});
$("#button15").click(function() {
    $("#button15").toggleClass("selected");
    Tip = parseInt($("#button15").val().replace("%",""));
    $("#button10").removeClass("selected");
    $("#button5").removeClass("selected");
    $("#button25").removeClass("selected");
    $("#button50").removeClass("selected");
});
$("#button10").click(function() {
    $("#button10").toggleClass("selected"); 
    Tip = parseInt($("#button10").val().replace("%",""));
    $("#button5").removeClass("selected");
    $("#button15").removeClass("selected");
    $("#button25").removeClass("selected");
    $("#button50").removeClass("selected");
});
$("#button25").click(function() {
    $("#button25").toggleClass("selected"); 
    Tip = parseInt($("#button25").val().replace("%",""));
    $("#button10").removeClass("selected");
    $("#button15").removeClass("selected");
    $("#button5").removeClass("selected");
    $("#button50").removeClass("selected");
});
$("#button50").click(function() {
    $("#button50").toggleClass("selected"); 
    Tip = parseInt($("#button50").val().replace("%",""));
    $("#button10").removeClass("selected");
    $("#button15").removeClass("selected");
    $("#button25").removeClass("selected");
    $("#button5").removeClass("selected");
});
$("#Bill-value").change(function(){
    billValue = parseFloat($("#Bill-value").val());
});
$("#number-people").change(function(){
    numberOfPeople = parseInt($("#number-people").val());
    document.getElementById("zero").style.display = "none";
});
$("#Reset-button").click(function() {
    billValue=0;
    document.getElementById("custom-tip").value="";
    document.getElementById("number-people").value="";
    document.getElementById("tip-val").innerHTML="$0.00";
    document.getElementById("total-val").innerHTML="$0.00";
    document.getElementById("Bill-value").value="";
    $("#button5").removeClass("selected");
    $("#button10").removeClass("selected"); 
    $("#button15").removeClass("selected");
    $("#button25").removeClass("selected");
    $("#button50").removeClass("selected");
    document.getElementById("zero").style.display = "none";
});
$("#calculate-button").click(function(){
    if (!numberOfPeople) {
        document.getElementById("zero").style.display = "inherit";
    }else if (billValue) {
        var tipPerPerson = ((billValue * (Tip/100)) / numberOfPeople);
        var totalPerPerson = tipPerPerson + (billValue / numberOfPeople);
        document.getElementById("tip-val").innerHTML = "$" + ((tipPerPerson.toFixed(2)).toString());
        document.getElementById("total-val").innerHTML = "$" + ((totalPerPerson.toFixed(2)).toString());
    }
})