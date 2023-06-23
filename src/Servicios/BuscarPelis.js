const BuscarPelis = async () => {
    const URL= "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page="

    const PETICION={
        method:"GET"
    }

    let respuestaE=await fetch(URL,PETICION)
    let pelisEntregadas=await respuestaE.json()
    return  pelisEntregadas
}
/* export async function BuscarPelis(){
   
    const URL= "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page="

    const PETICION={
        method:"GET"
    }

    let respuestaE=await fetch(URL,PETICION)
    let pelisEntregadas=await respuestaE.json()
    return  pelisEntregadas
} */

export default BuscarPelis