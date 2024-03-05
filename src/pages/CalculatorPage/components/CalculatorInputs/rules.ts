import { IsNumber, IsString, Max, Min } from "class-validator";

export class Validation {
    @IsString()
    hasMonetaryAllowance: string;

    @IsString()
    advanceInstallment13: string;

    @IsNumber()
    dependents: number

    @IsNumber()
    @Min(1)
    @Max(30)
    holidayDays: number

    @IsNumber()
    averageOvertime: number | null | undefined

    @IsNumber()
    grossSalary: number | null
}