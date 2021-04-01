
export function getMonthly(): number {


    return 2
}
export function getTotalCost(basePrice: number, taxRate: number, ): number {
    let total = 0


    return total
}
export function getVersusAverage(totalCost: number, nationalAverage: number): number {
    if (totalCost < nationalAverage) {
        return Math.abs((nationalAverage / totalCost) * 100) - 100
    }
    return Math.abs((totalCost / nationalAverage) * 100) - 100
}
function validateNumber(number: number){
    if(!number || isNaN(number)) return .01
    else return number
}