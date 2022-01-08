try {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
} catch (e) {
  console.error(e);
}

var textareaInput = $('#textarea-input');
var instructions = $('#recording-instructions');
var recordsList = $('ul#records');

var recordContent = '';

var records = getAllRecords();
renderRecords(records);
recognition.continuous = true;

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  var mobileRepeatBug =
    current == 1 && transcript == event.results[0][0].transcript;

  if (!mobileRepeatBug) {
    recordContent += transcript;
    textareaInput.val(recordContent);
  }
};

recognition.onstart = function () {
  instructions.text('Voice Recognition is active. Speak into the microphone.');
  console.log('Started');
};

recognition.onspeechend = function () {
  instructions.text(
    'You were silent for too long, voice recognition has been turned off.'
  );
  console.log('silent recording');
};

recognition.onerror = function (event) {
  if (event.error == 'no-speech') {
    instructions.text('Speech was not detected, please try again.');
  }
};

$('#start-recording').on('click', function (e) {
  if (recordContent.length) {
    recordContent += ' ';
  }
  recognition.start();
});

$('#stop-recording').on('click', function (e) {
  recognition.stop();
  instructions.text('Voice recognition has been terminated.');
  console.log('STOPPED RECORDING');
});

textareaInput.on('input', function () {
  recordContent = $(this).val();
});

$('#filter-recording').on('click', function (e) {
  recognition.stop();

  if (!recordContent.length) {
    instructions.text('Text was not detected, nothing to speak.');
  } else {
    saveRecord(new Date().toLocaleString(), recordContent);
    recordContent = '';
    renderRecords(getAllRecords());
    textareaInput.val('');
    instructions.text('Record was saved to localStorage successfully.');
  }
});

recordsList.on('click', function (e) {
  e.preventDefault();
  var target = $(e.target);
  console.log(target);
  if (target.hasClass('listen-record')) {
    var content = target.closest('.record').find('.content').text();
    readOutLoud(content);
  }
  if (target.hasClass('delete-record')) {
    var dateTime = target.siblings('.date').text();
    deleteRecord(dateTime);
    target.closest('.record').remove();
  }
});

function readOutLoud(message) {
  var speech = new SpeechSynthesisUtterance();
  console.log(message);
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function renderRecords(records) {
  var html = '';
  if (records.length) {
    records.forEach(function (record) {
      html += `<li class="record">
          <p class="header">
            <span class="date">${record.date}</span>
            <a href="#" class="listen-record" title="Listen to Recording">Listen to Record</a>
            <a href="#" class="delete-record" title="Delete">Delete</a>
          </p>
          <p class="content">${record.content}</p>
        </li>`;
    });
  } else {
    html = '<li><p class="content">You don\'t have any records yet.</p></li>';
  }
  recordsList.html(html);
}

function saveRecord(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}

function getAllRecords() {
  var records = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if (key.substring(0, 5) == 'note-') {
      records.push({
        date: key.replace('note-', ''),
        content: localStorage.getItem(localStorage.key(i)),
      });
    }
  }
  return records;
}

function deleteRecord(dateTime) {
  localStorage.removeItem('note-' + dateTime);
  instructions.text('Record was deleted from localStorage.');
}

// SPEAKING TEXT PART
function speak() {
  var textarea = document.getElementById('textarea-input');
  let prevText = textarea.value;
  let newText;

  newText = prevText.replace(/fucking/g, 'ducking');
  newText = newText.replace('f******', 'ducking');

  newText = newText.replace(/fuck/g, 'duck');
  newText = newText.replace('f***', 'duck');
  newText = newText.replace(/bitch/g, 'peach');
  newText = newText.replace('b****', 'peach');
  newText = newText.replace(/asshole/g, 'eggroll');
  newText = newText.replace('a******', 'eggroll');
  newText = newText.replace(/ass/g, 'base');
  newText = newText.replace('a**', 'base');
  newText = newText.replace(/bastard/g, 'mustard');
  newText = newText.replace('b******', 'mustard');
  newText = newText.replace(/holy/g, 'jolly');
  newText = newText.replace('h***', 'jolly');
  newText = newText.replace(/shit/g, 'chit');
  newText = newText.replace('s***', 'chit');

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

  document.getElementById('textarea-input').value = newText;
  responsiveVoice.speak(newText);
}
