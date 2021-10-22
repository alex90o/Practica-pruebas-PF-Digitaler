export default function Home(){
    return (
        <div lang="es" 
        >  
        <div className="col-12">
            <h1>Venta</h1>
            <form className>
            <div class="form-group">
                <label for="codigo">Código de barras</label>
                <input autofocus autocomplete="off" id="codigo"
                       placeholder="Escanea el código o escríbelo y presiona Enter"
                       type="text"
                       class="form-control">
                </input>
                <div class="invalid-feedback"></div>
                <form class="mb-2">
            <button type="submit" class="btn btn-success">Terminar&nbsp;<i class="fa fa-check"></i>
            </button>
            <a class="btn btn-danger">Cancelar venta&nbsp;<i
                    class="fa fa-trash"></i>
            </a>
        </form>
        <h1> Total $ unPresio .. <h3>(se hace una funcion que lo calcule)</h3></h1>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Código</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Quitar de lista</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td ><h4>producto.nombre</h4></td>
                    <td><h4>producto.codigo</h4></td>
                    <td><h4>producto.precio</h4></td>
                    <td><h4>producto.cantidad</h4></td>
                    <td><h4>producto.total</h4></td>
                    <td>
                        <form >
                            <button type="submit" class="btn btn-danger">Quitar<i class="fa fa-trash"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

            </div>
        </form>
            
        </div>
        </div>    
    )
}