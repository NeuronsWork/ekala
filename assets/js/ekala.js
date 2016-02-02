$(function(){
        $(".dropdown").hover(
                function() {
                        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                        $(this).toggleClass('open');
                        $('b', this).toggleClass("caret caret-up");
                },
                function() {
                        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                        $(this).toggleClass('open');
                        $('b', this).toggleClass("caret caret-up");
                }
        );

        $('.item-feature').click(function(){
                var ref = $(this).attr('data-href');
                location.href=ref;
        });

        $('.addCart, .addMessage, .link-fav').bind('click', function(){
                var content = $(this).attr('data-content');
                var contentAlert = $(this).attr('data-div');
                $(contentAlert).append(
                '<div class="popupunder alert alert-success fade in">'+
                '<button type="button" class="close close-sm" data-dismiss="alert"><i class="glyphicon glyphicon-remove"></i></button>' +
                //'Tu carrito ha sido actualizado.' +
                content +
                '</div>');
                window.setTimeout(function() {
                        $(".alert").fadeTo(4000, 500).slideUp(500, function(){
                              $(this).remove();
                        });
                }, 500);
        });

        $('.subMenu li').click(function(){
                $(this).find('ul').slideToggle('slow');
        });

        $( ".login" ).click(function() {
                $( "#login" ).toggle( "showOrHide", function() {
                });
        });

        $(".recoveryPwd").bind('click', function(){
                $("#login").toggle("showOrHide", function(){});
                $("#recoveryPwd").toggle("ShowOrhide", function(){
                });
        });

        $(".recoveryPwd1").bind('click', function(){
                $("#recoveryPwd").toggle("ShowOrhide", function(){
                });
        });

        var action;
        $(".number-spinner button").mousedown(function () {
                btn = $(this);
                input = btn.closest('.number-spinner').find('input');
                btn.closest('.number-spinner').find('button').prop("disabled", false);

                if (btn.attr('data-dir') == 'up') {
                        action = setInterval(function(){
                                if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                                        input.val(parseInt(input.val())+1);
                                }else{
                                        btn.prop("disabled", true);
                                        clearInterval(action);
                                }
                        }, 50);
                } else {
                        action = setInterval(function(){
                                if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                                        input.val(parseInt(input.val())-1);
                                }else{
                                        btn.prop("disabled", true);
                                        clearInterval(action);
                                }
                        }, 50);
                }
        }).mouseup(function(){
                clearInterval(action);
        });

});