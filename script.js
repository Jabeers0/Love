// আপনার ভালোবাসার শুরুর তারিখ (Year, Month Index (0-11), Day)
// 14 February 2024 এর জন্য: (2024, 1, 14)
const startDate = new Date(2024, 1, 14); 

function calculateDays() {
    const today = new Date();
    const timeDifference = today.getTime() - startDate.getTime();
    
    // মিলি-সেকেন্ডকে দিনে পরিবর্তন
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-count').innerText = `আমরা একসাথে আছি: ${daysDifference} দিন! 🎉`;
}

// ফাংশনটি কল করা হলো
calculateDays();
