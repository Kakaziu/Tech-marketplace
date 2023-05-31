import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import products from '../Products'

export const ProductsContext = createContext()

export const ProductProvider = ({ children }) =>{ 

  const [productsCar, setProductsCar] = useState([])

  function checkRepeatProduct(id){
    let productRepeat = productsCar.filter((product) => product.id === id)[0]

    return productRepeat
  }

  function addProductsInCar(id){
    toast.success('Adicionado ao carrinho')
    const chooseProduct = products.filter((product) => product.id === id)[0]
    const productRepeat = checkRepeatProduct(chooseProduct.id)

    if(!productRepeat) return setProductsCar([...productsCar, { ...chooseProduct, amount: 1 }])

    const refProductsCar = [...productsCar]

    refProductsCar.forEach((product, index, array) =>{
      if(product.id === productRepeat.id){
        array.splice(index, 1, { ...product, amount: product.amount + 1 })
      }
    })

    setProductsCar(refProductsCar)
  }

  function removeProduct(indexProduct){
    toast.success('Produto removido.')
    const refProductsCar = [...productsCar]
    const deleteElement = refProductsCar.find((element, index) => index === indexProduct)

    if(deleteElement.amount > 1){
      refProductsCar.splice(indexProduct, 1, { ...deleteElement, amount: deleteElement.amount - 1 })   
    }else{
      refProductsCar.splice(indexProduct, 1)
    }
    
    setProductsCar(refProductsCar)
  }

  function totalValueCar(){
    return productsCar.reduce((soma, product) => soma + product.price * product.amount, 0)
  }

  function clearCar(){
    toast.success('Carrinho limpo.')
    setProductsCar([]) 
  }

  function totalCar(){
    return productsCar.reduce((soma, product) => soma + product.amount, 0)
  }

  return(
    <ProductsContext.Provider value={{removeProduct, addProductsInCar, totalValueCar, clearCar, totalCar, productsCar }}>
      { children }
    </ProductsContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.element
}