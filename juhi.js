(function() {
    const lines = {
        "Blue": ["Dakshineswar", "Baranagar", "Noapara", "Dum Dum", "Belgachia", "Shyambazar", "Shobhabazar", "Girish Park", "Mahatma Gandhi Road", "Central", "Chandni Chowk", "Esplanade", "Park Street", "Maidan", "Rabindra Sadan", "Netaji Bhavan", "Jatin Das Park", "Kali Ghat", "Rabindra Sarobar", "Mahanayak Uttam Kumar", "Netaji", "Masterda Surya Sen", "Gitanjali", "Kavi Nazrul", "Shahid Khudiram", "Kavi Subhash"],
        "Green": ["Howrah Maidan", "Howrah", "Mahakaran", "Esplanade", "Sealdah", "Phoolbagan", "Salt Lake Stadium", "Bengal Chemical", "City Centre", "Central Park", "Karunamoyee", "Salt Lake Sector V"],
        "Orange": ["Kavi Subhash", "Satyajit Ray", "Jyotirindra Nandi", "Kavi Sukanta", "Hemanta Mukhopadhyay", "VIP Bazar", "Ritwik Ghatak", "Barun Sengupta", "Beliaghata"],
        "Purple": ["Joka", "Thakurpukur", "Sakher Bazar", "Behala Chowrashtra", "Behala Bazar", "Taratala", "Majerhat"],
        "Yellow": ["Noapara", "Dum Dum Cantonment", "Jessore Road", "Jai Hind"]
    };

    const fareMatrices = {
        "Blue": [
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
        ],
        "Green": [
            [0, 5, 10, 10, 20, 20, 30, 30, 30, 30, 30, 30],
            [5, 0, 10, 10, 20, 20, 30, 30, 30, 30, 30, 30],
            [10, 10, 0, 5, 10, 20, 20, 20, 20, 30, 30, 30],
            [10, 10, 5, 0, 10, 10, 20, 20, 20, 20, 30, 30],
            [20, 20, 10, 10, 0, 10, 10, 10, 20, 20, 20, 20],
            [20, 20, 20, 10, 10, 0, 5, 10, 10, 10, 20, 20],
            [30, 30, 20, 20, 10, 5, 0, 5, 10, 10, 10, 10],
            [30, 30, 20, 20, 10, 10, 5, 0, 5, 10, 10, 10],
            [30, 30, 20, 20, 20, 10, 10, 5, 0, 5, 5, 10],
            [30, 30, 30, 20, 20, 10, 10, 10, 5, 0, 5, 10],
            [30, 30, 30, 30, 20, 20, 10, 10, 5, 5, 0, 5],
            [30, 30, 30, 30, 20, 20, 10, 10, 10, 10, 5, 0]
        ],
        "Purple": [
            [0, 5, 10, 10, 20, 20, 20],
            [5, 0, 5, 10, 10, 20, 20],
            [10, 5, 0, 5, 10, 10, 20],
            [10, 10, 5, 0, 5, 10, 10],
            [20, 10, 10, 5, 0, 5, 10],
            [20, 20, 10, 10, 5, 0, 5],
            [20, 20, 20, 10, 10, 5, 0]
        ],
        "Orange": [
            [0, 5, 10, 10, 20, 20, 20, 20, 20],
            [5, 0, 5, 10, 10, 10, 20, 20, 20],
            [10, 5, 0, 5, 10, 10, 10, 20, 20],
            [10, 10, 5, 0, 5, 10, 10, 10, 20],
            [20, 10, 10, 5, 0, 5, 10, 10, 10],
            [20, 10, 10, 10, 5, 0, 5, 10, 10],
            [20, 20, 10, 10, 10, 5, 0, 5, 10],
            [20, 20, 20, 10, 10, 10, 5, 0, 5],
            [20, 20, 20, 20, 10, 10, 10, 5, 0]
        ],
        "Yellow": [
            [0, 10, 20, 20],
            [10, 0, 10, 10],
            [20, 10, 0, 5],
            [20, 10, 5, 0]
        ]
    };

    const allStations = [...new Set(Object.values(lines).flat())];
    const graph = {};
    
    allStations.forEach(s => graph[s] = []);
    
    for (const [lineName, stations] of Object.entries(lines)) {
        for (let i = 0; i < stations.length; i++) {
            if (i > 0) graph[stations[i]].push({ node: stations[i-1], line: lineName });
            if (i < stations.length - 1) graph[stations[i]].push({ node: stations[i+1], line: lineName });
        }
    }

    function generateTimes(blocks, prefix) {
        let times = [];
        let count = 1;
        for (let b of blocks) {
            let curH = b.sh;
            let curM = b.sm;
            if (b.int === 0 || !b.int) {
                times.push({ trn: `${prefix}-${count}`, dep: `${curH.toString().padStart(2, '0')}:${curM.toString().padStart(2, '0')}:00` });
                count += 2;
                continue;
            }
            while(curH < b.eh || (curH === b.eh && curM <= b.em)) {
                let depH = curH.toString().padStart(2, '0');
                let depM = curM.toString().padStart(2, '0');
                times.push({ trn: `${prefix}-${count}`, dep: `${depH}:${depM}:00` });
                curM += b.int;
                if(curM >= 60) { curH += Math.floor(curM / 60); curM = curM % 60; }
                count += 2;
            }
        }
        return times;
    }

    const db = {
        blue: {
            upIsForward: false, travelTime: 67, stations: lines["Blue"],
            upTerminal: "Dakshineswar", dnTerminal: "Shahid Khudiram",
            weekday: { 
                up: generateTimes([{sh:6, sm:50, eh:8, em:30, int:10}, {sh:8, sm:36, eh:11, em:30, int:6}, {sh:11, sm:38, eh:16, em:30, int:8}, {sh:16, sm:36, eh:19, em:30, int:6}, {sh:19, sm:40, eh:21, em:44, int:10}], "SDS").map(t => ({...t, startIdx: 24, endIdx: 0, dest: "Dakshineswar"})), 
                dn: generateTimes([{sh:6, sm:50, eh:8, em:30, int:10}, {sh:8, sm:36, eh:11, em:30, int:6}, {sh:11, sm:38, eh:16, em:30, int:8}, {sh:16, sm:36, eh:19, em:30, int:6}, {sh:19, sm:40, eh:21, em:38, int:10}], "DSS").map(t => ({...t, startIdx: 0, endIdx: 24, dest: "Shahid Khudiram"})) 
            },
            saturday: { 
                up: generateTimes([{sh:6, sm:54, eh:9, em:0, int:10}, {sh:9, sm:7, eh:11, em:30, int:7}, {sh:11, sm:38, eh:16, em:30, int:8}, {sh:16, sm:38, eh:19, em:30, int:7}, {sh:19, sm:40, eh:21, em:43, int:10}], "KDS").map(t => ({...t, startIdx: 24, endIdx: 0, dest: "Dakshineswar"})), 
                dn: generateTimes([{sh:6, sm:50, eh:9, em:0, int:10}, {sh:9, sm:7, eh:11, em:30, int:7}, {sh:11, sm:38, eh:16, em:30, int:8}, {sh:16, sm:38, eh:19, em:30, int:7}, {sh:19, sm:40, eh:21, em:28, int:10}], "DSK").map(t => ({...t, startIdx: 0, endIdx: 24, dest: "Shahid Khudiram"})) 
            },
            sunday: { 
                up: generateTimes([{sh:9, sm:0, eh:15, em:0, int:15}, {sh:15, sm:10, eh:20, em:0, int:10}, {sh:20, sm:15, eh:21, em:43, int:15}], "KDS").map(t => ({...t, startIdx: 24, endIdx: 0, dest: "Dakshineswar"})), 
                dn: generateTimes([{sh:9, sm:0, eh:15, em:0, int:15}, {sh:15, sm:10, eh:20, em:0, int:10}, {sh:20, sm:15, eh:21, em:38, int:15}], "DSK").map(t => ({...t, startIdx: 0, endIdx: 24, dest: "Shahid Khudiram"})) 
            }
        },
        green: {
            upIsForward: true, travelTime: 26, stations: lines["Green"],
            weekday: { 
                up: [...generateTimes([{sh:6,sm:45,eh:21,em:55,int:12}], "HMSV"), { trn: "HMCP-01", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }].sort((a,b) => a.dep.localeCompare(b.dep)), 
                dn: [{ trn: "CCHM-02", dep: "08:37:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 }, { trn: "CCHM-04", dep: "08:49:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 }, ...generateTimes([{sh:6,sm:39,eh:21,em:55,int:12}], "SVHM")].sort((a,b) => a.dep.localeCompare(b.dep))
            },
            saturday: { 
                up: [...generateTimes([{sh:6,sm:55,eh:21,em:55,int:10}], "HMSV"), { trn: "HMCP-1", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }].sort((a,b) => a.dep.localeCompare(b.dep)), 
                dn: [...generateTimes([{sh:6,sm:55,eh:21,em:40,int:10}], "SVHM"), { trn: "CCHM-101", dep: "21:55:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 }].sort((a,b) => a.dep.localeCompare(b.dep)) 
            },
            sunday: { 
                up: [...generateTimes([{sh:9,sm:55,int:0}, {sh:10,sm:15,eh:21,em:45,int:15}, {sh:21,sm:55,int:0}], "HMSV"), { trn: "HMCP-81", dep: "22:05:00", dest: "Central Park", startIdx: 0, endIdx: 9 }].sort((a,b) => a.dep.localeCompare(b.dep)), 
                dn: [{ trn: "CCHM-82", dep: "09:00:00", dest: "Howrah Maidan", startIdx: 8, endIdx: 0 }, ...generateTimes([{sh:9,sm:55,int:0}, {sh:10,sm:17,int:0}, {sh:10,sm:32,eh:21,em:32,int:15}, {sh:21,sm:45,int:0}, {sh:21,sm:55,int:0}], "SVHM")].sort((a,b) => a.dep.localeCompare(b.dep))
            }
        },
        orange: {
            upIsForward: true, travelTime: 28, stations: lines["Orange"],
            weekday: { up: generateTimes([{sh:7,sm:40,eh:20,em:20,int:20}], "KB"), dn: generateTimes([{sh:8,sm:10,eh:20,em:45,int:20}], "BK") },
            saturday: { up: null, dn: null }, sunday: { up: null, dn: null }
        },
        purple: {
            upIsForward: true, travelTime: 17, stations: lines["Purple"],
            weekday: { up: generateTimes([{sh:6,sm:40,eh:21,em:5,int:20}], "JM"), dn: generateTimes([{sh:7,sm:3,eh:21,em:26,int:20}], "MJ") },
            saturday: { up: generateTimes([{sh:13,sm:25,eh:20,em:11,int:20}], "JM"), dn: generateTimes([{sh:13,sm:49,eh:20,em:32,int:20}], "MJ") },
            sunday: { up: null, dn: null }
        },
        yellow: {
            upIsForward: false, travelTime: 15, stations: lines["Yellow"],
            weekday: { up: generateTimes([{sh:7,sm:40,eh:21,em:20,int:15}], "JN"), dn: generateTimes([{sh:7,sm:18,eh:21,em:0,int:15}], "NJ") },
            saturday: { up: generateTimes([{sh:7,sm:40,eh:21,em:20,int:15}], "JN"), dn: generateTimes([{sh:7,sm:18,eh:21,em:0,int:15}], "NJ") },
            sunday: { up: generateTimes([{sh:9,sm:40,eh:21,em:20,int:15}], "JN"), dn: generateTimes([{sh:9,sm:18,eh:21,em:0,int:15}], "NJ") }
        }
    };

    const aliases = {
        'sector5': 'salt lake sector v', 'sectorv': 'salt lake sector v', 'sector 5': 'salt lake sector v', 'saltlakesector5': 'salt lake sector v',
        'mg road': 'mahatma gandhi road', 'mgroad': 'mahatma gandhi road',
        'majherhat': 'majerhat', 'majarhat': 'majerhat',
        'dumdum': 'dum dum', 'dumdumcantt': 'dum dum cantonment',
        'centralpark': 'central park', 'cc2': 'city centre 2', 'citycenter': 'city centre',
        'kavisubas': 'kavi subhash', 'kavisubhash': 'kavi subhash', 'newgaria': 'kavi subhash',
        'uttamkumar': 'mahanayak uttam kumar', 'tollywood': 'mahanayak uttam kumar', 'tollygunge': 'mahanayak uttam kumar',
        'suryasen': 'masterda surya sen', 'bansdroni': 'masterda surya sen',
        'naktala': 'gitanjali', 'nazrul': 'kavi nazrul', 'garia': 'kavi nazrul',
        'kudiram': 'shahid khudiram', 'briji': 'shahid khudiram', 'pranabnagar': 'kavi subhash',
        'shobabazar': 'shobhabazar', 'sovabazar': 'shobhabazar', 'sovabazarsutanuti': 'shobhabazar'
    };

    function levenshteinDistance(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
                else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
        return matrix[b.length][a.length];
    }

    function findStation(name) {
        let query = name.toLowerCase().trim();
        let cleanQuery = query.replace(/[^a-z0-9]/g, '');
        
        if (aliases[query]) return findStation(aliases[query]);
        if (aliases[cleanQuery]) return findStation(aliases[cleanQuery]);

        for (let s of allStations) {
            if (s.toLowerCase() === query) return s;
            if (s.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanQuery) return s;
        }
        for (let s of allStations) {
            const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (cleanQuery.length > 3 && (cleanS.includes(cleanQuery) || cleanQuery.includes(cleanS))) return s;
        }

        let bestMatch = null;
        let lowestDistance = Infinity;
        for (let s of allStations) {
            const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
            const distance = levenshteinDistance(cleanQuery, cleanS);
            const threshold = Math.max(2, Math.floor(cleanS.length / 4)); 
            if (distance <= threshold && distance < lowestDistance) {
                lowestDistance = distance;
                bestMatch = s;
            }
        }
        return bestMatch;
    }

    function findPath(start, end) {
        let queue = [ { node: start, path: [{ node: start, line: null }] } ];
        let visited = new Set([start]);
        while (queue.length > 0) {
            let { node, path } = queue.shift();
            if (node === end) return path;
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor.node)) {
                    visited.add(neighbor.node);
                    queue.push({ node: neighbor.node, path: [...path, { node: neighbor.node, line: neighbor.line }] });
                }
            }
        }
        return null;
    }

    function calculateFare(path) {
        if (!path || path.length < 2) return 0;
        let activeLines = new Set();
        for (let step of path) if (step.line) activeLines.add(step.line);

        if (activeLines.size === 1) {
            let line = Array.from(activeLines)[0];
            let startIndex = lines[line].indexOf(path[0].node);
            let endIndex = lines[line].indexOf(path[path.length - 1].node);
            if (fareMatrices[line] && startIndex !== -1 && endIndex !== -1) {
                let r1 = Math.min(startIndex, endIndex);
                let r2 = Math.max(startIndex, endIndex);
                return fareMatrices[line][r1][r2];
            }
        }

        let stationCount = path.length - 1;
        if (stationCount <= 2) return 10;
        if (stationCount <= 5) return 15;
        if (stationCount <= 9) return 20;
        if (stationCount <= 14) return 25;
        if (stationCount <= 18) return 30;
        if (stationCount <= 22) return 35;
        if (stationCount <= 26) return 40;
        return 50; 
    }

    function calculateStationTime(trainDepTimeStr, stnIdx, lineData, isForward, trainStartIdx) {
        const startIdx = trainStartIdx !== undefined ? trainStartIdx : (isForward ? 0 : lineData.stations.length - 1);
        const segmentsToStn = Math.abs(stnIdx - startIdx);
        
        const parts = trainDepTimeStr.split(':');
        const startMins = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        
        const timePerSegment = lineData.travelTime / (lineData.stations.length - 1);
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
            if (isForward) { if (stnIdx < startIdx || stnIdx > endIdx) return false; } 
            else { if (stnIdx > startIdx || stnIdx < endIdx) return false; }
            return true;
        }).map(train => {
            const startIdx = train.startIdx !== undefined ? train.startIdx : (isForward ? 0 : totalStns - 1);
            return {
                trn: train.trn,
                dest: train.dest,
                dep: calculateStationTime(train.dep, stnIdx, lineData, isForward, startIdx)
            };
        }).sort((a, b) => a.dep.localeCompare(b.dep));
    }

    function buildSingleStationDepartures(node, targetTimeStr, dayType) {
        let resp = `⏱️ NEXT DEPARTURES FROM ${node.toUpperCase()} (${dayType.toUpperCase()} SCHEDULE):\n\n`;
        let found = false;
        
        for (const [lineName, lineData] of Object.entries(db)) {
            const stnIdx = lineData.stations.findIndex(s => s.toLowerCase() === node.toLowerCase());
            if (stnIdx !== -1) {
                found = true;
                resp += `[${lineName.toUpperCase()} LINE]\n`;
                
                const upSchedule = getStationSpecificSchedule(lineData[dayType].up, lineData, stnIdx, true);
                if (upSchedule && upSchedule.length > 0) {
                    const upNext = upSchedule.filter(t => t.dep >= targetTimeStr).slice(0, 2);
                    const dest = lineData.upTerminal || (lineData.upIsForward ? lineData.stations[lineData.stations.length-1] : lineData.stations[0]);
                    resp += `  Towards ${dest.toUpperCase()}:\n`;
                    if(upNext.length > 0) {
                        upNext.forEach(t => resp += `   🚆 ${t.dep.substring(0,5)} (Train ${t.trn})\n`);
                    } else {
                         resp += `   🚫 No more trains today.\n`;
                    }
                }
                
                const dnSchedule = getStationSpecificSchedule(lineData[dayType].dn, lineData, stnIdx, false);
                if (dnSchedule && dnSchedule.length > 0) {
                    const dnNext = dnSchedule.filter(t => t.dep >= targetTimeStr).slice(0, 2);
                    const dest = lineData.dnTerminal || (lineData.upIsForward ? lineData.stations[0] : lineData.stations[lineData.stations.length-1]);
                    resp += `  Towards ${dest.toUpperCase()}:\n`;
                    if(dnNext.length > 0) {
                        dnNext.forEach(t => resp += `   🚆 ${t.dep.substring(0,5)} (Train ${t.trn})\n`);
                    } else {
                         resp += `   🚫 No more trains today.\n`;
                    }
                }
                resp += `\n`;
            }
        }
        if (!found) return `[ERROR] STATION '${node.toUpperCase()}' NOT FOUND IN TIMETABLE DATABASE.`;
        return resp;
    }

    function processQuery(text) {
        let cleanText = text.toLowerCase();
        let targetTimeStr = "";
        
        let timeMatch = cleanText.match(/(?:at|around|after)\s*(\d{1,2})[:.]?(\d{2})?\s*(am|pm)?/i);
        if (timeMatch) {
            let h = parseInt(timeMatch[1]);
            let m = parseInt(timeMatch[2] || "0");
            let ampm = timeMatch[3];
            if (ampm === "pm" && h < 12) h += 12;
            if (ampm === "am" && h === 12) h = 0;
            targetTimeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00`;
            cleanText = cleanText.replace(timeMatch[0], '').trim();
        } else {
            const now = new Date();
            targetTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:00`;
        }

        const dayOfWeek = new Date().getDay();
        let dayType = "weekday";
        if (dayOfWeek === 0) dayType = "sunday";
        else if (dayOfWeek === 6) dayType = "saturday";

        if (cleanText.includes('sunday')) dayType = 'sunday';
        else if (cleanText.includes('saturday')) dayType = 'saturday';
        else if (cleanText.includes('weekday') || cleanText.includes('monday') || cleanText.includes('friday')) dayType = 'weekday';

        let fromStn = null;
        let toStn = null;

        const match1 = cleanText.match(/from\s+(.+?)\s+to\s+(.+)/);
        if (match1) { fromStn = match1[1]; toStn = match1[2]; }
        else {
            const match2 = cleanText.match(/how to go to\s+(.+?)\s+from\s+(.+)/);
            if (match2) { toStn = match2[1]; fromStn = match2[2]; }
            else {
                const match3 = cleanText.match(/(.+?)\s+to\s+(.+)/);
                if (match3 && !cleanText.includes("hello") && !cleanText.includes("hi ") && !cleanText.includes("next ")) {
                    fromStn = match3[1]; toStn = match3[2];
                }
            }
        }

        if (fromStn && toStn) {
            const startNode = findStation(fromStn);
            const endNode = findStation(toStn);

            if (!startNode && !endNode) return `[ERROR] NEITHER '${fromStn.toUpperCase()}' NOR '${toStn.toUpperCase()}' WERE RECOGNIZED IN THE SYSTEM.`;
            if (!startNode) return `[ERROR] ORIGIN TERMINAL '${fromStn.toUpperCase()}' COULD NOT BE RESOLVED.`;
            if (!endNode) return `[ERROR] DESTINATION TERMINAL '${toStn.toUpperCase()}' COULD NOT BE RESOLVED.`;
            if (startNode === endNode) return "YOU ARE ALREADY AT YOUR DESTINATION TERMINAL.";

            const path = findPath(startNode, endNode);
            if (!path) return `[NETWORK DISCONNECTED] NO DIRECT METRO LINK EXISTS BETWEEN ${startNode.toUpperCase()} AND ${endNode.toUpperCase()} AT THIS TIME. SURFACE TRANSPORT REQUIRED.`;

            let response = `ROUTE UPLINK SECURED:\n\n`;
            let currentLine = path[1].line;
            
            response += `📍 BOARD: ${currentLine.toUpperCase()} LINE at ${startNode.toUpperCase()}\n`;

            for (let i = 1; i < path.length; i++) {
                if (path[i].line !== currentLine) {
                    response += `🔄 TRANSFER: At ${path[i-1].node.toUpperCase()} switch to the ${path[i].line.toUpperCase()} LINE\n`;
                    currentLine = path[i].line;
                }
            }
            
            const totalStops = path.length - 1;
            response += `🏁 ARRIVE: ${endNode.toUpperCase()}\n\n`;
            response += `📊 TOTAL STOPS: ${totalStops}\n`;
            response += `💳 ESTIMATED FARE: ₹${calculateFare(path).toFixed(2)}\n`;

            const firstLegLine = path[1].line.toLowerCase();
            const lineData = db[firstLegLine];
            const stnIdx = lineData.stations.findIndex(s => s.toLowerCase() === startNode.toLowerCase());
            const nextNodeIdx = lineData.stations.findIndex(s => s.toLowerCase() === path[1].node.toLowerCase());
            
            const isForward = stnIdx < nextNodeIdx;
            const isUp = isForward === lineData.upIsForward;
            
            const baseSchedule = lineData[dayType][isUp ? 'up' : 'dn'];
            const stnSchedule = getStationSpecificSchedule(baseSchedule, lineData, stnIdx, isUp);
            
            if (stnSchedule && stnSchedule.length > 0) {
                const upcoming = stnSchedule.filter(train => train.dep >= targetTimeStr).slice(0, 3);
                if (upcoming.length > 0) {
                    response += `\n⏱️ NEXT DEPARTURES FROM ${startNode.toUpperCase()} (${dayType.toUpperCase()} SCHEDULE):\n`;
                    upcoming.forEach(train => {
                        response += `   🚆 ${train.dep.substring(0, 5)} (Train ${train.trn})\n`;
                    });
                } else {
                    response += `\n⏱️ NO MORE TRAINS SCHEDULED FROM ${startNode.toUpperCase()} TODAY AFTER ${targetTimeStr.substring(0, 5)}.\n`;
                }
            } else {
                 response += `\n⏱️ NO SERVICE SCHEDULED ON THIS ROUTE FOR ${dayType.toUpperCase()}.\n`;
            }

            return response;
        }

        let singleStnMatch = cleanText.match(/(?:next metro|next train|trains) from\s+(.+)/);
        if (!singleStnMatch) singleStnMatch = cleanText.match(/from\s+(.+)/);
        
        if (singleStnMatch) {
            let stn = findStation(singleStnMatch[1]);
            if (stn) {
                return buildSingleStationDepartures(stn, targetTimeStr, dayType);
            }
        }

        if (cleanText.includes('hi') || cleanText.includes('hello')) {
            return "HELLO. I AM JUHI, THE Kolkata metro ROUTING ASSISTANT. ASK FOR DIRECTIONS USING THE FORMAT: 'FROM [STATION] TO [STATION]' OR 'NEXT METRO FROM [STATION] AT [TIME]'.";
        }

        return "Jata. Don't put kuch bhi. PLEASE SPECIFY YOUR ROUTE USING THE FORMAT: 'FROM [START] TO [DESTINATION]'.";
    }

    window.sendMessageToChatbot = function(text) {
        setTimeout(() => {
            const reply = processQuery(text);
            if (typeof window.receiveChatbotReply === 'function') {
                window.receiveChatbotReply(reply);
            }
        }, 500);
    };
})();