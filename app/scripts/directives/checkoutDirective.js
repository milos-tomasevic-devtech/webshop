angular.module('webshop')
        .directive('checkout', function() {

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

                            navListItems.click(function(e)
                            {
                                e.preventDefault();
                                var $target = $($(this).attr('href')),
                                    $item = $(this).closest('li');

                                if (!$item.hasClass('disabled')) {
                                    navListItems.closest('li').removeClass('active');
                                    $item.addClass('active');
                                    allWells.hide();
                                    $target.show();
                                }
                            });

                            $('ul.setup-panel li.active a').trigger('click');

                            // DEMO ONLY //
                            $('#activate-step-2').on('click', function(e) {
                                $('ul.setup-panel li:eq(1)').removeClass('disabled');
                                $('ul.setup-panel li a[href="#step-2"]').trigger('click');
                                $(this).remove();
                            })
                        });


                    }
                }
            }
        };

    });