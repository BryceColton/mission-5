
// This jquery grabs the calculate button on the calcualte page and when it is clicked activates the function below
$("#calculate-btn").click(function () {
    // this grabs the amount of hours put in by the user
    const hours = $("#hours").val()

    //This grabs the rate which is a locked consistent rate of 25
    let rate = $("#rate").val()

    // this multiplies the rate by the amount of hour inputted by the user
    let totalRate = hours * rate

    // this inputs the total Rate into the total value
    $("#total").val(totalRate) 

})