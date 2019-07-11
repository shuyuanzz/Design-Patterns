//策略模式： 定义一个个算法，将它们封装起来，并且使他们可以相互替换。


//使用策略模式计算奖金

var strategies = {
    s: function (salary) {
        return salary * 4;
    },
    a: function (salary) {
        return salary * 3;
    },
    b: function (salary) {
        return salary * 2;
    }
}

function caculateSalary (salary,level) {
    return strategies[level](salary);
}