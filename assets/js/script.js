
var currentDay = document.getElementById('currentDay')
var now = dayjs().format('dddd, MMMM DD')
currentDay.textContent = now
// var row = $('<p></p>').text('Hello');
// $('.container').append((row));
console.log(dayjs());
// var icon = $('<i class="fa-solid fa-floppy-disk"></i>');
// $(row).append(icon);
container = $('.container')
// sampleHours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm', '5pm'];
sampleHours=[]
sampleHours.length = 9
$.each(sampleHours, function(index,value){
  row = $('<div class="row"></div>');
  hour = $('<div class="hour col col-2 col-md-1">' + dayjs().set('hour', index + 9).format('h') + '</div>');
  entryField =$('<input type="text" placeholder="Text here" class="col ">');
  saveBtn = $('<div class="saveBtn col col-2 col-md-1"></div>')
  icon = $('<i></i>');
  $(icon).addClass('fa-solid fa-floppy-disk fa-beat')
  // row.attr('id', [i]);
  saveBtn.append(icon);
  row.append(hour);
  row.append(entryField);
  row.append(saveBtn);
  container.append(row);
})

var _9am = dayjs().isBefore('2022-10-16', 'hour');

