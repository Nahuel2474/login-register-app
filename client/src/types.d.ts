
export interface detailsProps {
  methods: {
    pickOptions: (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>,
      type: string,
      setColor: (option: string) => void,
      setWaist: (option: string) => void,
    ) => void
    handleData: () => void
    changeStateImage: (id: number, setImage, product: productsAttributes) => void
  }
}

export interface productProps {
  props: {
    totalProducts: number
    lastIndex: number
    startIndex: mumber
    products: productsAttributes[]
    productsPerPage: number
  }
}

export interface productsAttributes {
  category: string | undefined
  color: string | undefined
  description: string | undefined
  id: string | undefined
  image: string | undefined
  imageHover: string | undefined
  isNew: number | undefined
  name: string | undefined
  price: number | undefined
  sku: string | undefined
  waist: string | undefined
  offer: string | undefined
  count?: number | undefined
};

export interface userAttributes {
  user: string
  password: string
  email: string
}
