function gallery() {
  const { body } = document;
  const myEl = document.createElement('ul');
  const myLi = document.createElement('li');
  const myA = document.createElement('a');
  const myImg = document.createElement('img');

  function addEl() {
    const nodes = [myEl, myLi, myA, myImg];

    for (let i = 0; i < nodes.length; i++) {
      body.appendChild(nodes[i]);

      for (let j = 0; j < 3; j++) {
        nodes[j].appendChild(nodes[j + 1]);
      }
    }
  }

  addEl();
}

export default gallery;
