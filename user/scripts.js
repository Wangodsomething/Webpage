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
    const date2 = new Date(userData["Огноо"] || 0);
    date2.setDate(date2.getDate() + 1);
    document.getElementById('start-date').textContent = date2.toISOString().split('T')[0];
    document.getElementById('rewarded-days').textContent = userData["Шагнасан хоног"] || 0;
    document.getElementById('stopped-days').textContent = userData["Зогссон хоног"] || 0;
    const date = new Date(userData["Дуусах өдөр"] || 0);
    date.setDate(date.getDate() + 1);
    document.getElementById('end-date').textContent = date.toISOString().split('T')[0];
    var remaining = userData["Үлдсэн хоног "] || 0;
    if(remaining > 0) {
        document.getElementById('days-left').textContent = userData["Үлдсэн хоног "] || 0;
    }else{
        document.getElementById('days-left').textContent = 0;
    }

});