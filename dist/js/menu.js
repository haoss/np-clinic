(function(){

    var menuMain = document.getElementById('catalog-navigation-ul'),
        menuDesctop = document.getElementById('catalogNavDesctop'),
        menuMobile = document.getElementById('catalogNavMobile');

    // get all Li in Array
    function getLiArray(key) {
      var newArr = [],
          childs = key.children;

      for (var i = 0; i < childs.length; i++) {
        var obj = {};

        if (childs[i].nodeName === 'LI') {
          obj.text = childs[i].querySelector('a').innerText;
          obj.link = childs[i].querySelector('a').href;

          if (!childs[i].querySelector('ul')) {
            obj.hasChildren = false;
          } else {

            for (var j = 1; j < childs[i].children.length; j++) {
              obj.hasChildren = getLiArray(childs[i].children[j])
            }

          }
        }

        newArr.push(obj);
      };

      return newArr
    };

    console.log(getLiArray(menuMain));

})();
