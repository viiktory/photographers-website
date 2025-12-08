import "./Form.css"

const Form = () => {
  return (
    <section id="contact" className="form__container container">

      <div className="form__title">
        <p className="form__span">
          залиште свій номер <br/> для зворотнього зв’язку
        </p>
        <h2 className="form__hello">Привіт,</h2>
      </div>


      <form className="form">

        <div className="form__row">
          <label htmlFor="name">Моє ім’я</label>
          <input id="name" name="name" type="text"
                 placeholder="додайте ваше ім’я тут" required/>
        </div>

        <div className="form__row">
          <label htmlFor="phone">Мій номер</label>
          <input id="phone" name="phone" type="tel"
                 placeholder="введіть ваш номер телефону" required/>
        </div>

        <div className="form__row">
          <label htmlFor="details">Мені потрібно</label>
          <textarea
            id="details"
            name="details"
            placeholder="напишіть деталі (необов’язково)"
          ></textarea>
        </div>

        <button type="submit" className="form__btn">Надіслати</button>

      </form>
    </section>
  )
}

export default Form;