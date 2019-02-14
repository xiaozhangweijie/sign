function ajax(opts) {
    var type = opts.type || "get";
    var async = typeof opts.async === "undefined" ? true : opts.async;
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject(Microsoft.XMLHTTP);
    xhr.open(type, opts.url, async);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                opts.success && opts.success(xhr.responseText);
            } else {
                opts.error && opts.error(xhr.status);
            }
        }
    };
    xhr.send();
}