import { response,request } from "express";



export const tokenGet=async(req,res=response)=>{
    const {place}=req.query
    try {
        console.log(place)
        res.json({
            msg:"Identificador de la via",
            place,
        })
    } catch (error) {
        console.log("error")
    }
}

export const contenidoGet=async(req,res=response)=>{
    const{shift,place,tag}=req.query
    try{
        console.log(shift,place,tag)
        res.json({
            msg:"Identificador del turno de la via"+
            shift
            +" Identificador de la via"+
            place
            +"/nIdentificador del TAG"+
            tag,
        })
    } catch (error) {
        console.log(error)
    }
}

export const contenido1Get=async(req,res=response)=>{
    console.log(req.query)
    const{shift,place,tag}=req.query
    try{
        console.log(shift,place,tag)
        res.json({
            msg:"Identificador del turno de la via: "+
            shift
            +" Identificador de la via"+
            place
            +"Identificador del codigo de barras leido"+
            tag,
        })
    } catch (error) {
        console.log("error")
    }
}

export const tokenPost=async(req,res=response)=>{
    const {place}=req.body
    console.log(place)
    res.json({
        msg:"Enviado correctamente",
        place,
        
    })
}

