'use strict';

var $headerWrap = $('#header-wrap');
var $carouselWrap = $('#carousel-wrap');
var $calendarWrap = $('#calendar-wrap');
var $compareWrap = $('#image-compare-wrap');

var content = {
    headline: 'The Grand Budapest Hotel',
    subtitle: 'Definitely a real hotel',
    headlineImageUrl: 'http://straightfromamovie.com/wp-content/uploads/2015/03/The-Grand-Budapest-Hotel.jpg',
    carouselContent: [{
        url: 'https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542b280ae4b0a87901dc4b44/1412114444028/?format=2500w',
        description: 'The Görlitz Warenhaus Department Store was the location for the internals of the hotel'
    }, {
        url: 'https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542b905fe4b09c64e0e473c6/1412141154410/?format=2500w',
        description: 'Inspiration came from photochrome prints from the 1920\'s and 30\'s'
    }, {
        url: 'https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542ba764e4b091f86ebe568f/1412147046096/?format=2500w',
        description: 'The musem scenes were filmed in the Zwinger Museum in Dresden'
    }, {
        url: 'https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542d74b6e4b049c92db2fbfc/1412265142924/?format=2500w',
        description: 'The mountain top viewing platform is real and located in Sächsische Schweiz'
    }],
    compareImages: ['https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542b8e0ee4b0efb6cda43172/1412140564617/?format=2500w', 'https://static1.squarespace.com/static/5266b2bde4b08e763cc132d2/t/542b8dd5e4b0717c53612b4c/1412140508330/?format=2500w']

    // HEADER
};var headerTitle = $('<div>\n                        <img src=' + content.headlineImageUrl + '>\n                        <h1>' + content.headline + '</h1>\n                        <h3>' + content.subtitle + '</h3>\n                    </div>');
$headerWrap.append(headerTitle);

// CAROUSEL
var carouselElement = $('<div class="carousel-element"></div>');
var amountOfTiles = 0;

content.carouselContent.forEach(function (data, index) {
    var carouselTile = $('<div class="carousel-tile">\n                            <img src=' + data.url + '><p>' + data.description + '</p>\n                        </div>');
    carouselElement.append(carouselTile);
    amountOfTiles++;
});

var widthPercent = amountOfTiles * 100;
carouselElement.css({ 'width': widthPercent + '%' });
carouselElement.find('.carousel-tile').css({ 'width': 100 / amountOfTiles + '%' });

var position = 0;
carouselElement.on('click', function () {
    position++;
    position >= amountOfTiles ? position = 0 : position = position;

    if (position === 0) {
        carouselElement.css({ 'left': '0' });
    } else {
        carouselElement.css({ 'left': '-' + position * 100 + '%' });
    }
});
$carouselWrap.append(carouselElement);

// COMPARE IMAGES
var imageCompare = $('<div class="image-wrapper"></div>');
var leftImage = $('<div class="image-left image-compare"></div>').css({ 'background-image': 'url(' + content.compareImages[0] + ')' });
var rightImage = $('<div class="image-right image-compare"></div>').css({ 'background-image': 'url(' + content.compareImages[1] + ')' });
imageCompare.append(leftImage, rightImage);
$compareWrap.append(imageCompare);

rightImage.hover(function () {
    rightImage.css({ 'opacity': '0' });
}, function () {
    rightImage.css({ 'opacity': '1' });
});

// CALENDAR
// add a json object of free dates
// click on a date to book , alert to confirm
// edit the json object and reload it to show booked dates
//# sourceMappingURL=app.js.map
