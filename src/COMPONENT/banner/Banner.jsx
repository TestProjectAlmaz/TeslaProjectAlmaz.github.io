import style from "./banner.module.css"
import { Link } from 'react-router-dom'
const Banner = () =>{
    return (
        <div className={style.banner_section}>

        

        <div className={style.banner}>
          <p className={style.text_banner}>
            Лучшие цены <br />
            <span className={style.text}>на весь модельный ряд автомобилей Тесла</span>
          </p>
          <br />

          <Link to='/footer'>
          <button className={style.banner_btn}>
            <span className={style.phone}>Купить tesla <br />контакты</span>
          </button>
          </Link>

        </div>
      </div>
    )
}

export default Banner