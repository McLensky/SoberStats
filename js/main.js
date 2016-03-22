//Document Ready
$(document).ready(function () {

    //Date Pickers 
    $(function () {
        $("#lastDrink").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $("#firstDrink").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        // Get Current Date        
        $("#todaysDate").datepicker({
            dateFormat: "dd-mm-yy"
        }).datepicker("setDate", "0");
    });


    //Main Page Animations
    $('#mainButton').click(function () {
        $('#p0').fadeOut(500, function () {
            $('#p1').fadeIn(500);
        })
    });

    $('#b1').click(function () {
        $('#p1').fadeOut(500, function () {
            $('#p2').fadeIn(500);
        })
    });

    $('#b2').click(function () {
        $('#p2').fadeOut(500, function () {
            $('#p3').fadeIn(500);
        })
    });

    $('#b3').click(function () {
        $('#p3').fadeOut(500, function () {
            $('#p4').fadeIn(500);
        })
    });

    $('#b4').click(function () {
        $('#p4').fadeOut(500, function () {
            $('#p5').fadeIn(500);
        })
    });

    $('#b5').click(function () {
        $('#p5').fadeOut(500, function () {
            $('#p6').fadeIn(500);
        })
    });

    $('#b6').click(function () {
        $('#p6').fadeOut(500, function () {
            $('#p7').fadeIn(500);
        })
    });

    $('#b7').click(function () {
        $('#p7').fadeOut(500, function () {
            $('#p8').fadeIn(500);
        })
    });

    $('#b8').click(function () {
        $('#p8').fadeOut(500, function () {
            $('#p9').fadeIn(500);
        })
    });

    $('#b9').click(function () {
        $('#p9').fadeOut(500, function () {
            $('#p10').fadeIn(500);
        })
    });

    $('#b10').click(function () {
        $('#p10').fadeOut(500, function () {
            $('#p0').fadeIn(500);
        })
    });

    //Days Since Quit Calc
    $(document).on('change', '#lastDrink', function () {
        var today = $('#todaysDate').datepicker('getDate');
        var end = $('#lastDrink').datepicker('getDate');
        var daysSinceQuit = Math.round((today - end) / 1000 / 60 / 60 / 24);
        $('#daysSinceQuit').text(daysSinceQuit);
    });

    //Days Drank Calc
    $(document).on('change', '#firstDrink', function () {
        var start = $('#firstDrink').datepicker('getDate');
        var end = $('#lastDrink').datepicker('getDate');
        var drinkingDays = Math.round((end - start) / 1000 / 60 / 60 / 24);
        $('#drinkingDays').html(drinkingDays);
    });


    //Standard Drink + cost Calculations
    $("#b2").click(function () {
        //variables
        var standardDrinks = 0;
        var averageCostCalc = 0;
        var moneySpent = 0;
        var moneySaved = 0;
        var beer = $('#beer').val();
        var wine = $('#wine').val();
        var spirits = $('#spirits').val();
        var daysSinceQuit = $('#daysSinceQuit').val();
        var drinkingDays = $('#drinkingDays').val();
        //calc for standard drinks
        standardDrinks = ((beer * 1.4) + (wine * 2.6) + (spirits * 2));
        standardDrinks.toFixed(1);
        $('#standardDrinks').val(standardDrinks);
        //Calc for cost
        // ASK ALBERT OR AVIEL HOW TO MANUALLY OVERRIDE THIS
        averageCostCalc = ((beer * 2.5) + (wine * 3) + (spirits * 3));
        averageCostCalc.toFixed(2);
        $('#averageCostCalc').text(averageCostCalc);



        //Average Cost Calc
        $("#b3").click(function () {
            var averageCost = $('#averageCost').val();

            var daysSinceQuit = $('#daysSinceQuit').val();

            //var drinkingDays = $('#drinkingDays').val();
            //Calc for money spent
            moneySpent = (averageCost * drinkingDays);
            moneySpent.toFixed(2);
            $('#moneySpent').text(moneySpent);

            //Calc for money saved
            moneySaved = (averageCost * daysSinceQuit);
            moneySaved.toFixed(2);
            $('#moneySaved').text(moneySaved);
        });

        //Length of time cost
        $("#b4").click(function () {
            var sixMonths = 0;
            var oneYear = 0;
            var fiveYears = 0;
            var tenYears = 0;
            var twentyYears = 0;
            var averageCost = $('#averageCost').val();
            var moneySpent = $('#moneySpent').val();
            var moneySaved = $('#moneySaved').val();

            //6 Months
            sixMonths = (averageCost * 180);
            sixMonths.toFixed(2);
            $('#sixMonths').text(sixMonths);

            //One Year
            oneYear = (averageCost * 365);
            oneYear.toFixed(2);
            $('#oneYear').text(oneYear);

            //Five Years
            fiveYears = (averageCost * 730);
            fiveYears.toFixed(2);
            $('#fiveYears').text(fiveYears);

            //Ten Years
            tenYears = (averageCost * 3650);
            tenYears.toFixed(2);
            $('#tenYears').text(tenYears);

            //Twenty Years
            twentyYears = (averageCost * 7300);
            twentyYears.toFixed(2);
            $('#twentyYears').text(twentyYears);

        });
    });

    //Sliders
    //Beer
    $(function () {
        var select = $("#beer");
        var slider = $("<div id='slider'></div>").insertAfter(select).slider({
            min: 0,
            max: 24,
            range: "min",
            value: select[0].selectedIndex + 1,
            slide: function (event, ui) {
                select[0].selectedIndex = ui.value - 1;
            }
        });
        $("#beer").change(function () {
            slider.slider("value", this.selectedIndex + 1);
        });
    });

    //Wine
    $(function () {
        var select = $("#wine");
        var slider = $("<div id='slider'></div>").insertAfter(select).slider({
            min: 0,
            max: 15,
            range: "min",
            value: select[0].selectedIndex + 1,
            slide: function (event, ui) {
                select[0].selectedIndex = ui.value - 1;
            }
        });
        $("#wine").change(function () {
            slider.slider("value", this.selectedIndex + 1);
        });
    });


    //Spirits
    $(function () {
        var select = $("#spirits");
        var slider = $("<div id='slider'></div>").insertAfter(select).slider({
            min: 0,
            max: 26,
            range: "min",
            value: select[0].selectedIndex + 1,
            slide: function (event, ui) {
                select[0].selectedIndex = ui.value - 1;
            }
        });
        $("#spirits").change(function () {
            slider.slider("value", this.selectedIndex + 1);
        });
    });
});