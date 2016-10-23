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
    return key
  }

  // Вывод в консоли массива
  console.log(setMenuArray(menuMain));
  console.log(getNewMenu(setMenuArray(menuMain)));

})();
