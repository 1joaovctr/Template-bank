import { soma, multiplica } from "./soma"
describe("soma", ( )=>{
    it("Deve somar 1 ao número informado", () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
    
    it("Deve multiplicar o número por dois", () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it("Deve multiplicar o número por três", () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it("Deve informar um erro com um multiplicador diferente de dois ou três", () => {
        const value = multiplica(2, 4)
        expect(value).toBe("Multiplicador inválido")
    }) 
})