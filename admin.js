// Simple Energy Sangamner - Admin Portal Engine
// Dealer: VIRAAJ EV MOTORS | Authorized Access

const ADMIN_CREDENTIALS = {
  username: 'Virajmotors_Sangamner',
  password: 'Sangamner9919'
};

const MAX_CONCURRENT_LOGINS = 2;
const SESSION_TIMEOUT_MS = 45 * 60 * 1000; // 45 minutes session timeout

let currentSessionId = sessionStorage.getItem('se_admin_session_id');

// Clean up any previously seeded mock/fake data so ONLY real customer reviews appear
function purgeFakeSeedData() {
  try {
    const raw = localStorage.getItem('simpleenergy_reviews_log');
    if (!raw) return;
    let reviews = JSON.parse(raw);
    // Remove any review containing 'rev_seed_'
    const realReviews = reviews.filter(r => !r.id || !r.id.startsWith('rev_seed_'));
    localStorage.setItem('simpleenergy_reviews_log', JSON.stringify(realReviews));
  } catch (e) {
    console.warn("Clean error:", e);
  }
}

// Session Management (Max 2 Concurrent Logins)
function getActiveSessions() {
  const raw = localStorage.getItem('simpleenergy_admin_sessions');
  const now = Date.now();
  if (!raw) return [];

  try {
    let sessions = JSON.parse(raw);
    sessions = sessions.filter(s => now - s.lastActive < SESSION_TIMEOUT_MS);
    localStorage.setItem('simpleenergy_admin_sessions', JSON.stringify(sessions));
    return sessions;
  } catch (e) {
    return [];
  }
}

function registerSession() {
  const sessionId = 'sess_' + Math.random().toString(36).substring(2) + Date.now();
  let sessions = getActiveSessions();

  if (sessions.length >= MAX_CONCURRENT_LOGINS) {
    return {
      success: false,
      message: `Limit reached: Maximum ${MAX_CONCURRENT_LOGINS} admin logins are currently active. If you closed a browser without logging out, click below to clear past sessions.`
    };
  }

  sessions.push({
    sessionId: sessionId,
    user: ADMIN_CREDENTIALS.username,
    loginTime: Date.now(),
    lastActive: Date.now()
  });

  localStorage.setItem('simpleenergy_admin_sessions', JSON.stringify(sessions));
  sessionStorage.setItem('se_admin_session_id', sessionId);
  currentSessionId = sessionId;
  return { success: true };
}

function touchSession() {
  if (!currentSessionId) return;
  let sessions = getActiveSessions();
  const session = sessions.find(s => s.sessionId === currentSessionId);
  if (session) {
    session.lastActive = Date.now();
    localStorage.setItem('simpleenergy_admin_sessions', JSON.stringify(sessions));
  }
}

function removeCurrentSession() {
  if (!currentSessionId) return;
  let sessions = getActiveSessions();
  sessions = sessions.filter(s => s.sessionId !== currentSessionId);
  localStorage.setItem('simpleenergy_admin_sessions', JSON.stringify(sessions));
  sessionStorage.removeItem('se_admin_session_id');
  currentSessionId = null;
}

function forceResetSessions() {
  localStorage.removeItem('simpleenergy_admin_sessions');
  sessionStorage.removeItem('se_admin_session_id');
  currentSessionId = null;
  alert("All active admin sessions have been reset. You can now log in.");
  window.location.reload();
}

// Authentication check
function checkAuth() {
  const sessions = getActiveSessions();
  const isValid = currentSessionId && sessions.some(s => s.sessionId === currentSessionId);

  const loginSec = document.getElementById('loginSection');
  const dashSec = document.getElementById('dashboardSection');

  if (isValid) {
    loginSec.classList.add('hidden');
    dashSec.classList.remove('hidden');
    loadDashboard();
  } else {
    loginSec.classList.remove('hidden');
    dashSec.classList.add('hidden');
  }
}

// Dashboard Data Loading & Calculation (Real Data Only)
function loadDashboard() {
  touchSession();
  
  const dateEl = document.getElementById('currentDateDisplay');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Active Sessions Badge
  const sessions = getActiveSessions();
  const sessionCountText = document.getElementById('sessionCountText');
  if (sessionCountText) {
    sessionCountText.textContent = `${sessions.length} of ${MAX_CONCURRENT_LOGINS} Logins Active`;
  }

  const reviews = JSON.parse(localStorage.getItem('simpleenergy_reviews_log') || '[]');

  // Current Date Metrics
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  const currentMonthName = now.toLocaleString('en-IN', { month: 'short' });
  const prevMonthDate = new Date(currentYear, currentMonth - 1, 1);
  const prevMonthName = prevMonthDate.toLocaleString('en-IN', { month: 'short' });

  let thisMonthCount = 0;
  let lastMonthCount = 0;
  let thisYearCount = 0;
  let starSum = 0;

  let star5Count = 0;
  let star4Count = 0;
  let starGrievanceCount = 0;

  let salesCount = 0;
  let serviceCount = 0;

  let waveCount = 0;
  let oneCount = 0;
  let ultraCount = 0;

  const monthsSet = new Set();

  reviews.forEach(r => {
    const rDate = new Date(r.timestamp);
    const rMonth = rDate.getMonth();
    const rYear = rDate.getFullYear();

    if (r.monthYear) monthsSet.add(r.monthYear);

    // Month Counts
    if (rYear === currentYear && rMonth === currentMonth) {
      thisMonthCount++;
    } else if (
      (rYear === currentYear && rMonth === currentMonth - 1) ||
      (currentMonth === 0 && rYear === currentYear - 1 && rMonth === 11)
    ) {
      lastMonthCount++;
    }

    // Year Count
    if (rYear === currentYear) {
      thisYearCount++;
    }

    // Stars
    const s = r.stars || 5;
    starSum += s;
    if (s === 5) star5Count++;
    else if (s === 4) star4Count++;
    else starGrievanceCount++;

    // Purpose
    if (r.purpose && r.purpose.includes('Delivery')) {
      salesCount++;
    } else {
      serviceCount++;
    }

    // Models
    const cat = r.modelCategory || '';
    if (cat.includes('Wave')) waveCount++;
    else if (cat.includes('One')) oneCount++;
    else if (cat.includes('Ultra')) ultraCount++;
  });

  const avgRating = reviews.length > 0 ? (starSum / reviews.length).toFixed(1) : '5.0';

  // Render KPIs
  document.getElementById('kpiTotalReviews').textContent = reviews.length;
  document.getElementById('kpiThisMonth').textContent = thisMonthCount;
  document.getElementById('kpiThisMonthLabel').textContent = `${currentMonthName} ${currentYear}`;
  document.getElementById('kpiLastMonth').textContent = lastMonthCount;
  document.getElementById('kpiLastMonthLabel').textContent = `${prevMonthName} ${prevMonthDate.getFullYear()}`;
  document.getElementById('kpiThisYear').textContent = thisYearCount;
  document.getElementById('kpiAvgRating').textContent = avgRating;

  // Render Stars Distribution
  document.getElementById('statStar5').textContent = star5Count;
  document.getElementById('statStar4').textContent = star4Count;
  document.getElementById('statStarGrievance').textContent = starGrievanceCount;

  const total = reviews.length || 1;
  document.getElementById('barStar5').style.width = reviews.length ? `${(star5Count / total) * 100}%` : '0%';
  document.getElementById('barStar4').style.width = reviews.length ? `${(star4Count / total) * 100}%` : '0%';
  document.getElementById('barStarGrievance').style.width = reviews.length ? `${(starGrievanceCount / total) * 100}%` : '0%';

  // Purpose Stats
  document.getElementById('statPurposeSales').textContent = salesCount;
  document.getElementById('statPurposeService').textContent = serviceCount;

  // Model Stats
  document.getElementById('statModelWave').textContent = `${waveCount} units`;
  document.getElementById('statModelOne').textContent = `${oneCount} units`;
  document.getElementById('statModelUltra').textContent = `${ultraCount} units`;

  // Populate Month Filter Dropdown
  const monthFilter = document.getElementById('filterMonth');
  if (monthFilter) {
    monthFilter.innerHTML = '<option value="all">All Months</option>';
    monthsSet.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      monthFilter.appendChild(opt);
    });
  }

  // Render Table
  renderReviewsTable();
}

// Render Reviews Table with Filter Support
function renderReviewsTable() {
  const reviews = JSON.parse(localStorage.getItem('simpleenergy_reviews_log') || '[]');
  const tableBody = document.getElementById('reviewsTableBody');
  const noNotice = document.getElementById('noReviewsNotice');
  if (!tableBody) return;

  const filterPurpose = document.getElementById('filterPurpose') ? document.getElementById('filterPurpose').value : 'all';
  const filterMonth = document.getElementById('filterMonth') ? document.getElementById('filterMonth').value : 'all';

  const filtered = reviews.filter(r => {
    if (filterPurpose !== 'all' && r.purpose !== filterPurpose) return false;
    if (filterMonth !== 'all' && r.monthYear !== filterMonth) return false;
    return true;
  });

  tableBody.innerHTML = '';

  if (filtered.length === 0) {
    noNotice.classList.remove('hidden');
    if (reviews.length === 0) {
      noNotice.innerHTML = `
        <div class="py-8 text-center">
          <div class="text-3xl mb-2">📊</div>
          <p class="font-bold text-slate-700 text-sm">No Customer Reviews Yet</p>
          <p class="text-slate-400 text-xs mt-1">Real reviews will automatically appear here as soon as customers tap "Copy Review & Open Google" on the front app.</p>
        </div>
      `;
    } else {
      noNotice.innerHTML = `<div class="py-6 text-center text-slate-400">No reviews found matching your filter selection.</div>`;
    }
    return;
  }
  noNotice.classList.add('hidden');

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50 transition';

    const starStr = '★'.repeat(item.stars || 5);

    let photoHtml = '<span class="text-slate-400">None</span>';
    if (item.photoDataUrl) {
      photoHtml = `
        <img src="${item.photoDataUrl}" class="w-9 h-9 object-cover rounded-lg border border-slate-200 cursor-pointer hover:scale-110 transition shadow-sm" onclick="openPhotoModal('${item.photoDataUrl}')" title="Click to view full photo">
      `;
    }

    const shortReview = (item.reviewText || '').length > 70 
      ? (item.reviewText || '').substring(0, 70) + '...'
      : item.reviewText;

    tr.innerHTML = `
      <td class="p-3 whitespace-nowrap">
        <div class="font-bold text-slate-900">${item.dateStr || ''}</div>
        <div class="text-[10px] text-slate-400">${item.timeStr || ''}</div>
      </td>
      <td class="p-3 whitespace-nowrap">
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold text-[10px] ${
          item.purpose.includes('Delivery') ? 'bg-blue-100 text-blue-800' : 'bg-indigo-100 text-indigo-800'
        }">
          ${item.purpose.includes('Delivery') ? '🛵 ' : '🔧 '}${item.purpose}
        </span>
      </td>
      <td class="p-3">
        <div class="font-bold text-slate-900">${item.variant || item.modelCategory}</div>
        <div class="text-[10px] text-slate-500">${item.highlights || item.experience || ''}</div>
      </td>
      <td class="p-3 whitespace-nowrap">
        <span class="text-amber-500 font-bold tracking-wider">${starStr}</span>
      </td>
      <td class="p-3 whitespace-nowrap">
        ${photoHtml}
      </td>
      <td class="p-3 max-w-xs text-[11px] text-slate-600">
        <span title="${item.reviewText}">${shortReview}</span>
      </td>
      <td class="p-3 whitespace-nowrap">
        <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md font-semibold text-[10px]">
          ${item.status || 'Proceeded to Google'}
        </span>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

// One-Click Excel / CSV Download with UTF-8 BOM
function exportToExcel() {
  const reviews = JSON.parse(localStorage.getItem('simpleenergy_reviews_log') || '[]');
  
  if (reviews.length === 0) {
    alert("No real customer reviews recorded yet to export!");
    return;
  }

  const headers = [
    "ID",
    "Date",
    "Time",
    "Month-Year",
    "Visit Purpose",
    "Model Category",
    "Variant Name",
    "Star Rating",
    "Experience Level",
    "Key Highlights",
    "Language",
    "Photo Attached",
    "Generated Review Note",
    "Status"
  ];

  const rows = [headers];

  reviews.forEach(r => {
    rows.push([
      r.id || '',
      r.dateStr || '',
      r.timeStr || '',
      r.monthYear || '',
      r.purpose || '',
      r.modelCategory || '',
      r.variant || '',
      r.stars || 5,
      r.experience || '',
      r.highlights || '',
      r.language || '',
      r.hasPhoto ? 'Yes' : 'No',
      `"${(r.reviewText || '').replace(/"/g, '""')}"`,
      r.status || 'Proceeded to Google'
    ]);
  });

  const csvContent = rows.map(e => e.join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
  
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  const now = new Date();
  const fileDate = `${now.getFullYear()}_${now.getMonth() + 1}`;
  
  link.setAttribute("href", url);
  link.setAttribute("download", `SimpleEnergy_Sangamner_Reviews_${fileDate}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Photo Modal Functions
function openPhotoModal(imgSrc) {
  const modal = document.getElementById('photoModal');
  const img = document.getElementById('modalPhotoImg');
  if (modal && img) {
    img.src = imgSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePhotoModal() {
  const modal = document.getElementById('photoModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  purgeFakeSeedData();

  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('usernameInput').value.trim();
      const pass = document.getElementById('passwordInput').value.trim();

      if (user !== ADMIN_CREDENTIALS.username || pass !== ADMIN_CREDENTIALS.password) {
        loginError.textContent = "Invalid username or password. Please try again.";
        loginError.classList.remove('hidden');
        return;
      }

      const sessionResult = registerSession();
      if (!sessionResult.success) {
        loginError.innerHTML = `
          <div>${sessionResult.message}</div>
          <button type="button" onclick="forceResetSessions()" class="mt-2 underline font-bold text-rose-800">Force Clear All Sessions</button>
        `;
        loginError.classList.remove('hidden');
        return;
      }

      loginError.classList.add('hidden');
      checkAuth();
    });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      removeCurrentSession();
      checkAuth();
    });
  }

  const exportBtn = document.getElementById('exportExcelBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportToExcel);
  }

  const filterPurpose = document.getElementById('filterPurpose');
  const filterMonth = document.getElementById('filterMonth');
  if (filterPurpose) filterPurpose.addEventListener('change', renderReviewsTable);
  if (filterMonth) filterMonth.addEventListener('change', renderReviewsTable);

  setInterval(touchSession, 2 * 60 * 1000);
  checkAuth();
});
