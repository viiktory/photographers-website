import {Portfolio} from '../../components'
import {Contacts} from '../../pages'
import "./Home.css"

const Home = () => {
  return (
    <>
      <section className="home__section">
        <div className="container home__text">
          <span className="home__span">Photographer</span>
          <h1 className="home__title">Тетяна Колюка</h1>
        </div>
      </section>
      <Portfolio/>
      <Contacts/>
    </>
  )
}

export default Home