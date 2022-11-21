let add = require('./calculator')

test('test zero', ()=>{
    expect(add('')).toEqual(0)
})
test('test 1 digit', ()=>{
    expect(add('5')).toEqual(5)
})
test('test multi digits', ()=>{
    expect(add('5,3,4,5')).toEqual(17)
})
test('test multi digits', ()=>{
    expect(add('3,6')).toEqual(9)
})
test('negetive number', ()=>{
    expect(add("1,4,-1")).toEqual("negatives not allowed: -1")
})
test('Numbers bigger than 1000 ', ()=>{
    expect(add("1,4,1000,3000")).toEqual(1005)
})
