export const fetchQuery = `*[__type == products] | order(_createdAt desc){
    _id,
    title,
    productType,
    mainImage{
      asset -> {
        url
      }
    },
    shortDescrption,
    description,
    prize,
    categories[] -> {
      _id,
      title,
      mainImage{
      asset -> {
        url
      }
    },
      
    }
  }`