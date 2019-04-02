function header() {
  const { body } = document;
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');
  const listItem6 = document.createElement('li');
  const listItem7 = document.createElement('li');
  const listItem8 = document.createElement('li');
  body.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(ul);
  listItem1.appendChild(document.createTextNode('Beer'));
  listItem2.appendChild(document.createTextNode('Coffee/Tea'));
  listItem3.appendChild(document.createTextNode('Coctail'));
  listItem4.appendChild(document.createTextNode('Cocoa'));
  listItem5.appendChild(document.createTextNode('Milk/Float/Shake'));
  listItem6.appendChild(document.createTextNode('Shot'));
  listItem7.appendChild(document.createTextNode('Punch/Party Drink'));
  listItem8.appendChild(document.createTextNode('Homemade Liqueur'));
  ul.appendChild(listItem1);
  ul.appendChild(listItem2);
  ul.appendChild(listItem3);
  ul.appendChild(listItem4);
  ul.appendChild(listItem5);
  ul.appendChild(listItem6);
  ul.appendChild(listItem7);
  ul.appendChild(listItem8);
}

export default header;
