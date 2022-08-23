export const generateLetters = (length) => {
  let result = '';
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersLength = allLetters.length;

  for (let i = 0; i < length; i++) {
    result += allLetters.charAt(Math.floor(Math.random() * lettersLength));
  }

  return result;
};
