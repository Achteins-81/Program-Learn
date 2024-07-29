let sampleList = [
    {id: '1', name: 'Tom'},
    {id: '2', name: 'Jerry'},
    {id: '3', name: 'John'},
    {id: '4', name: 'Michael'},
];

let demoList = [
    {id: '1', age: 17}, {id: '3', age: 20}
];

let list0 = [...sampleList];
console.log('list0:', list0);

let list1 = [];
/**
 * 箭头函数
 */
sampleList.forEach(sample => {
    if (demoList.filter(item => item.id === sample.id).length > 0) {
        list1.push(sample);
    }
});
console.log('1st loop:', list1);

list1 = [];
/**
 * 箭头函数
 * 函数体有大括号{}时，注意需要有return返回
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions
 */
sampleList.forEach(sample => {
    if (demoList.filter(item => {
        item.id === sample.id
    }).length > 0) {
        list1.push(sample);
    }
});
console.log('2nd loop with no return:', list1);

list1 = [];
sampleList.forEach(sample => {
    if (demoList.filter(item => {
        return item.id === sample.id
    }).length > 0) {
        list1.push(sample);
    }
});
console.log('2nd loop with return:', list1);

sampleList[0].job = 'student';

console.log(list1);

console.log(list1 instanceof Array,!list1 instanceof Array,!(list1 instanceof Array));
console.log(sampleList[0] instanceof Array,!sampleList[0] instanceof Array,!(sampleList[0] instanceof Array));
