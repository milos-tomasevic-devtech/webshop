angular.module('webshop')
        .directive('checkout', function($location) {

        return {
            restrict: 'A',
            replace: true,
            transclude: false,
            compile: function(element, attributes) {


                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {

                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {
                        $(document).ready(function() {

                            var navListItems = $('ul.setup-panel li a'),
                                allWells = $('.setup-content');

                            allWells.hide();
                            console.log("putanja: " + $location.path());

                            //navListItems.click(function(e)
                            //{
                            //    console.log("klik handler pozvan");
                            //    e.preventDefault();
                            //   // console.log("jel radi: " + $($(this).attr('href')));
                            //    var targetUrl = $(this).attr('href').replace("#", '');
                            //    var $item = $(this).closest('li');
                            //
                            //    if (!$item.hasClass('disabled')) {
                            //        console.log('brisem')
                            //        navListItems.closest('li').removeClass('active');
                            //        $item.addClass('active');
                            //        allWells.hide();
                            //        //console.log($target);
                            //        //$target.show();
                            //        $location.path(targetUrl);
                            //    }
                            //});

                            console.log('obj: ' + $('a[href="' +$location.path() + '"]').closest('li'));
                            $('a[href="#' +$location.path() + '"]').closest('li').addClass('active')
                            //$('ul.setup-panel li.active a').trigger('click');


                            //
                            //$('#activate-step-3').on('click', function(e) {
                            //    $('ul.setup-panel li:eq(2)').removeClass('disabled');
                            //    $('ul.setup-panel li a[href="#step-3"]').trigger('click');
                            //    $(this).remove();
                            //})
                        });


                    }
                }
            }
        };

    });