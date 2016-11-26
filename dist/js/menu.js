(function(){

  var menuMain = document.getElementById('catalog-navigation-ul'),
      menuDesctop = document.getElementById('catalogNavDesctop'),
      menuMobile = document.getElementById('catalogNavMobile');

  // Функция преобразования вложенного списка в массив
  function setMenuArray(key) {

    var newArr = [],
        childs = key.children;

    for (var i = 0; i < childs.length; i++) {
      var obj = {};

      if (childs[i].nodeName === 'LI') {
        obj.text = childs[i].querySelector('a').innerText;
        obj.link = childs[i].querySelector('a').href;

        if (!childs[i].querySelector('ul')) {
          obj.letChind = false;
        }
        else {

          for (var j = 1; j < childs[i].children.length; j++) {
            obj.letChild = setMenuArray(childs[i].children[j])
          }

        }
      }
      newArr.push(obj);
    };

    return newArr;
  };

  // Скрытие основного меню из DOM
  menuMain.parentNode.removeChild(menuMain);

  // Создание меню на основе имеющегося массива
  function getNewMenu(key) {
    let ul = document.createElement('ul'),
        fragment = document.createDocumentFragment();

    ul.classList.add('catalog-navigation__ul');

    for (let i = 0; i < key.length; i++) {
      let li2 = document.createElement('li'),
          ul2 = document.createElement('ul');

      li2.classList.add('dropdown');
      li2.innerHTML = '<a href="' + key[i].link + '" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">' + key[i].text + '<i class="ion-ios-arrow-down"></i></a>';

      ul2.classList.add('dropdown-menu');

      for (let j = 0; j < key[i].letChild.length; j++) {
        let li3 = document.createElement('li'),
            a3 = document.createElement('a'),
            ul3 = document.createElement('ul');

        a3.setAttribute('href', key[i].letChild[j].link);
        a3.innerText = key[i].letChild[j].text;

        for (let k = 0; k < key[i].letChild[j].letChild.length; k++) {
          let li4 = document.createElement('li'),
              a4 = document.createElement('a');

          a4.setAttribute('href', key[i].letChild[j].letChild.link);
          a4.innerText = key[i].letChild[j].letChild.text;

          li4.appendChild(a4);
          ul3.appendChild(li4);
        }

        li3.appendChild(a3);
        ul2.appendChild(li3);
      }

      li2.appendChild(ul2);
      fragment.appendChild(li2);
    }

    ul.appendChild(fragment);

    return ul;
  }

  // Вывод в консоли массива
  console.log(setMenuArray(menuMain));
  menuDesctop.appendChild(getNewMenu(setMenuArray(menuMain)));

})();
