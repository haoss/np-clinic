$(function(){

  var menuMain = $('#catalog-navigation-ul'),
      menuDesctop = $('#catalogNavDesctop'),
      menuMobile = $('#catalogNavMobile');

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

  


  // for (var i = 0; i < menuMain.find('>li').length; i++) {
  //   var newObj = {};
  //   console.log(this);
  //
  //   newArr.push(newObj)
  // };
  // console.log(newArr);
  //
  // console.log(menuMain.find('>li'));
});
