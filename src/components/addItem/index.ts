import { state } from "../../state";

export function addItemInit() {
    class AddItem extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" });
           
            shadow.innerHTML = `
                    <form class="form"> 
                        <input type="text" placeholder="Nuevo Pendiente" id="tarea" name="tarea" class="form__input">
                        <button type="submit" class="form__boton">+</button>
                    </form> 
                   
            `
            const form = shadow.querySelector('.form');
            
            form?.addEventListener('submit', (e)=>{
                e.preventDefault();
                const formulario = e.target as any;
                const tareaNueva = {
                    tarea: formulario.tarea.value,
                    estado: false
                }
                state.setState(tareaNueva)
            })

        }
    }
    customElements.define('add-item-form', AddItem)
}