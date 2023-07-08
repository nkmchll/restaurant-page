import menu from "./menu";

function initialPageLoad(){
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    // container for intro
    const introContainer = document.createElement('div');
    introContainer.classList.add('introContainer');
    contentDiv.appendChild(introContainer);

    // class: intro
    const title = document.createElement('h1');
    title.textContent = 'Welcome to LiveGarden';
    title.classList.add('intro');
    introContainer.appendChild(title);

    const title2 = document.createElement('h2');
    title2.textContent = 'The Comfort You Crave';
    title2.classList.add('intro')
    introContainer.appendChild(title2);

    // container for special-banner

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('bannerContainer');
    contentDiv.appendChild(bannerContainer);

    // menu button
    const menuButton = document.createElement('button');
    menuButton.innerText = 'View Menu';
    menuButton.classList.add('menu-button');
    introContainer.appendChild(menuButton);

    menuButton.addEventListener('click', menu);

    // class: special-banner

    const specialBanner = document.createElement('div');
    specialBanner.classList.add('specialBanner')
    const specialBannerText1 = document.createElement('p');
    specialBannerText1.classList.add('specialBannerText1')
    specialBannerText1.textContent = "Enjoy Our Everyday Specials!";
    const specialBannerText2 = document.createElement('p');
    specialBannerText2.classList.add('specialBannerText2')
    specialBannerText2.innerText = 'Family-Syle Meals | Wine Bottles To Go | Lunch-Sized Favorites | Italian-Inspired Cocktails';
    specialBanner.appendChild(specialBannerText1);
    specialBanner.appendChild(specialBannerText2);
    bannerContainer.appendChild(specialBanner);

}

export default initialPageLoad