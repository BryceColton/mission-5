$("#calculate-btn").click(function () {
    const hours = $("#hours").val()

    let rate = $("#rate").val()

    let totalRate = hours * rate

    $("#total").val(totalRate) 

})