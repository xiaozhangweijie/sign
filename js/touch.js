var myTouch = {
    startPos: {},
    movePos: {},
    tap: function(dom, callback) {
        var startTime, endTime, isShow = false;
        if (typeof dom === "object") {
            dom.addEventListener("touchstart", function(e) {
                startTime = new Date() * 1;
            }, false);
            dom.addEventListener("touchmove", function(e) {
                isShow = true;
            }, false);
            dom.addEventListener("touchend", function(e) {
                endTime = new Date() * 1 - startTime;
                if (endTime < 150 && !isShow) {
                    callback && callback();
                }
                isShow = false;
            }, false);
        }
    },
    setDir: function(start, move) { //判断手指方向
        var disX = move.x - start.x;
        var disY = move.y - start.y;
        var diffX = Math.abs(disX);
        var diffY = Math.abs(disY);
        if (diffX > diffY) {
            if (diffX > 60) {
                swiperDir = disX < 0 ? "swipeLeft" : "swipeRight";
            }
        }
        if (diffY > diffX) {
            if (diffY > 60) {
                swiperDir = disY < 0 ? "swipeUp" : "swipeDown";
            }
        }
        return swiperDir;
    },
    swiper: function(dom, dir, callback) {
        dom.addEventListener("touchstart", function(e) {
            startPos = {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            }
        }, false);
        dom.addEventListener("touchmove", function(e) {
            movePos = {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            }
        }, false);
        dom.addEventListener("touchend", function() {
            if (dir === "swipeLeft" && startPos && movePos) {
                callback && callback();
            }
        }, false);
    }
}