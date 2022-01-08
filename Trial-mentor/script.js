function speak() {
  var textarea = document.getElementById('fieldinput');
  let badwords = /fucking|cunt|moron|fuck|bastard|bitch/gi;
  let prevText = textarea.value;
  let newText;
  newText = prevText.replace(/fucking/g, 'ducking');
  // newText = newText.replace(/ing/g, '');
  // newText = newText.replace(/f**/g, 'duck');
  // newText = newText.replace(/cunt/g, 'gunt');

  // newText = newText.replace(/arse/g, '');
  // newText = newText.replace(/ass/g, '');
  // newText = newText.replace(/asshole/g, '');
  // newText = newText.replace(/bastard/g, '');
  // newText = newText.replace(/bitch/g, '');
  // newText = newText.replace(/brotherfucker/g, '');
  // newText = newText.replace(/bugger/g, '');
  // newText = newText.replace(//g, 'test');

  newText = newText.replace(/holy/g, 'jolly');
  newText = newText.replace(/shit/g, 'bit');
  newText = newText.replace(/bit/g, 'gunt');
  newText = newText.replace(/fuck/g, 'duck');
  newText = newText.replace(/cunt/g, 'gunt');

  document.getElementById('fieldinput').value = newText;
  responsiveVoice.speak(newText);
}
