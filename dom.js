window.dom = {};//创建一个空对象
//dom.create
window.dom.create = function (tagName, children,attributes) {
    var tag = document.createElement(tagName);
    if (typeof children === 'string') {
        var text = document.createTextNode(children)
        tag.appendChild(text);
    } else if (children instanceof Array) {
        for (var i = 0; i < children.length; i++) {
            tag.appendChild(children[i]);
        }
    }
    return tag;
}

//dom.find
window.dom.find = function (selector) {
    return document.querySelectorAll(selector);
}

//dom.bigBrother
window.dom.bigBrother = function (tag) {
    var previous = tag.previousSibling;
    while (previous !== null && previous.nodeType !== 1) {
        previous = previous.previousSibling;
    }
    return previous;
}

//dom.empty

window.dom.empty = function (tag) {
    for (var i = 0; i < tag.childNodes.length; i++)
        tag.childNodes[i].remove();
}

//dom.children
window.dom.children = function (tag) {
    return tag.children;
}
//dom.text
window.dom.text = function (tag) {
    var result = [];
    for (var i = 0; i < tag.childNodes.length; i++) {
        if (tag.childNodes[i].nodeType === 3) {
            result += tag.childNodes[i].textContent.trim();
        }
    }
    return result;
}

//dom.style
var styles = 0;
window.dom.style = function (tag, styles) {
    for (var key in styles) {
        tag.style[key] = styles[key];
    }
}
//dom.attr
window.dom.attr = function (tag, attr) {
    for (var key in styles) {
        tag.setAttribute(key, attr[key]);
    }
}
