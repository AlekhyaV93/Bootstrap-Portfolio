$(function () {
    const queryparam = window.location.search;
    const urlParams = new URLSearchParams(queryparam);
    const product = urlParams.get('product');
    $("#p1").hide();

    if (!(product == "" || product == undefined || product == null))
        $('.products').hide();


    if (product === "livmod") {
        $('.liv.mod').show();
    }

    if (product === "livrus") {
        $('.liv.rus').show();
    }

    if (product === "livIndu") {
        $('.liv.indus').show();
    }

    if (product === "dinrus") {
        $('.din.rus').show();
    }

    if (product === "dinmod") {
        $('.din.mod').show();
    }

    if (product === "dinindus") {
        $('.din.indus').show();;
    }

    if (product === "kitmod") {
        $('.kit.mod').show();
    }

    if (product === "kitrus") {
        $('.kit.rus').show();
    }

    if (product === "kitindus") {
        $('.kit.indus').show();
    }

    $("#prods").on('change', function () {

        $('.products').hide();
        $("#p1").hide();
        var selectedProd = this.value;
        console.log(selectedProd);
        const queryparam = window.location.search;
        const urlParams = new URLSearchParams(queryparam);
        const product = urlParams.get('product');
        /* if (selectedProd === "Pillows" && product == "livmod") {
             $('.liv.mod').eq(0).show();
         }
         else {
             $('.liv.mod').eq(0).show();
             $('.din.mod').eq(0).show();
         }*/

        if (selectedProd === "Pillows") {
            $('.liv.mod').eq(0).show();
            $('.din.mod').eq(0).show();
            if (product == "livmod") {
                $('.din.mod').eq(0).hide();
            }
            if (product == "dinmod") {
                $('.liv.mod').eq(0).hide();
            }
            if(product == "livrus" || product == "livIndu" || product == "dinrus" || product == "dinindus" || product == "kitmod" || product == "kitrus" || product == "kitindus"){
                $('.products').hide();
                $("#p1").show();
            }
        }

        if (selectedProd === "Vase") {

            $('.din.mod').eq(1).show();
            $('.din.rus').eq(1).show();
            if (product == "dinrus") {
                $('.din.mod').eq(1).hide();
            }
            if (product == "dinmod") {
                $('.din.rus').eq(1).hide();
            }
            if(product == "livrus" || product == "livIndu" || product == "livmod" || product == "dinindus" || product == "kitmod" || product == "kitrus" || product == "kitindus"){
                $('.products').hide();
                $("#p1").show();
            }

        }

        if (selectedProd === "Shelves") {
            $('.liv.indus').eq(1).show();
            $('.kit.mod').eq(1).show();
            if (product == "livIndu") {
                $('.kit.mod').eq(1).hide();
            }
            if (product == "kitmod") {
                $('.liv.indus').eq(1).hide();
            }
            if(product == "livrus"  || product == "livmod" || product == "dinindus" || product == "dinmod"|| product == "kitrus" || product == "kitindus"){
                $('.products').hide();
                $("#p1").show();
            }

        }

        if (selectedProd === "Chairs") {
            
            $('.liv.rus').eq(1).show();
            $('.kit.indus').eq(0).show();
            $('.kit.rus').eq(0).show();
            
            if (product == "livrus") {
                $('.kit.indus').eq(0).hide();
                $('.kit.rus').eq(0).hide();
            }
            if (product == "kitindus") {
                $('.liv.rus').eq(1).hide();
                $('.kit.rus').eq(0).hide();
            }
            if (product == "kitrus") {
                $('.liv.rus').eq(1).hide();
                $('.kit.indus').eq(0).hide();
            }
            if(product == "livindus"  || product == "livmod" || product == "dinindus" || product == "dinmod"|| product == "dinrus"){
                $('.products').hide();
                $("#p1").show();
            }

        }

        if(selectedProd === "Others"){
            $('.liv.mod').eq(1).show();
            $('.liv.rus').eq(0).show();
            $('.liv.indus').eq(0).show();
            $('.din.rus').eq(0).show();
            $('.din.indus').eq(0).show();
            $('.din.indus').eq(1).show();
            $('.kit.mod').eq(0).show();
            $('.kit.indus').eq(1).show();
        }
    })

})