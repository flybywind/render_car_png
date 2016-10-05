var app = angular.module("Demo", []);

app.controller("RenderCtrl", ["$scope", function(scope) {

  }])
  .directive("colorClicker", function() {
    return {
      link: function(scope, ele, attr) {
        var $ele = angular.element(ele);
        $ele.click(function() {
          var bg_color = $(this).css("background-color"),
            $bg_elem = $(".shader .background"),
            $surface_elem = $(".shader .surface");

          $bg_elem.css({
            "background-color": bg_color
          });
          $surface_elem.addClass("begin_anim");
          console.log("click color:", bg_color)
          setTimeout(function() {
            $surface_elem.removeClass("begin_anim")
              .css({
                "background-color": bg_color
              });;
          }, 1500)
        })

      }
    }
  })
