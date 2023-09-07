const isValid = (url) => {
    let regex = new RegExp(/^(http|https):\/\/[\w\d\s\S]+?\.[\w]+$/i);
  
    return regex.test(url) ? 'Valid URL' : 'Not a valid URL';
  };
  
  // test-case
  [
    'www.example.com',
    'http://invalid_url',
    'https://invalid@url.com',
    'ftp://ftp.example.net',
    'http://www.example.com',
    'https://my-site123.net',
    'http://www.openai.com',
    'https://stackoverflow.com',
    'https://en.wikipedia.org',
  ].map((url) => {
    console.log(isValid(url));
  });