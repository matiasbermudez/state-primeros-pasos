import './style.css'
import { addItemInit } from './components/addItem'
import { state  } from './state';
import { listaItemsInit } from './components/listaItems';



(function main (){
 
  const estadoNuevo1 = {
    tarea: 'Esta ok',
    estado: true
  }
  addItemInit();
  state.setState(estadoNuevo1)
  listaItemsInit();
})();