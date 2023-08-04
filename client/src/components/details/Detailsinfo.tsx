import { useProductStore } from "../../hooks"

export const Detailsinfo = () => {
  const { product } = useProductStore()
  return (
    <section>
    <h4 className="text-2xl font-extrabold text-center">
      {product?.name}
    </h4>
    <div className="my-5">
      <p className="text-lg font-bold ">$ {product?.price}</p>
    </div>
  </section>
  )
}
