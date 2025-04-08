import { useState } from 'react'
import {Component} from './Carousel'


function CasasMain() {

return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
    <Component desenho= "img/desenhos/Funcionarios/fachada3.png" casa="img/casas/Funcionarios/AvenidaCyroCottaPoggiali09.png" endereco="Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09" bairro=" Funcionarios" mapa="https://www.google.com/maps/d/u/0/viewer?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&ll=-19.5448266658892%2C-42.64709998332227&z=22" />
    <Component desenho= "img/desenhos/Timirim/fachada1.jpg" casa="img/casas/Timirim/Rua Teobaldo Gomes Pinto, 15.png" endereco="Bairro Timirim. Rua Teobaldo Gomes Pinto, 15" bairro="Timirim"  mapa="https://www.google.com/maps/d/u/0/viewer?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&ll=-19.55009956335439%2C-42.64206113522698&z=21" />
    <Component desenho= "img/desenhos/tecnicos/12.jpg" casa="img/casas/Tecnicos/Rua Trinta e Sete, 8.png" endereco="Vila dos tecnicos. Rua Trinta e Sete, 8" bairro="Tecnicos"  mapa="https://www.google.com/maps/d/u/0/viewer?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&ll=-19.535900370685816%2C-42.643561228592745&z=21" />
  </div> 
 )
  
}

export default CasasMain
