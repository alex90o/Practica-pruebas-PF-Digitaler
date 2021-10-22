
export default function Home(){
    return (
           
        <div className="col-12">
            <h1>Venta</h1>
            <form>
            <div class="form-group">
                <label for="codigo">Código de barras</label>
                <input autofocus autocomplete="off" id="codigo"
                       placeholder="Escanea el código o escríbelo y presiona Enter"
                       type="text"
                       class="form-control">
                </input>
                <div class="invalid-feedback"></div>

            </div>
        </form>
            
        </div>
        
    )
}