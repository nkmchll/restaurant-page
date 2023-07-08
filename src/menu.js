function menu(){
    const contentDiv = document.querySelector('#content');
    contentDiv.classList.add('menu-tab');

    contentDiv.replaceChildren();
    
    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.innerText = 'Our Classic Entrees';
    contentDiv.appendChild(title);

    const menu = document.createElement('div');
    menu.classList.add('menu')
    contentDiv.appendChild(menu);

    const alfredo1 = document.createElement('div');
    alfredo1.classList.add('alfredo1')
    const alfredo1Text = document.createElement('div');
    alfredo1Text.innerText = 'Chicken Alfredo \n $19.49';
    alfredo1Text.classList.add('alfredo1Text');
    alfredo1.appendChild(alfredo1Text);
    menu.appendChild(alfredo1);

    const alfredo2 = document.createElement('div')
    alfredo2.classList.add('alfredo2')
    const alfredo2Text = document.createElement('div');
    alfredo2Text.innerText = 'Shrimp Alfredo \n $20.49';
    alfredo2Text.classList.add('alfredo2Text');
    alfredo2.appendChild(alfredo2Text);
    menu.appendChild(alfredo2);

    const alfredo3 = document.createElement('div')
    alfredo3.classList.add('alfredo3')
    const alfredo3Text = document.createElement('div');
    alfredo3Text.innerText = 'Chicken and Shrimp Carbonara \n $20.99';
    alfredo3Text.classList.add('alfredo3Text');
    alfredo3.appendChild(alfredo3Text);
    menu.appendChild(alfredo3);

    const alfredo4 = document.createElement('div')
    alfredo4.classList.add('alfredo4')
    const alfredo4Text = document.createElement('div');
    alfredo4Text.innerText = 'Fettuccine Alfredo \n $16.29';
    alfredo4Text.classList.add('alfredo4Text');
    alfredo4.appendChild(alfredo4Text);
    menu.appendChild(alfredo4);

}

export default menu