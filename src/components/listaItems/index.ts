import { state } from "../../state";
export function listaItemsInit(){
    class listaItems extends HTMLElement {

        shadow = this.attachShadow({ mode: "open" });
        constructor() {
            super();
            
            this.render();
        }

        connectedCallback(){
            state.subscribe(()=>{
                this.render();
            })
        }
        
        render() {
            const style = document.createElement('style');
            style.innerText = `
                .lista__ol{
                    color: green;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    margin:0;
                    padding:0;
                }
            `
            const lastState = state.getState().list;
            const listaItems = lastState.map(item => `<li>Tarea : ${item.tarea} Estado: ${item.estado} </li>`).join("")
            this.shadow.innerHTML = ` 
                                
                                    <ol class="lista__ol" >${listaItems}</ol>
                                   
            `
            this.shadow.appendChild(style)
           
        }
    }
   
    customElements.define('lista-items', listaItems)
}





