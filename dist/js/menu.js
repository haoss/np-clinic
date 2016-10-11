(function(){

    var menuMain = document.getElementById('catalog-navigation-ul'),
        menuDesctop = document.getElementById('catalogNavDesctop'),
        menuMobile = document.getElementById('catalogNavMobile'),
        li = menuMain.querySelectorAll('li'),
        ul = menuMain.querySelectorAll('ul');

    var liTest = {
      text: 'Наркологическая помощь',
      link: '#',
      children: true
    };

    var arr = [
      {
        text: 'Наркологическая помощь',
        link: '#',
        children: [
          {
            text: 'Нарколог на дом',
            link: '#',
            children: [
              {
                text: 'Детоксикация',
                link: '#',
                children: false
              },
              {
                text: 'Вывод из запоя',
                link: '#',
                children: false
              },
              {
                text: 'Снятие наркотической ломки',
                link: '#',
                children: false
              },
              {
                text: 'Кодирование',
                link: '#',
                children: false
              }
            ]
          },
          {
            text: 'Лечение алкоголизма',
            link: '#',
            children: [
              {
                text: 'Лечебная программа',
                link: '#',
                children: false
              },
              {
                text: 'Кодирование',
                link: '#',
                children: false
              }
            ]
          },
          {
            text: 'Лечение наркозависимости',
            link: '#',
            children: [
              {
                text: 'Лечебная программа',
                link: '#',
                children: false
              },
              {
                text: 'Кодирование',
                link: '#',
                children: false
              }
            ]
          },
          {
            text: 'Лечение табакокурения',
            link: '#',
            children: false
          },
          {
            text: 'Лечение игромании',
            link: '#',
            children: false
          }
        ]
      },
      {
        text: 'Психиатрическая помощь',
        link: '#',
        children: true
      },
      {
        text: 'Психотерапевтическая помощь',
        link: '#',
        children: true
      },
      {
        text: 'Диагностика',
        link: '#',
        children: true
      }
    ];

    var newArr = [];
    var ulArray = [];

    // get all Li in Array
    // function getLiArray(key) {
    //
    //   var liLength = li.length;
    //
    //   for (var i = 0; i < liLength; i++) {
    //     var liObj = {};
    //     liObj.text = li[i].querySelector('a').text;
    //     liObj.link = li[i].querySelector('a').href;
    //
    //     if (li[i].querySelector('ul')) {
    //       liObj.children = true;
    //     } else {
    //       liObj.children = false;
    //     }
    //
    //     newArr.push(liObj)
    //   }
    //
    //   return newArr;
    // };
    //
    // function getUlArray(key) {
    //   var ulLength = key.length;
    //
    //   for (var j = 0; j < ulLength; j++) {
    //     ulArray.push(key[j])
    //   }
    //
    //   return ulArray
    // };
    //
    // console.log(getLiArray(li));
    // console.log(getUlArray(ul));

    // console.log(menuMain)

    // function getLi(key) {
    //   return key
    // }
    //
    // console.log(getLi());

    // console.log(li[0].lastElementChild.nodeName);

    function getLi(key) {

      var i = 0;
      while (i < key.childNodes.length) {
        // console.log(key.childNodes[i]);
        if (key.childNodes[i].nodeName === 'LI') {

          getLi(key.childNodes)
        } else {
          console.log(false);
        }

        i++
      }
    };

    getLi(menuMain)

    // console.dir(menuMain.childNodes[1].nodeName );

})();
