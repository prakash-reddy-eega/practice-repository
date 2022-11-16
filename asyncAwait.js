const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
  console.log('statement 2')
};

doNetworkCall();