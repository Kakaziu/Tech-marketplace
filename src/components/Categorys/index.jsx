import { useState } from 'react'
import { CategorysTag, CategorysArea, Category, Overlay } from './styled'

const Categorys = () => {

  const [moveUp, setMoveUp] = useState(false)

  document.addEventListener('scroll', () =>{
    if(window.scrollY > 1050){
      setMoveUp(true)
    }
  })

  function hoverCategory(e){
    const overlay = e.target
    const categoryTag = overlay.parentElement

    categoryTag.style.transform = 'rotateY(20deg)'
  }

  function outHoverCategory(e){
    const overlay = e.target
    const categoryTag = overlay.parentElement

    categoryTag.style.transform = 'rotateY(0deg)'
  }

  return(
    <CategorysTag moveUp={moveUp}>
      <hr></hr>
      <h2>Categorias de produtos</h2>

      <CategorysArea>
        <Category>
          <Overlay onMouseOver={hoverCategory} onMouseOut={outHoverCategory}></Overlay>
          <img src='./public/assets/images/cpu.jpg'/>
          <span>Computadores</span>
        </Category>
        <Category>
          <Overlay onMouseOver={hoverCategory} onMouseOut={outHoverCategory}></Overlay>
          <img src='./public/assets/images/cel.jpg'/>
          <span>Celulares</span>
        </Category>
        <Category>
          <Overlay onMouseOver={hoverCategory} onMouseOut={outHoverCategory}></Overlay>
          <img src='./public/assets/images/note.jpg'/>
          <span>Notebooks</span>
        </Category>
        <Category>
          <Overlay onMouseOver={hoverCategory} onMouseOut={outHoverCategory}></Overlay>
          <img src='./public/assets/images/perifericos.webp'/>
          <span>Periféricos</span>
        </Category>
      </CategorysArea>
      
    </CategorysTag>
  )
}

export default Categorys