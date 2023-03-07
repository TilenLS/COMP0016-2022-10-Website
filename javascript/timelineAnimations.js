(function () {
    "use strict";
  
    var items = document.querySelectorAll(".timeline li");
    const verticalLine = document.getElementById("vertical-line");
    var index = 0;
  
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function extendLine() {
        if (index == items.length)
        {
            verticalLine.style.height = items.item(index-1).getBoundingClientRect().bottom+window.pageYOffset+"px";
        }
        else {
            verticalLine.style.height = items.item(index).getBoundingClientRect().y+window.pageYOffset+"px";
        }
    }
  
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
                index = i+1;
            }
            // else {
            //     items[i].classList.remove("in-view")
            // }
        }
        extendLine();
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    })();  