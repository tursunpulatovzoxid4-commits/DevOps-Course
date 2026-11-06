const os = require('os');

function checkSystemHealth() {
    // Xotira ma'lumotlarini hisoblash (Baytdan Gigabaytga o'tkazish)
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    
    const memoryUsagePercent = ((usedMemory / totalMemory) * 100).toFixed(2);
    
    // Server qancha vaqtdan beri ishlab turganini soatlarda hisoblash
    const uptimeHours = (os.uptime() / 3600).toFixed(2);

    console.log('========================================');
    console.log('📊 TIZIM RESURSLARI VA HOLATI (HEALTH CHECK)');
    console.log('========================================');
    console.log(`💻 OS Platformasi  : ${os.platform()} (${os.arch()})`);
    console.log(`🧠 CPU yadrolari   : ${os.cpus().length} ta`);
    console.log(`⏱️ Ishlash vaqti   : ${uptimeHours} soat`);
    console.log(`💾 Jami RAM        : ${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
    console.log(`🔥 Band qilingan   : ${(usedMemory / (1024 * 1024 * 1024)).toFixed(2)} GB (${memoryUsagePercent}%)`);
    console.log(`🟢 Bo'sh RAM       : ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
    console.log('========================================');
}

// Funksiyani ishga tushirish
checkSystemHealth();