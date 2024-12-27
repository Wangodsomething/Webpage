document.addEventListener('DOMContentLoaded', () => {
    // Simulated data object
    
  console.log('Retrieving data from localStorage...');
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log('Retrieved data:', userData);
    //var endDate = userData["Огноо"] + userData["Шийтгэсэн хоног"] + userData["Зогссон хоног"] - userData["Шагнасан хоног"] + userData[""] + userData[""];
    // Populate the user details in the DOM
    document.getElementById('name').textContent = userData["Нэр"] || "Тодорхойгүй";
    document.getElementById('age').textContent = userData["Нас"] || "Тодорхойгүй";
    document.getElementById('gender').textContent = userData["Хүйс"] || "Тодорхойгүй";
    document.getElementById('register').textContent = userData["Регист"] || "Тодорхойгүй";
    document.getElementById('phone').textContent = userData["Утас"] || "Тодорхойгүй";
    document.getElementById('court').textContent = userData["Шүүх"] || "Тодорхойгүй";
    document.getElementById('number').textContent = userData["Дугаар"] || "Тодорхойгүй";
    document.getElementById('penalty').textContent = userData["Ял шийтгэл"] || "Тодорхойгүй";

    // Populate the date information
    document.getElementById('start-date').textContent = userData["Огноо"] || "Тодорхойгүй";
    document.getElementById('rewarded-days').textContent = userData["Шагнасан хоног"] || 0;
    document.getElementById('stopped-days').textContent = userData["Зогссон хоног"] || 0;


if (userData) {
    // Parse the date from the JSON (format: "YYYY.MM.DD")
    const startDate = new Date(userData.Огноо.replace(/\./g, '-')); // Replace '.' with '-' for compatibility
    const stoppedDays = parseInt(userData['Зогссон хоног'], 10) || 0;
    const punishedDays = parseInt(userData['Шийтгэсэн хоног'], 10) || 0;
    const rewardedDays = parseInt(userData['Шагнасан хоног'], 10) || 0;

    // Calculate the total days to add to the start date
    const totalDays = punishedDays + stoppedDays - rewardedDays;

    // Calculate the end date
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + totalDays);

    // Calculate the difference between the end date and today
    const today = new Date();
    const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

    // Display the results
    console.log('Start Date:', startDate.toISOString().split('T')[0]);
    console.log('End Date:', endDate.toISOString().split('T')[0]);
    console.log('Days Left:', daysLeft);

    // Optional: Display in the DOM if needed
    document.getElementById('end-date').textContent = `${endDate.toISOString().split('T')[0]}`;
    document.getElementById('days-left').textContent = `${daysLeft}`;
} else {
    console.error('No userData found in localStorage');
}

});