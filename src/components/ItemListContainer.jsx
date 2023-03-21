import { Center, Square, Circle } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useState } from 'react'

const ItemListContainer = ({greeting}) => {
  const [dato, setDato] = useState([])

 const datos = [
    {
        id: "1",
        nombre: "microondas",
        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.casasilvia.com%2Fmicroondas-philco-mpd-8620n-20l-digital-0053080012&psig=AOvVaw0pGn0iWU8ax0xwzW-UplQZ&ust=1679410882458000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDC0Z7j6v0CFQAAAAAdAAAAABAE",
        precio: 2000,
        descripcion: "Para cocineros express o amantes del arte del buen comer, un microondas es un aliado indiscutible de la cocina. Ahorrá tiempo, llevá los alimentos a su punto de cocción o volvé a deleitarte con los sabores de los platos que ya preparaste.",
        stock: 20,
        categoria: "Cocina"
    },
    {
        ID: "2",
        nombre: "televisores 4K",
        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lg.com%2Fcl%2Ftelevisores%2Flg-50uq8050psb&psig=AOvVaw287Z9kuxX9Gn8ECidWNu0U&ust=1679410923373000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjk0LLj6v0CFQAAAAAdAAAAABAE",
        precio: 40000,
        descripcion: "Televisor Smart de 50' pantalla plana. Tiempo de respuesta 8ms. Frecuencia de barrido 60Hz. Brillo 280cd/m2 Radio de contraste 5000:1. Parlantes integrados. Potencia RMS 2x8W. Dolby MS12. Salidas de audio. Wi Fi. Entrada video componente. 2 Entradas USB (1 x USB 3.0). 3 Entradas HDMI. AV in. Line out (audio out). RJ45. RF imput. Incluye control remoto. Sintonizador digital ISDB-T. Sistema operativo Linux. Navegador. Aplicaciones: Netflix, Youtube, Prime Video, App store. Vesa largo x alto (mm) 300x300",
        stock: 10,
        categoria: "Televisores"
    },
    {
        id: 3,
        nombre: "Cortadora de pasto",
        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fl%2Fherramientas-y-construccion%2Fherramientas%2Fherramientas-de-jardin%2Fcortadoras-de-cesped%2F&psig=AOvVaw1QAFaLCSFp5hJf3MCKOru8&ust=1679411511567000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjG48rl6v0CFQAAAAAdAAAAABAF",
        precio: 82000,
        descripcion: "La cortadora de césped Black & Decker GR1000 cuenta con un potente motor universal de 1200 watts, liviano y fácil de utilizar. Además, posee una empuñadora cómoda que permite su transporte y almacenaje de manera sencilla.",
        stock: 35,
        categoria: "Home"
    },
    {
        id: 4,
        nombre: "Lapto",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lenovo.com%2Far%2Fes%2Fp%2FLEN101B0008&psig=AOvVaw1OaYIrKj-UVwwWhbFvGWKl&ust=1679411019492000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCLqN_j6v0CFQAAAAAdAAAAABAF",
        precio: 95000,
        descripcion: "La laptop ThinkBook 16 de 4ta generación te ofrece el máximo. Más potencia gracias a su procesador Intel® Core™ de 12va generación. Ahora también con más espacio: la pantalla de 16' es la más grande de la línea ThinkBook, con su resolución de hasta 2,5 K y opciones gráficas avanzadas. La conectividad inalámbrica se actualiza desde versiones anteriores; además, los nuevos sensores y funciones inteligentes contribuyen a tu productividad y protegen los datos de tu negocio.",
        stock: 16,
        categoria: "Informatica"

    },
    {
        id: 5,
        nombre: "Parlante",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fparlante-bluetooth-philco-djp61-led-401185%2F&psig=AOvVaw2KeeQClkoHnaHcCk-5bzMA&ust=1679411047400000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDbp-3j6v0CFQAAAAAdAAAAABAD",
        precio: 20000,
        descripcion: "El equipo de audio Philco DJP61 cuenta con display digital, efectos de iluminación y botonera de efectos DJ. Sus dimensiones son: 260 mm x 530 mm x 215 mm, mientras que su peso es de 3,59 Kg.",
        stock: 25,
        categoria: "Musica"
    }
]


const getDatos = () => {
  return new Promise ((resolve, reject) =>{
    if (datos.length === 0){
      reject (new Error("No hay datos"));
    }
      setTimeout(() =>{
        resolve(datos);
      }, 2000);
  })
}
getDatos().then((datos)=>console.log(datos));


async function fetchingData(){
  try{
    const datosFetched = await getDatos();
  } catch (error){
    console.log(error)
  }
}
fetchingData();


return (
  <>
      <Center h='100px' >
        <h1>
          <strong>{greeting}</strong>
        </h1>
      </Center>
      <ItemList datos={datos}/>  
    </>
  )
}

export default ItemListContainer