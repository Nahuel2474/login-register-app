
const Sidenav = () => {
  return (
    <aside className="ml-20 w-52 [&>ul>li]:my-1 [&>ul>li]:text-[0.90rem] [&>ul>li]:italic [&>ul>h4]:font-bold [&>ul>li>input]:mr-2 ">
      <ul>
        <h4>CATEGORIAS</h4>
        <li>
          <input type="checkbox" name="" id="" /> Blusas
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Remeras
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Pantalones
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Camisas
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Abrigos
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Sacos & Blazers
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Sweaters y Buzos
        </li>
      </ul>

      <ul>
        <h4>TALLE</h4>
        <li>
          <input type="checkbox" name="" id="" /> Uni.
        </li>
        <li>
          <input type="checkbox" name="" id="" /> 1
        </li>
        <li>
          <input type="checkbox" name="" id="" /> 2
        </li>
        <li>
          <input type="checkbox" name="" id="" /> 3
        </li>
      </ul>

      <ul>
        <h4>COLORES</h4>
        <li>
          <input type="checkbox" name="" id="" /> Rojo
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Verde
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Azul
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
