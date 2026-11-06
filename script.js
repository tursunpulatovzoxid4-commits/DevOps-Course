const fs = require('fs');
const path = require('path');

function analyzeCurrentDirectory() {
    const currentDir = process.cwd();
    
    console.log('==================================================');
    console.log(`📁 Joriy papka: ${currentDir}`);
    console.log('==================================================');

    try {
        // Papka ichidagi barcha fayl va jildlarni o'qish
        const items = fs.readdirSync(currentDir, { withFileTypes: true });

        if (items.length === 0) {
            console.log("Pachka bo'sh.");
            return;
        }

        let totalFiles = 0;
        let totalFolders = 0;

        items.forEach((item) => {
            if (item.isDirectory()) {
                totalFolders++;
                console.log(`📂 [JILD]   : ${item.name}`);
            } else {
                totalFiles++;
                const filePath = path.join(currentDir, item.name);
                const stats = fs.statSync(filePath);
                
                // Hajmini Kilobaytga o'tkazish
                const fileSizeKB = (stats.size / 1024).toFixed(2);
                console.log(`📄 [FAYL]   : ${item.name} (${fileSizeKB} KB)`);
            }
        });

        console.log('--------------------------------------------------');
        console.log(`📊 Jami: ${totalFolders} ta jild, ${totalFiles} ta fayl topildi.`);
        console.log('==================================================');

    } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
    }
}

// Funksiyani ishga tushirish
analyzeCurrentDirectory();
