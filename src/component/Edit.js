import React from 'react'

export default function Edit() {
    return (
    <div>
   
    <main className="contenido">
    <div class="col-12">
        <h1>Editar producto </h1>
        <form>
            
            <div class="form-group">
                <label for="nombre">Nombre del producto</label>
                <input autocomplete="off" autofocus id="nombre"
                       placeholder="Escribe el nombre del producto" type="text"
                       class="form-control">
                </input>
                <div class="invalid-feedback"></div>
            </div>
            <div class="form-group">
                <label for="codigo">Código de barras</label>
                <input autocomplete="off"  id="codigo" placeholder="Escribe el código del producto"
                       type="text"
                       class="form-control" >
                </input>
                <div class="invalid-feedback"></div>
            </div>
            <div class="form-group">
                <label for="existencia">Existencia actual</label>
                <input autocomplete="off" id="existencia"
                       placeholder="Cantidad actual del producto" type="number"
                       class="form-control">
                </input>
                <div class="invalid-feedback"></div>
            </div>
            <div class="form-group">
                <label for="existencia">Precio</label>
                <input autocomplete="off" id="precio" placeholder="Precio del producto"
                       type="number"
                       class="form-control">
                </input>
                <div class="invalid-feedback"></div>
            </div>
            
            <button class="btn btn-success" type="submit">Guardar</button>&nbsp;<a class="btn btn-warning">Ver todos</a>
        </form>
    </div>
</main>
        </div>
    )
}
