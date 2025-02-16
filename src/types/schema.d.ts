interface LAPTOPDET {
    id: number
    laptop_name: string
    description: string
    price: number
    category: {
      id: number
      category_name: string
    }
    brand: {
      id: number
      brand_name: string
    }
    laptop_discount: number
    photo_laptop: Array<{
      id: number
      img: string
      color: string
    }>
  }