import translate from '@mgcodeur/super-translator';

const result = await translate({
  from: 'en',
  to:'fr',
  text:'you are ugly'
});

console.log(result);