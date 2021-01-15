import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

import 'tabsy-css/src/tabsy.scss';
import './styles.css';

const TabsyMenu = () => {
  const container = document.getElementById('content');
  container.insertAdjacentHTML('beforeend', `  
  <div class="tabsy">

      <input type="radio" id="tab1" name="tab" checked>
      <label class="tabButton" for="tab1">Home</label>
      
      <div class="tab">
        <div class="content" id="home">
          ${Home()}
        </div>
      </div>

      <input type="radio" id="tab2" name="tab">
      <label class="tabButton" for="tab2">Menu</label>
      
      <div class="tab">
        <div class="content" id="menu">
          ${Menu()}
        </div>
      </div>

      <input type="radio" id="tab3" name="tab">
      <label class="tabButton" for="tab3">Contact</label>
      
      <div class="tab">
        <div class="content" id="contact">
          ${Contact()}
        </div>
      </div>

  </div>  
  `);
};

export default TabsyMenu;