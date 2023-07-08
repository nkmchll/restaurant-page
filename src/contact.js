function contact(){
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const contactContainer = document.createElement('div');
    contentDiv.appendChild(contactContainer);

    const contactLabel = document.createElement('h1');
    contactLabel.classList.add('contact-label')
    contactLabel.innerText = 'Contact Us';
    contactContainer.appendChild(contactLabel);

    const contactList = document.createElement('div');
    contactList.classList.add('contact-list');
    contactContainer.appendChild(contactList);


    const contact1 = document.createElement('div');
    contact1.classList.add('contact-details');
    contactList.appendChild(contact1);
    const contact1title = document.createElement('div');
    contact1title.classList.add('contact-title');
    contact1title.innerText = 'Your Event';
    contact1.appendChild(contact1title);
    const contact1desc = document.createElement('div');
    contact1desc.classList.add('contact-desc');
    contact1desc.innerText = 'LiveGarden welcomes events, parties, and celebrations \n We are happy to discuss booking the whole facility or part of it for your event. \n Just give us a call to discuss rates, menus, and any special requirements you have!';
    contact1.appendChild(contact1desc);

    const contact2 = document.createElement('div');
    contact2.classList.add('contact-details');
    contactList.appendChild(contact2);
    const contact2title = document.createElement('div');
    contact2title.classList.add('contact-title');
    contact2title.innerText = 'Our Contact Information';
    contact2.appendChild(contact2title);
    const contact2desc = document.createElement('div');
    contact2desc.classList.add('contact-desc');
    contact2desc.innerText = 'To make a reservation by phone, call: \n (175) 322-0324 \n or to reserve by email: \n livegarden@bestrestaurant.com'; 
    contact2.appendChild(contact2desc);

    const contact3 = document.createElement('div');
    contact3.classList.add('contact-details');
    contactList.appendChild(contact3);
    const contact3title = document.createElement('div');
    contact3title.classList.add('contact-title');
    contact3title.innerText = 'Hours';
    contact3.appendChild(contact3title);
    const contact3desc = document.createElement('div');
    contact3desc.classList.add('contact-desc');
    contact3desc.innerText = 
    'Saturday: 11AM-10PM\nSunday: 11AM-9PM\nMonday: 11AM-9PM\nTuesday: 11AM-9PM\nWednesday: 11AM-9PM\nThursday: 11AM-9PM\nFriday: 11AM-10PM'; 
    contact3.appendChild(contact3desc);




}

export default contact