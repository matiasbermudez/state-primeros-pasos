interface tarea{
    tarea : string,
    estado : boolean
}
const state = {
    data: {
      list: [],
    },
    listeners: [], // los callbacks
    getState() {
      return this.data;
    },
    setState(newState:tarea) {
        const prevState:tarea[] = this.data.list
        this.data.list = [...prevState, newState];
        for( const cb of this.listeners){
            cb()
        }
    },
    subscribe(callback: (any) => any) {
       this.listeners.push(callback)
    }
  };

  export { state }
  