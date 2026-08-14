// Mess Menu Interactive App Logic
const menuData = window.menuData;

// State
let state = {
  currentWeek: menuData.currentWeekDefault, // 'even' by default
  selectedDay: getTodayName(),
  activeFilter: 'all',
  searchQuery: '',
  theme: localStorage.getItem('mess_theme') || 'dark',
  starredItems: JSON.parse(localStorage.getItem('mess_starred') || '[]'),
  userRating: parseInt(localStorage.getItem('mess_rating') || '0'),
  viewMode: 'daily' // 'daily' or 'weekly'
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getTodayName() {
  const dayIndex = new Date().getDay();
  return daysOfWeek[dayIndex];
}

// DOM Elements
let weekBtnEven, weekBtnOdd, themeToggleBtn, dayNavContainer, mealGridContainer, searchInput, filterChipsContainer;
let liveMealText, liveSubtext, timerBadge, specialDinnerModal, specialDinnerBtn, closeModalBtn;
let seasonalFruitsPills, seasonalJuicesPills, starRatingContainer, feedbackForm;
let shareBtn, viewModeBtn;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  weekBtnEven = document.getElementById('weekBtnEven');
  weekBtnOdd = document.getElementById('weekBtnOdd');
  themeToggleBtn = document.getElementById('themeToggleBtn');
  dayNavContainer = document.getElementById('dayNav');
  mealGridContainer = document.getElementById('mealGrid');
  searchInput = document.getElementById('searchInput');
  filterChipsContainer = document.getElementById('filterChips');
  liveMealText = document.getElementById('liveMealText');
  liveSubtext = document.getElementById('liveSubtext');
  timerBadge = document.getElementById('timerBadge');
  specialDinnerModal = document.getElementById('specialDinnerModal');
  specialDinnerBtn = document.getElementById('specialDinnerBtn');
  closeModalBtn = document.getElementById('closeModalBtn');
  seasonalFruitsPills = document.getElementById('seasonalFruitsPills');
  seasonalJuicesPills = document.getElementById('seasonalJuicesPills');
  starRatingContainer = document.getElementById('starRating');
  feedbackForm = document.getElementById('feedbackForm');
  shareBtn = document.getElementById('shareBtn');
  viewModeBtn = document.getElementById('viewModeBtn');

  initTheme();
  initWeekToggle();
  renderDayTabs();
  renderSeasonalWidgets();
  renderStarRating();
  initSearchAndFilters();
  initSpecialDinnerModal();
  initShareAndWeeklyView();
  updateLiveBanner();

  // Initial Render
  renderMeals();

  // Live Timer Interval (Every second)
  setInterval(updateLiveBanner, 1000);
});

// Theme Toggle
function initTheme() {
  document.body.setAttribute('data-theme', state.theme);
  themeToggleBtn.innerHTML = state.theme === 'dark' ? '☀️' : '🌙';

  themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', state.theme);
    localStorage.setItem('mess_theme', state.theme);
    themeToggleBtn.innerHTML = state.theme === 'dark' ? '☀️' : '🌙';
  });
}

// Week Toggle
function initWeekToggle() {
  weekBtnEven.addEventListener('click', () => setWeek('even'));
  weekBtnOdd.addEventListener('click', () => setWeek('odd'));
}

function setWeek(week) {
  state.currentWeek = week;
  if (week === 'even') {
    weekBtnEven.classList.add('active');
    weekBtnOdd.classList.remove('active');
  } else {
    weekBtnOdd.classList.add('active');
    weekBtnEven.classList.remove('active');
  }
  renderMeals();
}

// Render Day Selector Tabs
function renderDayTabs() {
  dayNavContainer.innerHTML = '';
  const today = getTodayName();

  daysOfWeek.forEach(day => {
    const btn = document.createElement('button');
    btn.className = `day-tab ${day === state.selectedDay ? 'active' : ''} ${day === today ? 'is-today' : ''}`;
    btn.innerHTML = `
      <span class="day-name">${day}</span>
      <span class="day-indicator">${day === today ? 'Today' : 'Menu'}</span>
    `;
    btn.addEventListener('click', () => {
      state.selectedDay = day;
      state.viewMode = 'daily';
      if (viewModeBtn) viewModeBtn.innerHTML = '📅 Weekly View';
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderMeals();
    });
    dayNavContainer.appendChild(btn);
  });
}

// Live Banner & Meal Timer
function updateLiveBanner() {
  if (!liveMealText) return;
  const now = new Date();
  const todayName = getTodayName();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Timings in minutes from midnight
  const timings = [
    { key: 'breakfast', name: 'Breakfast', icon: '🌅', start: 7 * 60, end: 9 * 60 + 30 },
    { key: 'lunch', name: 'Lunch', icon: '☀️', start: 12 * 60, end: 14 * 60 + 30 },
    { key: 'snacks', name: 'Snacks', icon: '☕', start: 16 * 60 + 30, end: 18 * 60 },
    { key: 'dinner', name: 'Dinner', icon: '🌙', start: 19 * 60 + 30, end: 21 * 60 + 30 }
  ];

  let currentMeal = null;
  let nextMeal = null;

  for (let i = 0; i < timings.length; i++) {
    if (currentMinutes >= timings[i].start && currentMinutes <= timings[i].end) {
      currentMeal = timings[i];
      break;
    }
    if (currentMinutes < timings[i].start) {
      nextMeal = timings[i];
      break;
    }
  }

  if (!nextMeal && !currentMeal) {
    nextMeal = timings[0]; // Next day's breakfast
  }

  if (currentMeal) {
    const remainingMins = currentMeal.end - currentMinutes;
    const hrs = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
    const secs = 59 - now.getSeconds();

    liveMealText.innerHTML = `Now Serving: ${currentMeal.icon} ${currentMeal.name}`;
    liveSubtext.textContent = `Mess is currently open for ${currentMeal.name.toLowerCase()} (${state.currentWeek.toUpperCase()} WEEK - ${todayName})`;
    timerBadge.innerHTML = `⏱️ Closes in ${hrs > 0 ? hrs + 'h ' : ''}${mins}m ${secs}s`;
    timerBadge.style.borderColor = '#22c55e';
  } else if (nextMeal) {
    let diff = nextMeal.start - currentMinutes;
    if (diff < 0) diff += 24 * 60; // Next day wrap
    const hrs = Math.floor(diff / 60);
    const mins = diff % 60;
    const secs = 59 - now.getSeconds();

    liveMealText.innerHTML = `Up Next: ${nextMeal.icon} ${nextMeal.name}`;
    liveSubtext.textContent = `Next meal starts at ${formatMinutes(nextMeal.start)} (${state.currentWeek.toUpperCase()} WEEK - ${todayName})`;
    timerBadge.innerHTML = `⏳ Starts in ${hrs > 0 ? hrs + 'h ' : ''}${mins}m ${secs}s`;
    timerBadge.style.borderColor = 'rgba(99, 102, 241, 0.4)';
  }

  highlightCurrentMealCard(currentMeal ? currentMeal.key : null);
}

function formatMinutes(totalMins) {
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const period = hrs >= 12 ? 'PM' : 'AM';
  const displayHrs = hrs % 12 === 0 ? 12 : hrs % 12;
  const displayMins = mins < 10 ? '0' + mins : mins;
  return `${displayHrs}:${displayMins} ${period}`;
}

function highlightCurrentMealCard(mealKey) {
  document.querySelectorAll('.meal-card').forEach(card => {
    if (card.dataset.mealKey === mealKey && state.selectedDay === getTodayName()) {
      card.classList.add('active-meal');
    } else {
      card.classList.remove('active-meal');
    }
  });
}

// Search and Filters
function initSearchAndFilters() {
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderMeals();
  });

  filterChipsContainer.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filterChipsContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.dataset.filter;
      renderMeals();
    });
  });
}

// Share & Weekly View Toggle
function initShareAndWeeklyView() {
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const weekData = state.currentWeek === 'even' ? menuData.evenWeek : menuData.oddWeek;
      const dayMenu = weekData[state.selectedDay];
      if (!dayMenu) return;

      let text = `📌 *Mess Menu for ${state.selectedDay} (${state.currentWeek.toUpperCase()} WEEK)*\n\n`;
      ['breakfast', 'lunch', 'snacks', 'dinner'].forEach(m => {
        const meta = menuData.mealTimings[m];
        text += `${meta.icon} *${meta.name.toUpperCase()}* (${meta.start} - ${meta.end}):\n`;
        (dayMenu[m] || []).forEach(item => {
          text += `  • ${item.name}\n`;
        });
        text += `\n`;
      });

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert("Today's menu copied to clipboard! You can share it on WhatsApp or Telegram.");
      } else {
        alert(text);
      }
    });
  }

  if (viewModeBtn) {
    viewModeBtn.addEventListener('click', () => {
      state.viewMode = state.viewMode === 'daily' ? 'weekly' : 'daily';
      viewModeBtn.innerHTML = state.viewMode === 'daily' ? '📅 Full Week' : '📋 Single Day';
      renderMeals();
    });
  }
}

// Render Meal Cards Grid or Weekly View
function renderMeals() {
  mealGridContainer.innerHTML = '';
  const weekData = state.currentWeek === 'even' ? menuData.evenWeek : menuData.oddWeek;

  if (state.viewMode === 'weekly') {
    // Render full week overview
    mealGridContainer.style.gridTemplateColumns = '1fr';
    const container = document.createElement('div');
    container.className = 'weekly-table-wrapper';
    
    let tableHTML = `
      <table class="weekly-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>🌅 Breakfast (07:00 - 09:30)</th>
            <th>☀️ Lunch (12:00 - 14:30)</th>
            <th>☕ Snacks (16:30 - 18:00)</th>
            <th>🌙 Dinner (19:30 - 21:30)</th>
          </tr>
        </thead>
        <tbody>
    `;

    daysOfWeek.forEach(day => {
      const dayMenu = weekData[day];
      const isToday = day === getTodayName();
      tableHTML += `<tr class="${isToday ? 'highlight-row' : ''}">
        <td class="day-cell"><strong>${day}</strong> ${isToday ? '<br><span style="color:#4ade80; font-size:0.75rem;">(Today)</span>' : ''}</td>
        <td>${formatCellItems(dayMenu.breakfast)}</td>
        <td>${formatCellItems(dayMenu.lunch)}</td>
        <td>${formatCellItems(dayMenu.snacks)}</td>
        <td>${formatCellItems(dayMenu.dinner)}</td>
      </tr>`;
    });

    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
    mealGridContainer.appendChild(container);
    return;
  }

  // Restore grid layout for daily view
  mealGridContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  const dayMenu = weekData[state.selectedDay];

  if (!dayMenu) return;

  const mealKeys = ['breakfast', 'lunch', 'snacks', 'dinner'];
  let totalMatchCount = 0;

  mealKeys.forEach(mealKey => {
    const mealMeta = menuData.mealTimings[mealKey];
    const items = dayMenu[mealKey] || [];

    // Filter Items based on search and chip
    const filteredItems = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) ||
                            item.tags.some(t => t.toLowerCase().includes(state.searchQuery));
      
      let matchesFilter = true;
      if (state.activeFilter === 'veg') {
        matchesFilter = item.tags.includes('Veg') && !item.tags.includes('Non-Veg');
      } else if (state.activeFilter === 'nonveg') {
        matchesFilter = item.tags.includes('Non-Veg') || item.tags.includes('Egg');
      } else if (state.activeFilter === 'special') {
        matchesFilter = item.tags.includes('Special') || item.tags.includes('Limited***');
      } else if (state.activeFilter === 'desserts') {
        matchesFilter = item.tags.includes('Dessert') || item.tags.includes('Sweet');
      }

      return matchesSearch && matchesFilter;
    });

    if (filteredItems.length > 0 || state.searchQuery === '') {
      totalMatchCount += filteredItems.length;

      const card = document.createElement('div');
      card.className = 'meal-card';
      card.dataset.mealKey = mealKey;

      const currentMealName = getCurrentMealKey();
      if (mealKey === currentMealName && state.selectedDay === getTodayName()) {
        card.classList.add('active-meal');
      }

      card.innerHTML = `
        <div class="meal-header">
          <div class="meal-title-group">
            <div class="meal-icon-wrapper" style="background: ${mealMeta.color}20; color: ${mealMeta.color};">
              ${mealMeta.icon}
            </div>
            <div>
              <div class="meal-title">${mealMeta.name}</div>
              <div class="meal-time">${mealMeta.start} - ${mealMeta.end}</div>
            </div>
          </div>
        </div>
        <div class="items-list">
          ${filteredItems.length > 0 ? filteredItems.map(item => createItemRowHTML(item)).join('') : '<p style="color:var(--text-muted); font-size:0.85rem; padding:10px;">No matching items for this meal.</p>'}
        </div>
      `;

      mealGridContainer.appendChild(card);
    }
  });

  if (totalMatchCount === 0 && state.searchQuery !== '') {
    mealGridContainer.innerHTML = `
      <div class="empty-state">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3>No dishes found matching "${state.searchQuery}"</h3>
        <p style="margin-top: 6px; font-size:0.9rem;">Try searching for "Biryani", "Paneer", "Dosa", "Ice Cream", or clear your filter.</p>
      </div>
    `;
  }

  // Attach Star Events
  attachStarListeners();
}

function formatCellItems(items) {
  if (!items || items.length === 0) return '-';
  return items.map(i => `<div style="margin-bottom:4px; font-size:0.85rem;">• ${i.name}</div>`).join('');
}

function getCurrentMealKey() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  if (currentMinutes >= 7 * 60 && currentMinutes <= 9 * 60 + 30) return 'breakfast';
  if (currentMinutes >= 12 * 60 && currentMinutes <= 14 * 60 + 30) return 'lunch';
  if (currentMinutes >= 16 * 60 + 30 && currentMinutes <= 18 * 60) return 'snacks';
  if (currentMinutes >= 19 * 60 + 30 && currentMinutes <= 21 * 60 + 30) return 'dinner';
  return null;
}

function createItemRowHTML(item) {
  const isStarred = state.starredItems.includes(item.name);
  const tagsHTML = item.tags.map(tag => {
    let tagClass = 'tag-choice';
    if (tag === 'Veg') tagClass = 'tag-veg';
    if (tag === 'Non-Veg') tagClass = 'tag-nonveg';
    if (tag === 'Special' || tag === 'Limited***') tagClass = 'tag-special';
    if (tag === 'Dessert' || tag === 'Sweet') tagClass = 'tag-dessert';
    if (tag === 'Healthy') tagClass = 'tag-healthy';
    return `<span class="tag ${tagClass}">${tag}</span>`;
  }).join('');

  return `
    <div class="item-row ${isStarred ? 'is-starred' : ''}">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-tags">${tagsHTML}</div>
      </div>
      <button class="star-btn ${isStarred ? 'starred' : ''}" data-item-name="${item.name}">
        ${isStarred ? '★' : '☆'}
      </button>
    </div>
  `;
}

function attachStarListeners() {
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemName = btn.dataset.itemName;
      if (state.starredItems.includes(itemName)) {
        state.starredItems = state.starredItems.filter(i => i !== itemName);
      } else {
        state.starredItems.push(itemName);
      }
      localStorage.setItem('mess_starred', JSON.stringify(state.starredItems));
      renderMeals();
    });
  });
}

// Seasonal Widgets
function renderSeasonalWidgets() {
  if (!seasonalFruitsPills || !seasonalJuicesPills) return;
  seasonalFruitsPills.innerHTML = menuData.seasonalExtras.cutFruits.map(fruit => `
    <span class="seasonal-pill">🍎 ${fruit}</span>
  `).join('');

  seasonalJuicesPills.innerHTML = menuData.seasonalExtras.juices.map(juice => `
    <span class="seasonal-pill">🥤 ${juice}</span>
  `).join('');
}

// Rating & Feedback
function renderStarRating() {
  if (!starRatingContainer) return;
  const stars = starRatingContainer.querySelectorAll('i');
  updateStarDisplay(state.userRating);

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.value);
      state.userRating = rating;
      localStorage.setItem('mess_rating', rating.toString());
      updateStarDisplay(rating);
    });
  });

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const comment = document.getElementById('feedbackText').value;
      if (comment.trim()) {
        alert('Thank you for rating today\'s mess menu! Your feedback has been recorded.');
        document.getElementById('feedbackText').value = '';
      } else {
        alert('Feedback submitted!');
      }
    });
  }
}

function updateStarDisplay(rating) {
  if (!starRatingContainer) return;
  const stars = starRatingContainer.querySelectorAll('i');
  stars.forEach(s => {
    const val = parseInt(s.dataset.value);
    if (val <= rating) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

// Special Dinner Modal
function initSpecialDinnerModal() {
  if (!specialDinnerBtn || !specialDinnerModal) return;
  specialDinnerBtn.addEventListener('click', () => {
    specialDinnerModal.classList.add('open');
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      specialDinnerModal.classList.remove('open');
    });
  }

  specialDinnerModal.addEventListener('click', (e) => {
    if (e.target === specialDinnerModal) {
      specialDinnerModal.classList.remove('open');
    }
  });
}
