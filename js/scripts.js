$(function () {

    $('#resultsData').hide();
    /* $('input:checkbox.checkbox1').change(function () {
         var sThisVal = (this.checked ? $(this).val() : "");
         console.log(sThisVal);
     })*/

    /* $('.selection').on('click',function(){
         console.log($(".checkbox1").checked);
         if ($(".checkbox1").checked) {
             //Do stuff
             $(".collapse").collapse('toggle');
             $(".din1").hide();
             $(".din2").hide();
             $(".din3").hide();
             $(".kit1").hide();
             $(".kit2").hide();
             $(".kit3").hide();
 
 
         }
     })*/

    $('input[type=checkbox]').change(function () {
        var checkbox1value = $("input:checkbox.checkbox1")[0].checked;
        var checkbox6value = $("input:checkbox.checkbox6")[0].checked;
        var checkbox7value = $("input:checkbox.checkbox7")[0].checked;
        var checkbox8value = $("input:checkbox.checkbox8")[0].checked;
        var checkbox2value = $("input:checkbox.checkbox2")[0].checked;
        var checkbox3value = $("input:checkbox.checkbox3")[0].checked;
        var styleCheck = checkbox6value == true || checkbox7value == true || checkbox8value == true;
        var roomCheck = checkbox1value == true || checkbox2value == true || checkbox3value == true;

        $('#resultsData').show();
        $('.liv').hide();
        $('.din').hide();
        $('.kit').hide();


        /*$('#resultsData').collapse({
            show:true
          })*/

        if (styleCheck && !roomCheck) {
            window.alert("Please select a Room Type")
            return;
        }

        if (roomCheck) {

            //location.href = "#resultsData";
            $('html, body').animate({
                scrollTop: $("#resultsData").offset().top
            }, 1000);

        }

        if ((checkbox1value == true)) {


            if (styleCheck) {
                if ((checkbox6value == true)) {
                    $('.liv.mod').show();
                }

                if ((checkbox7value == true)) {
                    $('.liv.rus').show();
                }

                if ((checkbox8value == true)) {
                    $('.liv.indus').show();
                }
            }
            else {
                $('.liv').show();
            }
        }

        if ((checkbox2value == true)) {
            if (styleCheck) {
                if ((checkbox6value == true)) {
                    $('.din.mod').show();
                }

                if ((checkbox7value == true)) {
                    $('.din.rus').show();
                }

                if ((checkbox8value == true)) {
                    $('.din.indus').show();
                }
            }
            else {
                $('.din').show();
            }
        }

        if ((checkbox3value == true)) {
            if (styleCheck) {
                if ((checkbox6value == true)) {
                    $('.kit.mod').show();
                }

                if ((checkbox7value == true)) {
                    $('.kit.rus').show();
                }

                if ((checkbox8value == true)) {
                    $('.kit.indus').show();
                }
            }
            else {
                $('.kit').show();
            }
        }




    });

    $("#livmod").click(function () {
        $("#livmodModel").modal('show');
    })

    $("#livrus").click(function () {
        $("#livrusModel").modal('show');
    })

    $("#livIndu").click(function () {
        $("#livInduModel").modal('show');
    })

    $("#dinmod").click(function () {
        $("#dinmodModel").modal('show');
    })

    $("#dinrus").click(function () {
        $("#dinrusModel").modal('show');
    })

    $("#dinindus").click(function () {
        $("#dinindusModel").modal('show');
    })

    $("#kitmod").click(function () {
        $("#kitmodModel").modal('show');
    })

    $("#kitrus").click(function () {
        $("#kitrusModel").modal('show');
    })

    $("#kitindus").click(function () {
        $("#kitindusModel").modal('show');
    })


})
//This process we can also do it by creating li using js and adding them based on our selection but it isn't a good practice with hardcoded data