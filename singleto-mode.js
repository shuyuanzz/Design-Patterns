//简单单例模式: 一个类只能有一个实例 并且能提供一个可以访问它的全局访问点
function singleTo(name) {
    this.name = name
}
singleTo.sayName = function () {
    alert(this.name)
}
singleTo.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new singleTo(name)
    }
    return this.instance;
}


//透明的单例模式

var CreateDiv = (function () {
    var instance
    var CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    }
    CreateDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }
    return CreateDiv;
})()

//用代理来实现单例模式
function CreateDiv(html) {
    this.html = html;
    this.init();
}
CreateDiv.prototype.init = function () {
    var ele = document.createElement('div');
    ele.innerHTML = this.html;
    document.body.appendChild(ele);
}

var ProxySingletoCreatDiv = (function () {
    var instance;
    return function (html) {
        if (!instance) {
            return new CreateDiv(html);
        }
        return instance;
    }
})

//惰性单例
var getSingle = function (fn) {
    var instance;
    return function () {
        return instance || (instance = fn.call(this, arguments));
    }
}

//核心知识： 闭包封装私有变量 高阶函数 以及单例的基本性质。