import axios from "axios";
export const COMPROBANTES = "COMPROBANTES";
export const ORDER = "ORDER"

export function  getComprobantes() {
    return async function (dispatch){
        const json= await axios.get('http://localhost:9000/comprobantes')
        console.log(json)
        return dispatch({
            type:COMPROBANTES,
            payload:json.data
        })
    };
};

export function byOrder(payload){
    return{
        type: "ORDER",
        payload,
    }
}