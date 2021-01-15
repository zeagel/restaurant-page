const Heading = () => {
  const container = document.getElementById('content');
  console.log(container);
  container.innerHTML = `
    <h1>Wizardy Food</h1>
    <h2>Simple and tasty food for all sorcerers and the sorceress</h2>  
  `;
};

export default Heading;