import wokImage from './assets/wok.jpg';
import pizzaImage from './assets/pizza.jpg';
import burgerImage from './assets/burger.jpg';

const Menu = () => {
  return (`
    <h3>Menu</h3>

    <div class="menu-item-grid-container">

      <div class=""menu-grid-item>
        <img src="${wokImage}" class="menu-item-image" />
      </div>
      
      <div class=""menu-grid-item>
        <h3>Whomping Willow Wok</h3>
        <p>Amortentia impedimenta point dissendium waddiwasi ennervate evanesco momentum inflamarae immobilus.</p>
        <p><strong>Price: 1 Sickles and 2 Knuts</strong></p>
      </div>

      <div class=""menu-grid-item>
        <img src="${pizzaImage}" class="menu-item-image" />
      </div>

      <div class=""menu-grid-item>
        <h3>Boggard Pizza</h3>
        <p>Felix lacarnum quietus tarantallegra aparecium conjunctivitis totalus inflamarae evanesco momentum prior lumos tarantallegra mortis.</p>
        <p><strong>Price: 2 Sickles and 3 Knuts</strong></p>
      </div>

      <div class=""menu-grid-item>
        <img src="${burgerImage}" class="menu-item-image" />
      </div>

      <div class=""menu-grid-item>
        <h3>Dementor Burger</h3>
        <p>Lacarnum expelliarumus mortis momentum lacarnum impedimenta reducio mobilicorpus serpensortia tarantallegra.</p>
        <p><strong>Price: 3 Sickles</strong></p>
      </div>

    </div>  
  `);
};

export default Menu;