  const myList = document.querySelector('ul');
  const imageClick1 = document.getElementById('art');

	imageClick1.addEventListener('click',() => {
    myList.innerHTML = '<li>This goes into the list</li>';
 });
