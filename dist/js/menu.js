(function(){

  var Menu = function() {

    this.domElems = {
      menuMain: document.getElementById('catalog-navigation-ul'),
      menuDesctop: document.getElementById('catalogNavDesctop'),
      menuMobile: document.getElementById('catalogNavMobile')
    };

  };

  Menu.prototype.setMenuArray = function(key) {

    var newArr = [],
        childs = key.children;

    for (var i = 0; i < childs.length; i++) {
      var obj = {};

      if (childs[i].nodeName === 'LI') {
        obj.text = childs[i].querySelector('a').innerText;
        obj.link = childs[i].querySelector('a').href;

        if (!childs[i].querySelector('ul')) {
          obj.hasChildren = false;
        }
        else {

          for (var j = 1; j < childs[i].children.length; j++) {
            obj.hasChildren = this.setMenuArray(childs[i].children[j])
          }

        }
      }

      newArr.push(obj);
    };

    return newArr;
  };

  Menu.prototype.getMenuDesctop = function() {

    var menuDesctop = this.domElems.menuDesctop,
        menuDesctopFragment = document.createDocumentFragment(),
        menuMain = this.setMenuArray(this.domElems.menuMain),
        ul = document.createElement('ul');

    this.domElems.menuMain.parentNode.removeChild(this.domElems.menuMain);

    ul.classList.add('catalog-navigation__ul')

    for (var i = 0; i < menuMain.length; i++) {
      var li = document.createElement('li'),
          ul2 = document.createElement('ul');

      li.classList.add('dropdown');
      ul2.classList.add('dropdown-menu');

      li.innerHTML = '<a data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">' + menuMain[i].text + '<i class="ion-ios-arrow-down"></i></a>';
      li.appendChild(ul2);

      for (var j = 0; j < menuMain[i].hasChildren.length; j++) {
        // console.log(menuMain[i].hasChildren[j].text)

        var li2 = document.createElement('li');
        li2.innerHTML = '<a href="' + menuMain[i].hasChildren[j].link + '">' + menuMain[i].hasChildren[j].text + '</a>';
        ul2.appendChild(li2);
      }

      menuDesctopFragment.appendChild(li);
    };

    ul.appendChild(menuDesctopFragment);
    return menuDesctop.appendChild(ul)

  };

  Menu.prototype.getMenuArray = function() {
    console.log(this.setMenuArray(this.domElems.menuMain));
  };

  Menu.prototype.init = function() {

    this.getMenuArray();
    this.getMenuDesctop();
  };

  window.menu = new Menu();
  menu.init();

})();
