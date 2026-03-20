const metroData = [
    {
        id: "L1",
        name: "Blue Line",
        color: "#00a8ff",
        activeCount: 24,
        stations: ["Dakshineswar", "Noapara", "Dum Dum", "Belgachia", "Shyambazar", "Sovabazar Sutanuti", "Girish Park", "MG Road", "Central", "Chandni Chowk", "Esplanade", "Park Street", "Maidan", "Rabindra Sadan", "Netaji Bhavan", "Jatin Das Park", "Kalighat", "Rabindra Sarobar", "Mahanayak Uttam Kumar", "Netaji", "Masterda Surya Sen", "Gitanjali", "Kavi Nazrul", "Shahid Khudiram", "Kavi Subhash"]
    },
    {
        id: "L2",
        name: "Green Line",
        color: "#4cd137",
        activeCount: 12,
        stations: ["Howrah Maidan", "Howrah", "Mahakaran", "Esplanade", "Sealdah", "Phoolbagan", "Salt Lake Stadium", "Bengal Chemical", "City Centre", "Central Park", "Karunamoyee", "Salt Lake Sector V"]
    },
    {
        id: "L3",
        name: "Orange Line",
        color: "#ff9f43",
        activeCount: 8,
        stations: ["Kavi Subhash", "Satyajit Ray", "Kavi Sukanta", "Hemanta Mukhopadhyay", "VIP Bazar", "Ritwik Ghatak", "Barun Sengupta", "Beliaghata", "Gour Kishore Ghosh", "Nicco Park", "Salt Lake Sector V", "Technopolis", "Bidhan Nagar", "Jai Hind"]
    },
    {
        id: "L4",
        name: "Purple Line",
        color: "#9c88ff",
        activeCount: 7,
        stations: ["Joka", "Thakurpukur", "Sakherbazar", "Behala Chowrasta", "Behala Bazar", "Taratala", "Majerhat", "Mominpur", "Kidderpore", "Victoria", "Park Street", "Esplanade"]
    },
    {
        id: "L5",
        name: "Yellow Line",
        color: "#fbc531",
        activeCount: 4,
        stations: ["Noapara", "Dum Dum Cantt", "Jessore Road", "Biman Bandar", "Birati", "Michael Nagar", "New Barrackpore", "Madhyamgram", "Hridaypur", "Barasat"]
    },
    {
        id: "L6",
        name: "Pink Line",
        color: "#fd79a8",
        activeCount: 0,
        stations: ["Baranagar", "Kamarhati", "Agarpara", "Sodepur", "Panihati", "Khardaha", "Titagarh", "Barrackpore"]
    }
];

const container = document.getElementById('modules-container');
let totalNodes = 0;

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

metroData.forEach((line, index) => {
    totalNodes += line.activeCount;
    
    const startStation = line.stations[0];
    const endStation = line.stations[line.stations.length - 1];
    const totalStations = line.stations.length;
    
    const module = document.createElement('div');
    module.className = 'data-module';
    module.style.setProperty('--line-color', line.color);
    module.style.setProperty('--line-color-rgb', hexToRgb(line.color));
    module.style.animationDelay = `${index * 0.15}s`;

    let timelineHTML = '';
    line.stations.forEach((station, sIdx) => {
        const isNodeActive = sIdx < line.activeCount;
        const isConnActive = isNodeActive && (sIdx + 1 < line.activeCount);
        
        timelineHTML += `
            <div class="timeline-node ${isNodeActive ? 'active-station' : 'inactive-station'}" style="animation-delay: ${sIdx * 0.05}s">
                <div class="node-connector ${isConnActive ? '' : 'dashed-connector'}"></div>
                <div class="node-point"></div>
                <div class="node-id">S-${(sIdx + 1).toString().padStart(2, '0')}</div>
                <div class="node-label">${station}</div>
            </div>
        `;
    });

    module.innerHTML = `
        <div class="module-header">
            <div class="module-id">${line.id}</div>
            <div class="module-name">${line.name}</div>
            <div class="module-terminals">
                <span class="terminal-node">${startStation}</span>
                <span class="terminal-arrow">>></span>
                <span class="terminal-node">${endStation}</span>
            </div>
            <div class="module-stats">
                <div class="stat-value">${line.activeCount}<span style="font-size: 0.6em; color: var(--text-muted)">/${totalStations}</span></div>
                <div class="stat-label">Active / Total</div>
            </div>
            <div class="module-toggle">▼</div>
        </div>
        <div class="module-body">
            <div class="timeline-wrapper">
                <div class="timeline-track">
                    ${timelineHTML}
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
            const wrapper = body.querySelector('.timeline-wrapper');
            body.style.maxHeight = (wrapper.offsetHeight + 50) + "px";
        }
    });

    container.appendChild(module);
});

document.getElementById('total-nodes-counter').innerText = totalNodes;

window.addEventListener('resize', () => {
    const activeModule = document.querySelector('.data-module.active');
    if (activeModule) {
        const body = activeModule.querySelector('.module-body');
        const wrapper = body.querySelector('.timeline-wrapper');
        if(wrapper) {
            body.style.maxHeight = (wrapper.offsetHeight + 50) + "px";
        }
    }
});