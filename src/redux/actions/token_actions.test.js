const token_actions = require("./token_actions")
// @ponicode
describe("token_actions.addToken", () => {
    test("0", () => {
        let callFunction = () => {
            token_actions.addToken("([{")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            token_actions.addToken("×")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            token_actions.addToken(";")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            token_actions.addToken("{")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            token_actions.addToken("not in")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            token_actions.addToken(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("token_actions.removeToken", () => {
    test("0", () => {
        let callFunction = () => {
            token_actions.removeToken()
        }
    
        expect(callFunction).not.toThrow()
    })
})
