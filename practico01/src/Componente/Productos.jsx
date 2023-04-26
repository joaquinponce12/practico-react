import './Productos.css'
export function Productos() {
    return (
      <div>
        <h1>Productos</h1>
        <h2>Tabla de productos</h2>
        <table className="tabla-productos">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Unidad</th>
              <th>Cantidad</th>
              <th>Imagen</th>
              <th>Catalogo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Gaseosa</td>
              <td>2</td>
              <td>6</td>
              <td></td>
              <td></td>
              <td>Diponible</td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>$24.99</td>
              <td>Nullam vitae velit eget nisl laoreet luctus.</td>
            </tr>
            <tr>
              <td>Producto 3</td>
              <td>$17.49</td>
              <td>Etiam ac purus in ligula tempor pulvinar non sed elit.</td>
            </tr>
          </tbody>
        </table>
        <h2>Formulario de productos</h2>
        <form className="formulario-productos">
          <label htmlFor="codigo">Codigo:</label>
          <input type="text" id="codigo" name="codigo"/><br/>
          <label htmlFor="descripcion">Descripcion:</label>
          <input type="text" id="descripcion" name="descripcion"/><br/>
          <label htmlFor="unidad">Unidad:</label>
          <input id="unidad" name="nidad"></input>
          <label htmlFor="cantidad">Cantidad:</label>
          <input id="cantidad" name="cantidad"></input>
          <label htmlFor="imagen">Imagen:</label>
          <input id="imagen" name="imagen"></input>
          <label htmlFor="catalogo">Catalogo:</label>
          <input id="catalogo" name="catalogo"></input>
          <label htmlFor="estado">Estado:</label>
          <input id="estado" name="estado"></input><br/>
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }