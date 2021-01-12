import wokImage from './assets/chicken-wok.jpg';
import './styles.css';

const pageLoad = () => {
  const container = document.getElementById('content');
  
  const headingElement = document.createElement('h1');
  headingElement.innerHTML = "Spicy Wok";

  const imageElement = document.createElement('img');
  imageElement.src = wokImage;
  imageElement.id = 'main-image';
  
  console.log(imageElement);

  const reviewListElement = document.createElement('ul');
  
  const reviewItem1 = document.createElement('li');
  reviewItem1.innerHTML = 'This is one of my favorite places. This was one of the best mouth-watering wokp plate I\'ve had grace my taste buds in a long time. The waiter was prompt and polite. I\'d give more than 5 stars if I could!';
  reviewListElement.appendChild(reviewItem1);

  const reviewItem2 = document.createElement('li');
  reviewItem2.innerHTML = 'I felt like this place wasn\'t trying hard enough. The beef wok was a little dry. I felt the prices were too high given the quality of the food. The ambiance gives off an earthy feel-good vibe. The service wasn\'t that good and the waiter was rude. Satisfactory experience, will come again.';
  reviewListElement.appendChild(reviewItem2);

  const reviewItem3 = document.createElement('li');
  reviewItem3.innerHTML = 'Gross! I think this place was featured on Kitchen Nightmares, or at least it should have been. Seriously, how difficult is it to get a clean glass around here? I wish I could put a sign out front that said \"DON\'T EAT HERE!\"';
  reviewListElement.appendChild(reviewItem3);

  
  container.appendChild(headingElement);
  container.appendChild(imageElement);
  container.appendChild(reviewListElement);
};

export default pageLoad;