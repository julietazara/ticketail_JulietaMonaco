import duki from '../../assets/images/Duki.png'
import lali from '../../assets/images/Lali.png'
import rombai from '../../assets/images/Rombai.png'
import cch from '../../assets/images/Cch.png'
import comicon from '../../assets/images/Comicon.png'

const tickets = [
    {id: '1', name: 'Duki', price: 5000, stock: 10, category:'Musica', img:`${duki}`, detail:'Uno de los principales referentes y líder de un movimiento, cuna de cambios y revolución artística, que cruzó fronteras logrando una transformación cultural y social, eso es DUKI y hoy vuelve a marcar un momento bisagra en la historia de la música tras agotar tres estadios y anunciar su cuarta fecha, demostrando así, el increíble poder de convocatoria que tiene el joven de 25 años.'},
    {id: '2', name: 'Lali', price: 5500, stock: 10, category:'Musica', img:`${lali}`, detail:'Provocando el furor absoluto de sus fans Lali anunció a través de un Live en instagram que el año próximo llegará por primera vez al Estadio Vélez, dando un paso tremendo en su carrera, mismo escenario que pisaron artistas de la talla como Queen, Guns & Roses, Shakira y muchos más. Preparando una puesta visual y artística a una escala que será sin dudas imborrable. La cita será entonces el 4 de marzo.'},
    {id: '3', name: 'Rombai', price: 4000, stock: 10, category:'Musica', img:`${rombai}`, detail:'Rombai presenta Resiliencia Tour, "dedicado a todos aquellos que no paran de trabajar por sus sueños a pesar de las caídas". Un año después del duro accidente de tránsito que casi le cuesta la vida, Fer Vázquez regresa a los escenarios con el mejor show de su carrera. Los éxitos de siempre y nuevas canciones para disfrutar de una fiesta épica juntos.'},
    {id: '4', name: 'Casados con hijos', price: 3000, stock: 10, category:'Teatro', img:`${cch}`, detail:'En esta oportunidad, Casados con hijos (adaptación de la serie americana “Married with children”, de Sony Pictures Entertainment), llega al Teatro Gran Rex en enero de 2023 bajo la dirección de Guillermo Francella y libros de Axel Kuschevatzky y Diego Alarcón, la misma dupla responsable de los guiones de la ficción de Telefe.'},
    {id: '5', name: 'Comic Con', price: 5000, stock: 10, category:'Evento', img:`${comicon}`, detail:'ARGENTINA COMIC-CON ¡Argentina Comic-Con Diciembre 2022 YA TIENE LUGAR Y FECHA! Los días 9, 10 y 11 de Diciembre llega la nuevo edición de COMIC-CON a la Argentina y será en LA RURAL, más grande, más cómoda y con todo lo que te gusta: Celebridades y artistas internacionales y nacionales, cientos de stands, los principales estudios de cine, TV y streaming, Cosplay, Gaming, coleccionables, y MUCHO MÁS.'},
]

export const gFetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(tickets);
        }, 1000)
    })
}