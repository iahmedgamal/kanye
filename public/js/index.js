randomQuote();
async function randomQuote() {
  let response = await fetch('https://api.kanye.rest');

  if (response.ok) {
    let json = await response.json();
    console.log('json', json);
    document.getElementById('quote').innerText = json.quote;
  } else {
    alert('HTTP-Error: ' + response.status);
  }
}
