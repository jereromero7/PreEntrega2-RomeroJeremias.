import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import style from './Item.module.css'

function Item({id, img, title, price, fees, isFavorite, isNewProduct, isFreeShipping}) {
  return (
    <a className= {style.Item}>
        <div className= {style.imgContainer}>
            <img className= {style.img} src={product.img} alt={title}/>
            <span className={style.icon}>{
              isFavorite ?
              <FontAwesomeIcon className={style.favorite} icon={faHeart} /> :
              <FontAwesomeIcon  icon={faHeart} />}
            </span>
            <span className={style.isNewProduct}>{isNewProduct ? "Nuevo" : ""}</span>
        </div>
        <div>
            <p className={style.title}>{title}</p>
            <p className={style.price} >{price}</p>
            <p>{isFreeShipping ? "Envio Gratis" : ""}</p>
        </div>
    </a>
  )
}

export default Item