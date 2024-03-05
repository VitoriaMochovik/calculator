import { PData } from "./style"

export const RowTable = ({event, refe, proventos, descontos}: {event: string, refe: string | number, proventos: string | number, descontos: string | number}) => {
    return (
        <div style={{display: 'flex', borderBottom: '1px solid #EDF0F5'}}>
            <div style={{width: '424px', height: '50px', paddingLeft: '19px', paddingTop: '5px'}}>
                <PData> {event} </PData>
            </div>
            <div style={{width: '176px', height: '50px',  paddingTop: '5px'}}>
                <PData> {refe} </PData>
            </div>
            <div style={{width: '200px', height: '50px',  paddingTop: '5px'}}>
                <PData> {proventos} </PData>
            </div>
            <div style={{width: '100px', height: '50px',  paddingTop: '5px'}}>
                <PData> {descontos} </PData>
            </div>
        </div>
    )
}