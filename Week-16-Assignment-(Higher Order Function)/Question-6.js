const isValid = (url) => {
    let regex = new RegExp( /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/);
  
    return regex.test(url) ? 'Valid URL' : 'Not a valid URL';
  };
  
  // test-case
  [
    'https://www.linkedin.com/in/johndoe123',
  'https://www.linkedin.com/in/mary_smith',
  'https://www.linkedin.com/in/1234567890',
  'https://www.linkedin.com/in/user-name-123',
  'https://www.linkedin.com/in/a_very_long_profile_id_that_is_invalid',
  'https://www.linkedin.com/in/invalid*profile',
  'https://www.linkedin.com/in/short',
  ].map((url) => {
    console.log(isValid(url));
  });