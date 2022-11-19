import style from "./banner.module.css"

const Banner = () =>{
    return (
        <div className={style.banner_section}>

        

        <div className={style.banner}>
          <p className={style.text_banner}>
            Лучшие цены <br />
            <span className={style.text}>на весь модельный ряд автомобилей Тесла</span>
          </p>
          <br />
          <button className={style.banner_btn}>
            <span className={style.phone}>Купить TESLA</span>
          </button>
        </div>
      </div>
    )
}

export default Banner