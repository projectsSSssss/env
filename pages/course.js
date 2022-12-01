const gallery = document.querySelector('.videos-gallery');
const curators = document.querySelector('.curators');
const titleHeader = document.querySelector('.course__title');
const textHeader = document.querySelector('.course__text');
const iframeHeader = document.querySelector('.subheader__iframe');

const createVideoSection = ({name, shortCode, src}) => {
  const element = document.querySelector('#video-item')
    .content
    .querySelector('.video')
    .cloneNode(true);
  element.querySelector('.section__title').textContent = name;
  element.querySelector('.section__text').textContent = shortCode;
  element.querySelector('.video__iframe').src = src;
  return element;
}

const createCuratorsSection = ({src, name, description}) => {
  const element = document.querySelector('#curator-item')
    .content
    .querySelector('.curators__container')
    .cloneNode(true);

  element.querySelector('.curators__img').src = src;
  element.querySelector('.curators__name').textContent = name;
  element.querySelector('.curators__description').textContent = description;

  return element;
}

const renderSections = ({renderer, items}) => {
  items.forEach(item => {
    renderer(item);
  });
}

document.addEventListener('DOMContentLoaded', _ => {
  const index = window.location.href.split("?")[1].split("=")[1];
  document.querySelector('#title').innerHTML = courses[index].name;
  textHeader.textContent = courses[index].description;
  iframeHeader.src = courses[index].src;
  renderSections({
    renderer: (item) => {
      gallery.append(createVideoSection(item))
    }, items: courses[index].parts});
  renderSections({
    renderer: (item) => {
      curators.append(createCuratorsSection(item))
    }, items: courses[index].curators});
});
