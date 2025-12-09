import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "../../features/formValidation";
import type {TContactForm} from "../../features/formTypes.ts";
import styles from "./Form..module.css"

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<TContactForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: TContactForm) => {
    console.log("FORM SUBMITTED:", data);
    reset();
  };

  return (
    <section className={`${styles.formContainer} container`}>

      <div className={styles.formTitle}>
        <p className={styles.formSpan}>
          залиште свій номер <br/> для зворотнього зв’язку
        </p>
        <h2 className={styles.formHello}>Привіт,</h2>
      </div>


      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formRow}>
          <label htmlFor="name">Моє ім’я</label>
          <input id="name" type="text"
                 placeholder="додайте ваше ім’я тут"
                 {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className={styles.formRow}>
          <label htmlFor="phone">Мій номер</label>
          <input id="phone" type="tel"
                 placeholder="введіть ваш номер телефону"
                 {...register("phone")}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div className={styles.formRow}>
          <label htmlFor="details">Мені потрібно</label>
          <textarea
            id="details"
            placeholder="напишіть деталі (необов’язково)"
            {...register("details")}
          ></textarea>
          {errors.details && <span>{errors.details.message}</span>}
        </div>

        <button type="submit" className={styles.formButton}>Надіслати</button>
      </form>
    </section>
  )
}

export default Form;