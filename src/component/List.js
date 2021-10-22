import React from 'react'

export default function List() {
    return (
        <div>
            <h1>Listado</h1>
            <main className="contenido">
    <div class="col-12">
        <h2>Productos</h2>
        <div class="alert">
        </div>
        <a class="btn btn-success mb-2">Agregar</a>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Código</th>
                    <th>Precio</th>
                    <th>Existencia</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><h4>producto.nombre</h4></td>
                    <td><h4>producto.codigo</h4></td>
                    <td><h4>producto.precio</h4></td>
                    <td><h4>producto.existencia</h4></td>
                    <td>
                        <a class="btn btn-warning" >Editar <i
                                class="fa fa-edit"></i></a>
                    </td>
                    <td>
                        <form >
                            <input type="hidden" name="id" />
                            <button type="submit" class="btn btn-danger">Eliminar <i class="fa fa-trash"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
        </div>
    )
}
