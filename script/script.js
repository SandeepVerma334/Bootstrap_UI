// Discover more explore page
document.querySelector('.viewpoints-text-section').addEventListener('click', function () {
  const modal = document.querySelector('.discover-explore');
  const discover_more_page = document.querySelector('.discover-more-page');
  modal.style.display = 'block';
  modal.classList.add('active-modal');
  discover_more_page.classList.add('active-discover-more-page');
});
document.querySelector('.btn-close').addEventListener('click', function () {
  const modal = document.querySelector('.discover-explore');
  const discover_more_page = document.querySelector('.discover-more-page');
  modal.style.display = 'none';
  modal.classList.remove('active-modal');
  discover_more_page.classList.remove('active-discover-more-page');
});

// filters section page popup modal show and hide

document.querySelector('.filter-icons').addEventListener('click', function (event) {
  const filters_modal = document.querySelector('.filters-modal');
  const discover_more_page = document.querySelector('.discover-more-page');
  filters_modal.style.display = 'block';
  filters_modal.classList.add('active-filters_modal');
  discover_more_page.classList.add('active-discover-more-page');
});
document.querySelector('.close-btn').addEventListener('click', function () {
  const filters_modal = document.querySelector('.filters-modal');
  const discover_more_page = document.querySelector('.discover-more-page');
  filters_modal.style.display = 'none';
  filters_modal.classList.remove('active-filters_modal');
  discover_more_page.classList.remove('active-discover-more-page');
});
// END