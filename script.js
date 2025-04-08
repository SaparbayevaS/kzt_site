let currentSection = 0;

const sections = [
    {
        image: 'image1.jpg',
        title: 'Жобаны таныстыру',
        text: '«Ақылды тұрғын үй таңдауы» – сіздің бюджетіңізге сай ең жақсы тұрғын үйді табуға көмектесетін сервис.'
    },
    {
        image: 'image2.jpg',
        title: 'Неліктен тұрғын үй таңдау қиын?',
        text: '<ul><li>Ақпараттың шашыраңқылығы</li><li>Бағаның тұрақсыздығы</li><li>Қаржылық қиындықтар</li><li>Алаяқтық қаупі</li></ul>'
    },
    {
        image: 'image3.jpg',
        title: 'Жүйе қалай жұмыс істейді?',
        text: '<ol><li>Тұрғын үй кешенінің атауын және бюджетіңізді енгізесіз.</li><li>Жүйе инфрақұрылымды, көлік қатынасын, өмір сүру деңгейін талдайды.</li><li>Ең тиімді төлем тәсілдерін есептейді.</li><li>Толық есеп пен ұсыныстар аласыз.</li></ol>'
    }
];

function showNextSection() {
    const imageContainer = document.getElementById('image-container');
    const overlay = document.getElementById('image-overlay');
    const title = document.getElementById('title');
    const text = document.getElementById('text');

    imageContainer.style.opacity = '0';
    overlay.style.opacity = '0';

    const section = sections[currentSection];

    imageContainer.style.backgroundImage = `url(${section.image})`;
    title.innerHTML = section.title;
    text.innerHTML = section.text;

    setTimeout(() => {
        imageContainer.style.opacity = '1'; 
    }, 100);

    setTimeout(() => {
        overlay.style.transition = 'opacity 1s ease-in-out'; 
        overlay.style.opacity = '1';
    }); 

    currentSection = (currentSection + 1) % sections.length;
}

window.onload = () => {
    showNextSection();
    setInterval(showNextSection, 6000);
};

let houses = [
    {
        city: "Алматы",
        price: 50,
        paymentMethod: "ипотека",
        builderTrust: "senim",
        locationFuture: "developing",
        quality: "жақсы",
        name: "Жаңа тұрғын үй",
    },
    {
        city: "Астана",
        price: 40,
        paymentMethod: "рассрочка",
        builderTrust: "untrusted",
        locationFuture: "established",
        quality: "қанағаттанарлық",
        name: "Астана тұрғын үй кешені",
    },
    {
        city: "Шымкент",
        price: 60,
        paymentMethod: "толық рассрочка",
        builderTrust: "senim",
        locationFuture: "established",
        quality: "жақсы",
        name: "Шымкент Тұрғын үй",
    },
    // Добавьте другие дома
];

function searchHousing() {
    const city = document.getElementById('city').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const builderTrust = document.getElementById('builderTrust').value;
    const locationFuture = document.getElementById('locationFuture').value;

    let filteredHouses = houses;

    if (city) {
        filteredHouses = filteredHouses.filter(house => house.city === city);
    }

    if (maxPrice) {
        filteredHouses = filteredHouses.filter(house => house.price <= maxPrice);
    }

    if (paymentMethod) {
        filteredHouses = filteredHouses.filter(house => house.paymentMethod === paymentMethod);
    }

    if (builderTrust) {
        filteredHouses = filteredHouses.filter(house => house.builderTrust === builderTrust);
    }

    if (locationFuture) {
        filteredHouses = filteredHouses.filter(house => house.locationFuture === locationFuture);
    }

    displayResults(filteredHouses);
}

function displayResults(filteredHouses) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (filteredHouses.length === 0) {
        resultsDiv.innerHTML = '<p>Сізге сәйкес үйлер табылмады.</p>';
        return;
    }

    filteredHouses.forEach(house => {
        const houseElement = document.createElement('div');
        houseElement.classList.add('house');

        houseElement.innerHTML = `
            <h3>${house.name}</h3>
            <p>Қала: ${house.city}</p>
            <p>Баға: ${house.price} млн ₸</p>
            <p>Төлем тәсілі: ${house.paymentMethod}</p>
            <p>Үй салушы: ${house.builderTrust === "senim" ? "Сенімді" : "Сенімсіз"}</p>
            <p>Орналасу орны: ${house.locationFuture === "developing" ? "Дамып келе жатқан" : "Қалыптасқан"}</p>
            <p>Үй сапасы: ${house.quality}</p>
        `;

        resultsDiv.appendChild(houseElement);
    });
}
document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      let imagePath = ''; 
      // Определим изображение для каждого пункта
      if (this.id === 'item1') {
        imagePath = 'https://images.unsplash.com/photo-1742590794223-5e55f1c9e63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
      } else if (this.id === 'item2') {
        imagePath = 'https://images.unsplash.com/photo-1742590794223-5e55f1c9e63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
      } else if (this.id === 'item3') {
        imagePath = 'https://images.unsplash.com/photo-1742590794223-5e55f1c9e63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
      } else if (this.id === 'item4') {
        imagePath = 'https://images.unsplash.com/photo-1742590794223-5e55f1c9e63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
      }
      
      // Показываем изображение в маленьком окошке
      const popup = document.getElementById('image-popup');
      const img = popup.querySelector('img');
      img.src = imagePath;
      popup.style.display = 'flex'; // Показываем окошко
    });
  
    item.addEventListener('mouseleave', function() {
      const popup = document.getElementById('image-popup');
      popup.style.display = 'none'; // Скрываем окошко, когда курсор уходит
    });
  });
  
  