const {add} =require ("../index");
test('check the add function',()=>{
    expect(add(1,2)).toBe(3)
})