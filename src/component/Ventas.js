import React from 'react'

export default function Ventas() {
    return (
        <div>
            
       
       
        <div class="col-12">
        <h1>Ventas Realizadas</h1>
            <div  class="alert">
            </div>
            <a class="btn btn-success mb-2">Agregar</a>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Productos</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><h4>ventas</h4>
                        <td><h4>venta.fechaYHora</h4></td>
                        <td><h4>venta.venta.total</h4></td>
                        <td>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Código de barras</th>
                                    <th>Cantidad vendida</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><h4>producto.nombre</h4></td>
                                    <td><h4>producto.codigo</h4></td>
                                    <td><h4>producto.cantidad</h4></td>
                                    <td><h4>producto.precio</h4></td>
                                    <td><h4>producto.total</h4></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   
    )
}