class Auto extends Vehiculo {
    public cantidadPuertas:number;
    public constructor(id:number,marca:string,modelo:string,precio:number,cantidadPuertas:number) {
        super(id,marca,modelo,precio);
        this.cantidadPuertas = cantidadPuertas;
    }
}