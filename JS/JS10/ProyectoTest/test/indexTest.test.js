//const indexTest = require("../calculadora"); //ecma5
import { indexTest } from "../calculadora"; //ecma6
test('test suma', () => {
    //secondclear
    const r = indexTest.suma(4,2);
    expect(r).toBe(6)
    
}
)
test.todo("test reta");
test.todo("test multi");
test.todo("test divi");