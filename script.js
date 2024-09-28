const url = 'https://api.api-ninjas.com/v1/facts';
const apiKey = 'g3E7DkGzatFzrKThL3DeMw==5u9uLSxYf8K3mByo';
const quote = document.getElementById("quote");

async function getFacts() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data[0].fact;
  } catch (error) {
    console.error('Error:', error);
  }
}

getFacts();

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML , "Tweet Window" , "width=600 , height=300");
}