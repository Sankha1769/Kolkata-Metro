/**
 * AEGIS - Kolkata Metro Timetable Logic
 * Separated from index.html
 */

// --- Theme Toggle Logic ---
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeBtn.innerHTML = '🌙';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '☀️';
    }
});


// --- Chatbot (Juhi) UI Logic ---
document.getElementById('juhi-btn').addEventListener('click', () => {
    document.getElementById('juhi-window').classList.remove('hidden');
});
document.getElementById('close-juhi').addEventListener('click', () => {
    document.getElementById('juhi-window').classList.add('hidden');
});


// --- Timetable Generation & Data ---
function generateTimes(startH, startM, endH, endM, interval, travelTime, prefix) {
    let times = [];
    let curH = startH;
    let curM = startM;
    let count = 1;
    while(curH < endH || (curH === endH && curM <= endM)) {
        let depH = curH.toString().padStart(2, '0');
        let depM = curM.toString().padStart(2, '0');
        times.push({
            trn: `${prefix}-${count}`,
            dep: `${depH}:${depM}:00`
        });
        curM += interval;
        if(curM >= 60) {
            curH += Math.floor(curM / 60);
            curM = curM % 60;
        }
        count += 2;
    }
    return times;
}

const db = {
    blue: {
        color: "#00a8ff", rgb: "0, 168, 255",
        upRoute: "DAKSHINESWAR >> KAVI SUBHASH", dnRoute: "KAVI SUBHASH >> DAKSHINESWAR",
        upTerminal: "Kavi Subhash", dnTerminal: "Dakshineswar",
        upIsForward: true, travelTime: 67,
        stations: [
            { code: "KDSW", name: "Dakshineswar" }, { code: "KBAR", name: "Baranagar" }, { code: "KNAP", name: "Noapara" },
            { code: "KDMI", name: "Dum Dum" }, { code: "KBEL", name: "Belgachia" }, { code: "KSHY", name: "Shyambazar" },
            { code: "KSHO", name: "Shobhabazar" }, { code: "KGPK", name: "Girish Park" }, { code: "KMHR", name: "Mahatma Gandhi Road" },
            { code: "KCEN", name: "Central" }, { code: "KCWC", name: "Chandni Chowk" }, { code: "KESP", name: "Esplanade" },
            { code: "KPSK", name: "Park Street" }, { code: "KMDI", name: "Maidan" }, { code: "KRSD", name: "Rabindra Sadan" },
            { code: "KNBN", name: "Netaji Bhavan" }, { code: "KJPK", name: "Jatin Das Park" }, { code: "KKHG", name: "Kali Ghat" },
            { code: "KRSB", name: "Rabindra Sarobar" }, { code: "KMUK", name: "Mahanayak Uttam Kumar" }, { code: "KNTJ", name: "Netaji" },
            { code: "KMSN", name: "Masterda Surya Sen" }, { code: "KGTN", name: "Gitanjali" }, { code: "KKNZ", name: "Kavi Nazrul" },
            { code: "KSKD", name: "Shahid Khudiram" }, { code: "KKVS", name: "Kavi Subhash" }
        ],
        weekday: { 
            up: generateTimes(6, 50, 21, 44, 6, 64, "SDS").map(t => ({...t, startIdx: 0, endIdx: 25, dest: "Kavi Subhash"})), 
            dn: generateTimes(6, 50, 21, 38, 6, 64, "DSS").map(t => ({...t, startIdx: 25, endIdx: 0, dest: "Dakshineswar"})) 
        },
        saturday: { 
            up: generateTimes(6, 54, 21, 43, 7, 63, "KDS").map(t => ({...t, startIdx: 0, endIdx: 25, dest: "Kavi Subhash"})), 
            dn: generateTimes(6, 50, 21, 28, 7, 63, "DSK").map(t => ({...t, startIdx: 25, endIdx: 0, dest: "Dakshineswar"})) 
        },
        sunday: { 
            up: generateTimes(9, 0, 21, 43, 10, 66, "KDS").map(t => ({...t, startIdx: 0, endIdx: 25, dest: "Kavi Subhash"})), 
            dn: generateTimes(9, 0, 21, 38, 10, 66, "DSK").map(t => ({...t, startIdx: 25, endIdx: 0, dest: "Dakshineswar"})) 
        }
    },
    green: {
        color: "#4cd137", rgb: "76, 209, 55",
        upRoute: "HOWRAH MAIDAN >> SECTOR V", dnRoute: "SECTOR V >> HOWRAH MAIDAN",
        upTerminal: "Salt Lake Sector-V", dnTerminal: "Howrah Maidan",
        upIsForward: true, travelTime: 26,
        stations: [
            { code: "HWMM", name: "Howrah Maidan" }, { code: "HWHM", name: "Howrah Metro" }, { code: "MKNA", name: "Mahakaran" },
            { code: "KESP", name: "Esplanade" }, { code: "SDHM", name: "Sealdah" }, { code: "PBGB", name: "Phoolbagan" }, 
            { code: "SSSA", name: "Salt Lake Stadium" }, { code: "BCSD", name: "Bengal Chemical" }, { code: "CCSC", name: "City Centre" },
            { code: "CPSA", name: "Central Park" }, { code: "KESA", name: "Karunamoyee" }, { code: "SVSA", name: "Salt Lake Sector-V" }
        ],
        weekday: { 
            up: [
                ...generateTimes(6, 45, 21, 55, 12, 26, "HMSV").map(t => ({...t, startIdx: 0, endIdx: 11, dest: "Salt Lake Sector-V"})),
                { trn: "HMCP-01", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }
            ], 
            dn: [
                { trn: "CCHM-02", dep: "08:37:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 },
                { trn: "CCHM-04", dep: "08:49:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 },
                ...generateTimes(6, 39, 21, 55, 12, 26, "SVHM").map(t => ({...t, startIdx: 11, endIdx: 0, dest: "Howrah Maidan"}))
            ].sort((a,b) => a.dep.localeCompare(b.dep))
        },
        saturday: { 
            up: [
                ...generateTimes(6, 55, 21, 55, 15, 26, "HMSV").map(t => ({...t, startIdx: 0, endIdx: 11, dest: "Salt Lake Sector-V"})),
                { trn: "HMCP-1", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }
            ], 
            dn: [
                ...generateTimes(6, 55, 21, 40, 15, 26, "SVHM").map(t => ({...t, startIdx: 11, endIdx: 0, dest: "Howrah Maidan"})),
                { trn: "CCHM-101", dep: "21:55:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 }
            ].sort((a,b) => a.dep.localeCompare(b.dep)) 
        },
        sunday: { 
            up: [
                ...generateTimes(9, 55, 21, 55, 20, 26, "HMSV").map(t => ({...t, startIdx: 0, endIdx: 11, dest: "Salt Lake Sector-V"})),
                { trn: "HMCP-81", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }
            ], 
            dn: [
                { trn: "CCHM-82", dep: "09:00:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 },
                ...generateTimes(9, 55, 21, 55, 20, 26, "SVHM").map(t => ({...t, startIdx: 11, endIdx: 0, dest: "Howrah Maidan"}))
            ].sort((a,b) => a.dep.localeCompare(b.dep))
        }
    },
    orange: {
        color: "#ff9f43", rgb: "255, 159, 67",
        upRoute: "KAVI SUBHASH >> JAI HIND", dnRoute: "JAI HIND >> KAVI SUBHASH",
        upTerminal: "Jai Hind", dnTerminal: "Kavi Subhash (New Garia)",
        upIsForward: true, travelTime: 45,
        stations: [
            { code: "KKVS", name: "Kavi Subhash (New Garia)" }, { code: "KSJR", name: "Satyajit Ray (Metropolis)" },
            { code: "KJNN", name: "Jyotirindra Nandi (Mukundapur)" }, { code: "KKSK", name: "Kavi Sukanta (Kalikapur)" },
            { code: "KHMD", name: "Hemanta Mukhopadhyay (Ruby More)" }, { code: "KVIB", name: "VIP Bazar" },
            { code: "KRWG", name: "Ritwik Ghatak (Bantala Road)" }, { code: "KBST", name: "Barun Sengupta (ITC Sonar Bangla)" },
            { code: "KBGA", name: "Beleghata" }, { code: "KGKG", name: "Gour Kishore Ghosh (Chingrighata)" },
            { code: "KNAL", name: "Nalban (Nicco Park)" }, { code: "KITC", name: "IT Centre" },
            { code: "KNAB", name: "Nabadiganta (Technopolis)" }, { code: "KNZT", name: "Nazrul Tirtha" },
            { code: "KSWA", name: "Swapnabhor" }, { code: "KBBC", name: "Biswa Bangla Convention Centre" },
            { code: "KSHK", name: "Shiksha Tirtha" }, { code: "KMWM", name: "Mother's Wax Museum" },
            { code: "KEPK", name: "Eco Park" }, { code: "KMGL", name: "Mangaldeep" },
            { code: "KCC2", name: "City Centre-2" }, { code: "KCHP", name: "Chinar Park" },
            { code: "KVPR", name: "VIP Road (Haldiram)" }, { code: "KJHD", name: "Jai Hind" }
        ],
        weekday: { 
            up: generateTimes(7, 40, 20, 20, 25, 45, "KJ").map(t => ({...t, startIdx: 0, endIdx: 23, dest: "Jai Hind"})), 
            dn: generateTimes(8, 10, 20, 45, 25, 45, "JK").map(t => ({...t, startIdx: 23, endIdx: 0, dest: "Kavi Subhash (New Garia)"})) 
        },
        saturday: { up: null, dn: null }, sunday: { up: null, dn: null }
    },
    purple: {
        color: "#9c88ff", rgb: "156, 136, 255",
        upRoute: "JOKA >> MAJERHAT", dnRoute: "MAJERHAT >> JOKA",
        upTerminal: "Majerhat", dnTerminal: "Joka",
        upIsForward: true, travelTime: 17,
        stations: [
            { code: "KJKA", name: "Joka" }, { code: "KTKP", name: "Thakurpukur" },
            { code: "KSKB", name: "Sakher Bazar" }, { code: "KBCR", name: "Behala Chowrashtra" },
            { code: "KBBR", name: "Behala Bazar" }, { code: "KTRT", name: "Taratala" },
            { code: "KMJH", name: "Majerhat" }
        ],
        weekday: { 
            up: generateTimes(6, 40, 21, 5, 20, 17, "JM").map(t => ({...t, startIdx: 0, endIdx: 6, dest: "Majerhat"})), 
            dn: generateTimes(7, 3, 21, 26, 20, 17, "MJ").map(t => ({...t, startIdx: 6, endIdx: 0, dest: "Joka"})) 
        },
        saturday: { 
            up: generateTimes(13, 25, 20, 11, 20, 17, "JM").map(t => ({...t, startIdx: 0, endIdx: 6, dest: "Majerhat"})), 
            dn: generateTimes(13, 49, 20, 32, 20, 17, "MJ").map(t => ({...t, startIdx: 6, endIdx: 0, dest: "Joka"})) 
        },
        sunday: { up: null, dn: null }
    },
    yellow: {
        color: "#fbc531", rgb: "251, 197, 49",
        upRoute: "NOAPARA >> JAI HIND", dnRoute: "JAI HIND >> NOAPARA",
        upTerminal: "Jai Hind", dnTerminal: "Noapara",
        upIsForward: true, travelTime: 15,
        stations: [
            { code: "KNAP", name: "Noapara" }, { code: "KDCM", name: "Dum Dum Cantonment" },
            { code: "KJRO", name: "Jessore Road" }, { code: "KJHD", name: "Jai Hind" }
        ],
        weekday: { 
            up: generateTimes(7, 40, 21, 20, 15, 15, "NJ").map(t => ({...t, startIdx: 0, endIdx: 3, dest: "Jai Hind"})), 
            dn: generateTimes(7, 18, 21, 0, 15, 15, "JN").map(t => ({...t, startIdx: 3, endIdx: 0, dest: "Noapara"})) 
        },
        saturday: { 
            up: generateTimes(7, 40, 21, 20, 15, 15, "NJ").map(t => ({...t, startIdx: 0, endIdx: 3, dest: "Jai Hind"})), 
            dn: generateTimes(7, 18, 21, 0, 15, 15, "JN").map(t => ({...t, startIdx: 3, endIdx: 0, dest: "Noapara"})) 
        },
        sunday: { 
            up: generateTimes(9, 40, 21, 20, 15, 15, "NJ").map(t => ({...t, startIdx: 0, endIdx: 3, dest: "Jai Hind"})), 
            dn: generateTimes(9, 18, 21, 0, 15, 15, "JN").map(t => ({...t, startIdx: 3, endIdx: 0, dest: "Noapara"})) 
        }
    }
};

const lineSelect = document.getElementById('line-select');
const stationSelect = document.getElementById('station-select');
const daySelect = document.getElementById('day-select');
let mobileViewMode = 'live-all'; 

function populateStations() {
    const lineData = db[lineSelect.value];
    stationSelect.innerHTML = '';
    lineData.stations.forEach((stn, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${stn.name} (${stn.code})`;
        stationSelect.appendChild(opt);
    });
    updateUI();
}

function calculateStationTime(trainDepTimeStr, stnIdx, totalStns, travelTime, isForward, trainStartIdx, trainEndIdx) {
    const startIdx = trainStartIdx !== undefined ? trainStartIdx : (isForward ? 0 : totalStns - 1);
    const segmentsToStn = Math.abs(stnIdx - startIdx);
    const parts = trainDepTimeStr.split(':');
    const startMins = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    const timePerSegment = travelTime / (totalStns - 1);
    const stnMins = Math.round(startMins + (segmentsToStn * timePerSegment));
    const finalH = Math.floor(stnMins / 60) % 24;
    const finalM = stnMins % 60;
    return `${finalH.toString().padStart(2, '0')}:${finalM.toString().padStart(2, '0')}:00`;
}

function getStationSpecificSchedule(baseSchedule, lineData, stnIdx, isUp) {
    if (!baseSchedule) return null;
    const totalStns = lineData.stations.length;
    const isForward = isUp ? lineData.upIsForward : !lineData.upIsForward;
    return baseSchedule.filter(train => {
        const startIdx = train.startIdx !== undefined ? train.startIdx : (isForward ? 0 : totalStns - 1);
        const endIdx = train.endIdx !== undefined ? train.endIdx : (isForward ? totalStns - 1 : 0);
        if (isForward) {
            if (stnIdx < startIdx || stnIdx >= endIdx) return false;
        } else {
            if (stnIdx > startIdx || stnIdx <= endIdx) return false;
        }
        return true;
    }).map(train => {
        const startIdx = train.startIdx !== undefined ? train.startIdx : (isForward ? 0 : totalStns - 1);
        const endIdx = train.endIdx !== undefined ? train.endIdx : (isForward ? totalStns - 1 : 0);
        return {
            trn: train.trn,
            dest: train.dest || lineData.stations[endIdx].name,
            dep: calculateStationTime(train.dep, stnIdx, totalStns, lineData.travelTime, isForward, startIdx, endIdx)
        };
    }).sort((a, b) => a.dep.localeCompare(b.dep));
}

function renderLiveBoard(data, defaultDest, limit) {
    if(!data || data.length === 0) return `<div class="no-service">NO SERVICES CURRENTLY SCHEDULED</div>`;
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    let upcomingIdx = data.findIndex(t => t.dep.substring(0,5) >= timeStr);
    
    if(upcomingIdx === -1) return `<div class="no-service">END OF SERVICE FOR TODAY</div>`;
    
    const upcoming = data.slice(upcomingIdx, upcomingIdx + limit);
    let html = '<div class="departure-list">';
    
    upcoming.forEach((row, i) => {
        const depParts = row.dep.split(':');
        const depMins = parseInt(depParts[0]) * 60 + parseInt(depParts[1]);
        let eta = depMins - nowMins;
        if (eta < 0) eta += 24 * 60; 
        
        let etaText = "", statusClass = "";
        if (eta === 0) { 
            etaText = "NOW"; statusClass = "status-now"; 
        } else if (eta <= 60) { 
            etaText = `${eta} MIN`; statusClass = eta <= 10 ? "status-soon" : "status-normal"; 
        } else { 
            etaText = row.dep.substring(0,5); statusClass = "status-normal"; 
        }
        
        html += `
            <div class="departure-card ${i===0 ? 'next-train' : ''}">
                <div class="dep-info">
                    <div class="dep-time">${row.dep.substring(0,5)}</div>
                    <div class="dep-dest">TO ${row.dest.toUpperCase()}</div>
                </div>
                <div class="dep-meta">
                    <div class="dep-trn">${row.trn}</div>
                    <div class="dep-eta ${statusClass}">${etaText}</div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderFullTable(data) {
    if(!data || data.length === 0) return `<div class="no-service">NO DATA AVAILABLE</div>`;
    let html = `<table class="aegis-table"><thead><tr><th>TRAIN NO.</th><th>DEPARTURE</th><th>DESTINATION</th></tr></thead><tbody>`;
    data.forEach(row => {
        html += `<tr><td class="trn-no">${row.trn}</td><td>${row.dep.substring(0,5)}</td><td>${row.dest.toUpperCase()}</td></tr>`;
    });
    html += `</tbody></table>`;
    return html;
}

function updateUI() {
    const lineData = db[lineSelect.value];
    const schedule = lineData[daySelect.value];
    const stnIdx = parseInt(stationSelect.value);
    const stnName = lineData.stations[stnIdx].name;
    
    document.documentElement.style.setProperty('--theme-color', lineData.color);
    document.documentElement.style.setProperty('--theme-color-rgb', lineData.rgb);
    document.documentElement.style.setProperty('--theme-color-dim', `rgba(${lineData.rgb}, 0.2)`);
    document.getElementById('line-indicator').innerText = `[${lineSelect.value.toUpperCase()}_LINE.ACTIVE]`;
    
    const upDest = lineData.upTerminal;
    const dnDest = lineData.dnTerminal;

    const stnScheduleUp = getStationSpecificSchedule(schedule.up, lineData, stnIdx, true) || [];
    const stnScheduleDn = getStationSpecificSchedule(schedule.dn, lineData, stnIdx, false) || [];

    const mergedSchedule = [...stnScheduleUp, ...stnScheduleDn].sort((a, b) => a.dep.localeCompare(b.dep));

    document.getElementById('desk-live-stn').innerText = `- ${stnName.toUpperCase()}`;
    document.getElementById('desk-full-stn').innerText = `- ${stnName.toUpperCase()}`;
    
    document.getElementById('desk-live-up-route').innerText = `TOWARDS ${upDest.toUpperCase()}`;
    document.getElementById('desk-live-dn-route').innerText = `TOWARDS ${dnDest.toUpperCase()}`;

    document.getElementById('desk-live-up-container').innerHTML = renderLiveBoard(stnScheduleUp, upDest, 10);
    document.getElementById('desk-live-dn-container').innerHTML = renderLiveBoard(stnScheduleDn, dnDest, 10);
    document.getElementById('desk-full-up-container').innerHTML = renderFullTable(stnScheduleUp);
    document.getElementById('desk-full-dn-container').innerHTML = renderFullTable(stnScheduleDn);

    document.getElementById('record-count').innerText = mergedSchedule.length.toString().padStart(3, '0');

    const mobTitle = document.getElementById('mob-panel-title');
    const mobRoute = document.getElementById('mob-panel-route');
    const mobContent = document.getElementById('mob-panel-content');
    
    if(mobileViewMode === 'live-all') {
        mobTitle.innerText = `LIVE [ALL] - ${stnName.toUpperCase()}`;
        mobRoute.innerText = `BOTH DIRECTIONS`;
        mobContent.innerHTML = renderLiveBoard(mergedSchedule, 'VARIOUS', 8);
    } else if(mobileViewMode === 'live-up') {
        mobTitle.innerText = `LIVE [UP] - ${stnName.toUpperCase()}`;
        mobRoute.innerText = `TOWARDS ${upDest.toUpperCase()}`;
        mobContent.innerHTML = renderLiveBoard(stnScheduleUp, upDest, 5);
    } else if(mobileViewMode === 'live-dn') {
        mobTitle.innerText = `LIVE [DN] - ${stnName.toUpperCase()}`;
        mobRoute.innerText = `TOWARDS ${dnDest.toUpperCase()}`;
        mobContent.innerHTML = renderLiveBoard(stnScheduleDn, dnDest, 5);
    } else if(mobileViewMode === 'full-all') {
        mobTitle.innerText = `FULL SCHED - ${stnName.toUpperCase()}`;
        mobRoute.innerText = `BOTH DIRECTIONS`;
        mobContent.innerHTML = `<div class="table-container">` + renderFullTable(mergedSchedule) + `</div>`;
    }
}

// Event Listeners
lineSelect.addEventListener('change', populateStations);
stationSelect.addEventListener('change', updateUI);
daySelect.addEventListener('change', updateUI);

document.querySelectorAll('.dir-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.dir-toggle-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        mobileViewMode = e.target.getAttribute('data-view');
        updateUI();
    });
});

// Initialization & Loop
populateStations(); 
setInterval(updateUI, 60000);

// --- Chat Interface Logic ---
const juhiInput = document.getElementById('juhi-input');
const juhiSend = document.getElementById('juhi-send');
const juhiBody = document.getElementById('juhi-body');

function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${className}`;
    msgDiv.innerHTML = text.replace(/\n/g, '<br>'); 
    juhiBody.appendChild(msgDiv);
    
    juhiBody.scrollTop = juhiBody.scrollHeight; 
}

function handleSendMessage() {
    const text = juhiInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user-msg');
    juhiInput.value = ''; 

    if (window.sendMessageToChatbot) {
        window.sendMessageToChatbot(text);
    } else {
        appendMessage('[SYSTEM ERROR] juhi.js is missing or not loaded.', 'bot-msg');
    }
}

juhiSend.addEventListener('click', handleSendMessage);
juhiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

window.receiveChatbotReply = function(reply) {
    appendMessage(reply, 'bot-msg');
};