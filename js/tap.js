/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-12-02 12:41:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-20 16:31:31
 * @func [移动端的点击事件会有300ms的延迟 优化]
 * 
 */
/*整体思路：
    触发点击事件是先触发了touch事件，如果是点击事件，没有touchmove事件，触屏开始 和 结束 的时间差 要小于 150ms
*/
// 命名空间  避免全局污染
var myTouch = {

    /**参数说明
     * obj {Object}：绑定点击事件的对象
     * callback {Function}: 点击事件触发后 要执行的代码    
     */
    tap: function(obj, callback) {
        if (typeof obj === 'object') {
            // 定义变量记录数据
            var startTime = 0; // 点击的起始时间
            var isMove = false; // 是否移动
            // 触屏开始
            obj.addEventListener('touchstart', function() {
                startTime = new Date() * 1; // 记录开始时间戳
            });
            // 触屏移动
            obj.addEventListener('touchmove', function() {
                isMove = true;
            });
            console.log(isMove)
                // 触屏结束
            obj.addEventListener('touchend', function() {
                if (!isMove && new Date() * 1 - startTime < 150) {
                    callback && callback(this);
                    // 重置数据
                    isMove = false;
                    startTime = 0;
                }
            });

        }
    }

}