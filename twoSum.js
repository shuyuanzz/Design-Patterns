var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var b = target - nums[i];
        var index = nums.indexOf(b)
        if (b !== -1) {
            return [nums[i], nums[b]]
        }
    }
    return null
};
twoSum()