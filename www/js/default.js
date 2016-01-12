function defaultPageInit() {
    footerNavListener();
}

// 底部导航栏按钮监听事件
function footerNavListener() {
    var footerList = $(".footer-nav-list");
    var footerBtns = footerList.find("a");
    var contentAreas = $("#content .content-item");
    var currentActiveLi = footerList.find("a")[0];
    footerList.delegate("li", "tap", function(e) {
        footerBtns.each(function(index, _this) {
            $(_this).removeClass("active");
        });
        var $target = $(e.target);
        $target.addClass("active");

        contentAreas.each(function(index, _this) {
            $(_this).css("display", "none").removeClass("active");
        })
        $($target.attr("href")).fadeIn().addClass("active");
    });
}
