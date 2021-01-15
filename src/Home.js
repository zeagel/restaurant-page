import hogsmeadeImage from './assets/hogsmeade.jpg'

const Home = () => {
  return (`
    <h3>About us</h3>

    <div class="home-item-grid-container">

      <div class="home-grid-item">
        <p>Inflamarae aparecium mobilicorpus locomotor tarantallegra evanesco immobilus nox sonorus. Reducio wolfsbane oblivious lacarnum sonorus. Tarantallegra rictusempra orchideous immobilus incantato relashio engorgio incarcerous. Lumos serpensortia quietus tergeo rictusempra patronum patronum expecto engorgio. Evanesco serpensortia sonorus portus episkey stupefy alohomora totalus legilimens mortis.</p>
        <p>Impedimenta serpensortia expelliarumus incarcerous prior aresto. Evanesco tarantallegra orchideous charm- fidelius sonorous mobilicorpus aresto inflamarae engorgio. Amortentia impedimenta point dissendium waddiwasi ennervate evanesco momentum inflamarae immobilus. Petrificus hover rictusempra avada lumos mortis.</p>
      </div>

      <div class="home-grid-item">
        <img src="${hogsmeadeImage}" class="home-item-image" />
      </div>

    </div>  
  `);
};

export default Home;