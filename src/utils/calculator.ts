
// valor que recebe por dia
export const workDayValue = (salary: number, overtime: number) => {
    return ((salary + overtime)/30)
}


//valor das ferias
export const valueOfHolidays = (valueDay: number, vacationDays: number) => {
    return (valueDay*vacationDays)
}

// 1/3 das férias
export const oneThirdOfHolidays = (valueHolidays: number) => {
    return (valueHolidays/3)
}

// retorna o desconto a pagar do inss
export const inssDiscount = (salaryHoliday: number) => {

    // console.log("salario feria", salaryHoliday)
    // const inssTable = [
    //     { limiteInferior: 0, limiteSuperior: 1412.00, porcentagem: 0.075 },
    //     { limiteInferior: 1412.01, limiteSuperior: 2666.68, porcentagem: 0.09 },
    //     { limiteInferior: 2666.69, limiteSuperior: 4000.03, porcentagem: 0.12 },
    //     { limiteInferior: 4000.04, limiteSuperior: 7786.02, porcentagem: 0.14 }
    // ];
    
    // let position = 0;
    // let sun = 0;
    // for (const index of inssTable) {
        
    //     if (salaryHoliday <= index.limiteSuperior) {
    //         sun = ((salaryHoliday - index.limiteInferior)*index.porcentagem)
    //         position--;

    //         while(position > 0){
    //             console.log((inssTable[position].limiteSuperior))
    //             sun = sun + ((inssTable[position].limiteSuperior - inssTable[position].limiteInferior)*inssTable[position].porcentagem)
    //             position--;
    //         }

    //         return sun
    //     }
    //     position++;
    // }
    // return 0;

    console.log("salario feria", salaryHoliday)
    const inssTable = [
        { limiteInferior: 0, limiteSuperior: 1412.00, porcentagem: 0.075, discount: 0 },
        { limiteInferior: 1412.01, limiteSuperior: 2666.68, porcentagem: 0.09, discount: 21.18 },
        { limiteInferior: 2666.69, limiteSuperior: 4000.03, porcentagem: 0.12, discount: 101.18 },
        { limiteInferior: 4000.04, limiteSuperior: 7786.02, porcentagem: 0.14, discount: 181.18 }
    ];
    
    
    for (const index of inssTable) {
        
        if (salaryHoliday <= index.limiteSuperior) {
            return ((salaryHoliday*index.porcentagem) - index.discount)
        }
    }
    return ((salaryHoliday*0.14)- 181.18);
}

// porcentagem  do inss 
export const inssPercentage = (salaryHoliday: number, inssDiscount: number) => {
    return ((inssDiscount/salaryHoliday)*100)

}

// _________________________________________________________________

// retorna o desconto a pagar irrf
export const irrfDiscount = (dependents: number, salaryHoliday: number, inssDiscount: number) => {
    const salaryInss = salaryHoliday - inssDiscount - (dependents * 189.59)

    const irrfTable = [
        { limiteSuperior: 2259.20, porcentagem: 0, discount: 0 },
        { limiteSuperior: 2826.65, porcentagem: 0.075, discount: 169.44 },
        { limiteSuperior: 3751.05, porcentagem: 0.15, discount: 381.44 },
        { limiteSuperior: 4664.68, porcentagem: 0.2250, discount: 662.77 },
    ];


    for (const index of irrfTable) {
        
        if (salaryInss <= index.limiteSuperior) {
            
            return ((salaryInss*index.porcentagem) - index.discount)
        }
    }

    return ((salaryInss*0.2750) - 896)



}

// retorna porcentagem irrf

export const irrfPercentage = (salaryHoliday: number, irrfDiscount: number) => {
    return ((irrfDiscount/salaryHoliday)*100)
}


// abono pecuniario

export const cashAllowance = (salary: number, overtime: number) => {
    return (((salary + overtime)/30)*10)

}


// 1/3 do abono 

export const oneThirdPecuniaryAllowance = (pecuniaryAllowance: number) => {
    return (pecuniaryAllowance/3)

}

// decimo terceiro salario

export const thirteenFirstSalary = (salary: number, overtime: number) => {

    return (salary + overtime)/2
}