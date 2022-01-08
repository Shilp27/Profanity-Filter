function speak() {
  var textarea = document.getElementById('fieldinput');
  let prevText = textarea.value;
  let newText;

  newText = prevText.replace(/fucking/g, 'ducking');
  newText = newText.replace('f******', 'ducking');
  newText = newText.replace(/fuck/g, 'duck');
  newText = newText.replace('f***', 'duck');
  newText = newText.replace(/bitch/g, 'peach');
  newText = newText.replace('b****', 'peach');
  newText = newText.replace(/ass/g, 'base');
  newText = newText.replace('a**', 'base');
  newText = newText.replace(/asshole/g, 'pothole');
  newText = newText.replace('a******', 'pothole');
  newText = newText.replace(/bastard/g, 'mustard');
  newText = newText.replace('b******', 'mustard');
  newText = newText.replace(/holy/g, 'jolly');
  newText = newText.replace('h***', 'jolly');
  newText = newText.replace(/shit/g, 'bit');
  newText = newText.replace('s***', 'bit');

  newText = newText.replace(/cunt/g, 'gunt');
  newText = newText.replace('c***', 'g***');
  newText = newText.replace(/cocksucker/g, 'clogger');
  newText = newText.replace('c*********', 'clogger');
  newText = newText.replace(/sucker/g, 'slacker');
  newText = newText.replace('s*****', 'slacker');
  newText = newText.replace(/fucker/g, 'ducker');
  newText = newText.replace('f*****', 'ducker');

  // newText = newText.replace(/ /g, '');
  // newText = newText.replace(' ', '');

  document.getElementById('fieldinput').value = newText;
  responsiveVoice.speak(newText);
}
