class Vehiculo {
    public id:number;
    public marca:string;
    public modelo:string;
    public precio:number;

    public constructor(id:number,marca:string,modelo:string,precio:number) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}