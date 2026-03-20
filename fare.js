const metroLines = [
    {
        id: "L1",
        name: "Blue Line",
        color: "#00a8ff",
        stations: [
            { code: "KDSW", name: "Dakshineswar", elevated: true }, 
            { code: "KBAR", name: "Baranagar", elevated: true }, 
            { code: "KNAP", name: "Noapara", elevated: true },
            { code: "KDMI", name: "Dum Dum", elevated: true }, 
            { code: "KBEL", name: "Belgachia" }, 
            { code: "KSHY", name: "Shyambazar" },
            { code: "KSHO", name: "Shobhabazar" }, 
            { code: "KGPK", name: "Girish Park" }, 
            { code: "KMHR", name: "Mahatma Gandhi Road" },
            { code: "KCEN", name: "Central" }, 
            { code: "KCWC", name: "Chandni Chowk" }, 
            { code: "KESP", name: "Esplanade" },
            { code: "KPSK", name: "Park Street" }, 
            { code: "KMDI", name: "Maidan" }, 
            { code: "KRSD", name: "Rabindra Sadan" },
            { code: "KNBN", name: "Netaji Bhavan" }, 
            { code: "KJPK", name: "Jatin Das Park" }, 
            { code: "KKHG", name: "Kali Ghat" },
            { code: "KRSB", name: "Rabindra Sarobar" }, 
            { code: "KMUK", name: "Mahanayak Uttam Kumar", surface: true }, 
            { code: "KNTJ", name: "Netaji", elevated: true },
            { code: "KMSN", name: "Masterda Surya Sen", elevated: true }, 
            { code: "KGTN", name: "Gitanjali", elevated: true }, 
            { code: "KKNZ", name: "Kavi Nazrul", elevated: true },
            { code: "KSKD", name: "Shahid Khudiram", elevated: true }, 
            { code: "KKVS", name: "Kavi Subhash", surface: true }
        ],
        fares: [
            [0, 5, 10, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            [5, 0, 10, 10, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25],
            [10, 10, 0, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25],
            [15, 10, 10, 0, 10, 10, 10, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25],
            [15, 15, 10, 10, 0, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25],
            [20, 15, 15, 10, 5, 0, 5, 5, 10, 10, 10, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 25],
            [20, 15, 15, 10, 10, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 25],
            [20, 20, 15, 15, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20],
            [20, 20, 15, 15, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20],
            [20, 20, 15, 15, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20],
            [20, 20, 20, 15, 15, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20],
            [20, 20, 20, 15, 15, 15, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20],
            [20, 20, 20, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 20, 20, 20],
            [20, 20, 20, 20, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 20, 20],
            [20, 20, 20, 20, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 20],
            [20, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15, 20],
            [20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15, 15],
            [25, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15, 15],
            [25, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 10, 15],
            [25, 25, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10, 15],
            [25, 25, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10, 10],
            [25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10, 10],
            [25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5, 10],
            [25, 25, 25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5, 5],
            [25, 25, 25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10, 10, 10, 5, 5, 0, 5],
            [25, 25, 25, 25, 25, 25, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10, 10, 5, 5, 0]
        ]
    },
    {
        id: "L2",
        name: "Green Line",
        color: "#4cd137",
        stations: [
            { code: "SVSA", name: "Salt Lake Sector-V", elevated: true }, 
            { code: "KESA", name: "Karunamoyee", elevated: true },
            { code: "CPSA", name: "Central Park", elevated: true }, 
            { code: "CCSC", name: "City Centre", elevated: true },
            { code: "BCSD", name: "Bengal Chemical", elevated: true }, 
            { code: "SSSA", name: "Salt Lake Stadium", elevated: true },
            { code: "PBGB", name: "Phoolbagan" }, 
            { code: "SDHM", name: "Sealdah" },
            { code: "KESP", name: "Esplanade" }, 
            { code: "MKNA", name: "Mahakaran" },
            { code: "HWHM", name: "Howrah Metro" }, 
            { code: "HWMM", name: "Howrah Maidan" }
        ],
        fares: [
            [0, 5, 10, 10, 10, 10, 20, 20, 30, 30, 30, 30],
            [5, 0, 5, 5, 10, 10, 20, 20, 30, 30, 30, 30],
            [10, 5, 0, 5, 10, 10, 10, 20, 20, 30, 30, 30],
            [10, 5, 5, 0, 5, 5, 10, 20, 20, 20, 30, 30],
            [10, 10, 10, 5, 0, 5, 10, 10, 20, 20, 30, 30],
            [10, 10, 10, 5, 5, 0, 5, 10, 20, 20, 20, 30],
            [20, 20, 10, 10, 10, 5, 0, 10, 10, 20, 20, 20],
            [20, 20, 20, 20, 10, 10, 10, 0, 10, 10, 20, 20],
            [30, 30, 20, 20, 20, 20, 10, 10, 0, 5, 10, 10],
            [30, 30, 30, 20, 20, 20, 20, 10, 5, 0, 10, 10],
            [30, 30, 30, 30, 30, 20, 20, 20, 10, 10, 0, 5],
            [30, 30, 30, 30, 30, 30, 20, 20, 10, 10, 5, 0]
        ]
    },
    {
        id: "L3",
        name: "Orange Line",
        color: "#ff9f43",
        stations: [
            { code: "KKVS", name: "Kavi Subhash", surface: true }, 
            { code: "KSJR", name: "Satyajit Ray", elevated: true },
            { code: "KJNN", name: "Jyotirindra Nandi", elevated: true }, 
            { code: "KKSK", name: "Kavi Sukanta", elevated: true },
            { code: "KHMD", name: "Hemanta Mukhopadhyay", elevated: true }, 
            { code: "KVIB", name: "VIP Bazar", elevated: true },
            { code: "KRWG", name: "Ritwik Ghatak", elevated: true }, 
            { code: "KBST", name: "Barun Sengupta", elevated: true },
            { code: "KBGA", name: "Beliaghata", elevated: true }
        ],
        fares: [
            [0, 5, 10, 10, 20, 20, 20, 20, 20],
            [5, 0, 5, 10, 10, 10, 20, 20, 20],
            [10, 5, 0, 5, 10, 10, 10, 20, 20],
            [10, 10, 5, 0, 5, 10, 10, 10, 20],
            [20, 10, 10, 5, 0, 5, 10, 10, 10],
            [20, 10, 10, 10, 5, 0, 5, 10, 10],
            [20, 20, 10, 10, 10, 5, 0, 5, 10],
            [20, 20, 20, 10, 10, 10, 5, 0, 5],
            [20, 20, 20, 20, 10, 10, 10, 5, 0]
        ]
    },
    {
        id: "L4",
        name: "Purple Line",
        color: "#9c88ff",
        stations: [
            { code: "KJKA", name: "Joka", elevated: true }, 
            { code: "KTKP", name: "Thakurpukur", elevated: true },
            { code: "KSKB", name: "Sakher Bazar", elevated: true }, 
            { code: "KBCR", name: "Behala Chowrashtra", elevated: true },
            { code: "KBBR", name: "Behala Bazar", elevated: true }, 
            { code: "KTRT", name: "Taratala", elevated: true },
            { code: "KMJH", name: "Majerhat", elevated: true }
        ],
        fares: [
            [0, 5, 10, 10, 20, 20, 20],
            [5, 0, 5, 10, 10, 20, 20],
            [10, 5, 0, 5, 10, 10, 20],
            [10, 10, 5, 0, 5, 10, 10],
            [20, 10, 10, 5, 0, 5, 10],
            [20, 20, 10, 10, 5, 0, 5],
            [20, 20, 20, 10, 10, 5, 0]
        ]
    },
    {
        id: "L5",
        name: "Yellow Line",
        color: "#fbc531",
        stations: [
            { code: "KNAP", name: "Noapara", surface: true }, 
            { code: "KDCM", name: "Dum Dum Cantonment", elevated: true },
            { code: "KJRO", name: "Jessore Road", surface: true }, 
            { code: "KJHD", name: "Jai Hind" }
        ],
        fares: [
            [0, 10, 20, 20],
            [10, 0, 10, 10],
            [20, 10, 0, 5],
            [20, 10, 5, 0]
        ]
    }
];

const container = document.getElementById('modules-container');

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

metroLines.forEach((line, index) => {
    const module = document.createElement('div');
    module.className = 'data-module';
    module.style.setProperty('--line-color', line.color);
    module.style.setProperty('--line-color-rgb', hexToRgb(line.color));
    module.style.animationDelay = `${index * 0.1}s`;

    let originBtnsHTML = '';
    let destBtnsHTML = '';
    let selectOptionsHTML = '<option value="" disabled selected>Select Station</option>';

    line.stations.forEach((stn, rIdx) => {
        const isElevated = stn.elevated ? 'elevated' : '';
        const isSurface = stn.surface ? 'surface' : '';
        const btnClass = `hud-station-btn ${isElevated} ${isSurface}`.trim();
        
        const btnHTML = `
            <button class="${btnClass}" data-index="${rIdx}">
                <span class="stn-code">${stn.code}</span>
                <span class="stn-name">${stn.name}</span>
            </button>
        `;
        originBtnsHTML += btnHTML;
        destBtnsHTML += btnHTML;
        
        const mobileMarker = stn.elevated ? ' [ELV]' : (stn.surface ? ' [SRF]' : '');
        selectOptionsHTML += `<option value="${rIdx}">${stn.name} (${stn.code})${mobileMarker}</option>`;
    });

    module.innerHTML = `
        <div class="module-header">
            <div class="module-id-group">
                <div class="module-id">${line.id}</div>
                <div class="module-name">${line.name} Matrix</div>
            </div>
            <div class="module-toggle">▼</div>
        </div>
        <div class="module-body">
            
            <!-- DESKTOP COMMAND INTERFACE -->
            <div class="desktop-ui">
                <div class="hud-display-screen">
                    <div class="hud-route-info">
                        <div class="hud-route-label">ROUTE UPLINK</div>
                        <div class="hud-route-terminals">
                            <span class="hud-origin-disp">AWAITING INPUT</span>
                            <span class="hud-route-arrow">>></span>
                            <span class="hud-dest-disp">AWAITING INPUT</span>
                        </div>
                    </div>
                    <div class="hud-fare-box">
                        <div class="hud-fare-label">COMPUTED FARE</div>
                        <div class="hud-fare-value">--</div>
                    </div>
                </div>
                
                <div class="hud-panels-wrapper">
                    <div class="hud-panel">
                        <div class="hud-panel-title">
                            <div><span>[01]</span> SELECT ORIGIN</div>
                            <div class="legend-group">
                                <div class="legend-item-tag"><span class="legend-box elevated-box"></span> ELEV</div>
                                <div class="legend-item-tag"><span class="legend-box surface-box"></span> SURF</div>
                            </div>
                        </div>
                        <div class="hud-station-grid hud-origin-grid">${originBtnsHTML}</div>
                    </div>
                    <div class="hud-panel">
                        <div class="hud-panel-title">
                            <div><span>[02]</span> SELECT TARGET</div>
                            <div class="legend-group">
                                <div class="legend-item-tag"><span class="legend-box elevated-box"></span> ELEV</div>
                                <div class="legend-item-tag"><span class="legend-box surface-box"></span> SURF</div>
                            </div>
                        </div>
                        <div class="hud-station-grid hud-dest-grid">${destBtnsHTML}</div>
                    </div>
                </div>
            </div>

            <!-- MOBILE CALCULATOR UI -->
            <div class="mobile-ui">
                <div class="calc-container">
                    <div class="calc-group">
                        <span class="calc-label">Origin Point</span>
                        <select class="calc-select origin-select" data-line="${index}">
                            ${selectOptionsHTML}
                        </select>
                    </div>
                    <div class="calc-group">
                        <span class="calc-label">Destination Point</span>
                        <select class="calc-select dest-select" data-line="${index}">
                            ${selectOptionsHTML}
                        </select>
                    </div>
                    <div class="calc-result-box">
                        <div class="calc-result-label">COMPUTED FARE</div>
                        <div class="calc-result-value"><span class="calc-result-currency">₹</span><span class="val-display">--</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    module.querySelector('.module-header').addEventListener('click', () => {
        const isActive = module.classList.contains('active');
        
        document.querySelectorAll('.data-module').forEach(mod => {
            mod.classList.remove('active');
            mod.querySelector('.module-body').style.maxHeight = null;
        });

        if (!isActive) {
            module.classList.add('active');
            const body = module.querySelector('.module-body');
            const desktopUI = body.querySelector('.desktop-ui');
            const mobileUI = body.querySelector('.mobile-ui');
            
            const activeUI = window.getComputedStyle(desktopUI).display !== 'none' ? desktopUI : mobileUI;
            body.style.maxHeight = (activeUI.scrollHeight + 50) + "px";
        }
    });

    let desktopOriginIdx = null;
    let desktopDestIdx = null;
    const originGrid = module.querySelector('.hud-origin-grid');
    const destGrid = module.querySelector('.hud-dest-grid');
    const originDisp = module.querySelector('.hud-origin-disp');
    const destDisp = module.querySelector('.hud-dest-disp');
    const fareValueDisp = module.querySelector('.hud-fare-value');

    const updateDesktopFare = () => {
        if (desktopOriginIdx !== null && desktopDestIdx !== null) {
            let ticks = 0;
            const scramble = setInterval(() => {
                fareValueDisp.innerText = `₹ ${Math.floor(Math.random() * 50)}`;
                ticks++;
                if (ticks > 10) {
                    clearInterval(scramble);
                    const fare = line.fares[desktopOriginIdx][desktopDestIdx];
                    fareValueDisp.innerText = `₹ ${fare.toFixed(2)}`;
                }
            }, 30);
        } else {
            fareValueDisp.innerText = "--";
        }
    };

    originGrid.querySelectorAll('.hud-station-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            originGrid.querySelectorAll('.hud-station-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            desktopOriginIdx = btn.getAttribute('data-index');
            originDisp.innerText = line.stations[desktopOriginIdx].code;
            updateDesktopFare();
        });
    });

    destGrid.querySelectorAll('.hud-station-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            destGrid.querySelectorAll('.hud-station-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            desktopDestIdx = btn.getAttribute('data-index');
            destDisp.innerText = line.stations[desktopDestIdx].code;
            updateDesktopFare();
        });
    });

    const originSelect = module.querySelector('.origin-select');
    const destSelect = module.querySelector('.dest-select');
    const valDisplay = module.querySelector('.val-display');

    const updateMobileFare = () => {
        const originVal = originSelect.value;
        const destVal = destSelect.value;
        if (originVal !== "" && destVal !== "") {
            const fare = line.fares[originVal][destVal];
            valDisplay.innerText = fare.toFixed(2);
        } else {
            valDisplay.innerText = "--";
        }
    };

    originSelect.addEventListener('change', updateMobileFare);
    destSelect.addEventListener('change', updateMobileFare);

    container.appendChild(module);
});

window.addEventListener('resize', () => {
    const activeModule = document.querySelector('.data-module.active');
    if (activeModule) {
        const body = activeModule.querySelector('.module-body');
        const desktopUI = body.querySelector('.desktop-ui');
        const mobileUI = body.querySelector('.mobile-ui');
        
        const activeUI = window.getComputedStyle(desktopUI).display !== 'none' ? desktopUI : mobileUI;
        body.style.maxHeight = (activeUI.scrollHeight + 50) + "px";
    }
});
