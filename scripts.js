async function login(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const apiUrl = 'https://script.google.com/macros/s/AKfycbzjBja8TkLG7krIdZmeT8mrDIW5VAvbTZzL8VE3u_4GxlZmRA2ImFqW4eIHTm9ODTMC/exec';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(username, password);

  try {
    // Fetch request with explicit "follow" for redirects
    const response = await fetch(`${apiUrl}?username=${username}&password=${password}`, {
      method: 'GET', // or 'POST' if required
      redirect: 'follow', // Ensures redirects are followed
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log(data);

    if (data.error) {
      alert('Нэвтрэх нэр эсвэл нууц үг буруу байна');
    } else {
      // Store the data in localStorage
      localStorage.setItem('userData', JSON.stringify(data));

      // Redirect to user page
      window.location.href = 'user/user.html'; // Navigate to user page
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('Нэвтрэх явцад алдаа гарлаа. Дахин оролдоно уу.');
  }
}

// Assuming you have a login button to trigger the login process
document.getElementById('loginButton').addEventListener('click', login);
