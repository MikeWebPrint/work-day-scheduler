
var currentDay = document.getElementById('currentDay')
var now = dayjs().format('dddd, MMMM DD')
var currentHour = dayjs().hour()
currentDay.textContent = now
// var row = $('<p></p>').text('Hello');
// $('.container').append((row));
console.log(dayjs());
// var icon = $('<i class="fa-solid fa-floppy-disk"></i>');
// $(row).append(icon);
container = $('.container')
sampleHours=[]
sampleHours.length = 9
$.each(sampleHours, function(index){
  row = $('<form class="row" id='+(index + 9)+'></form>');
  apptTime = dayjs().set('hour', index + 12); //change to 9 after dev
  hour = $('<div class="hour col col-2 col-lg-1">' + apptTime.format('ha') + '</div>');
  entryField = $('<textarea class="col description" id=entryField-' + index + '></textarea>');
  saveBtn = $('<button type="submit" class="saveBtn col col-2 col-lg-1 align-items-center"></button>')
  icon = $('<i></i>');
  $(icon).addClass('fa-solid fa-floppy-disk')
  saveBtn.append(icon);
  row.append(hour);
  row.append(entryField);
  row.append(saveBtn);
  container.append(row);
  $.each(row, function() {
    apptHour = apptTime.format('H')
    console.log(apptHour, currentHour)
    if (currentHour < apptHour){
      row.addClass('future')
    } else if (currentHour == apptHour){
      row.addClass('present')
    } else {
      row.addClass('past')
    }
    // if (dayjs().isBefore(apptTime) ){
    //   row.addClass('future')
    // } else if (dayjs().isSame(apptTime) ){
    //   row.addClass('present')
    // } else {
    //   row.addClass('past')
    // }
  })
})
// https://stackoverflow.com/questions/45563841/get-val-of-element-multiple-forms-at-one-page-with-jquery
$('form').on('submit', function(e) {
  e.preventDefault();
  var schedule =[];
  var appointment = $(this).find('textarea').val();
  var time = $(this).find('.hour').text();
  var entry = {time, appointment}
  if (appointment !==''){
    setSchedule(entry)
  } else {
    alert('Please enter an event')
  }
}) 
// get schedule from localStorage
function getSchedule() {
  var schedule = localStorage.getItem('schedule');
  console.log(schedule);
  return schedule;
}
// get and set schedule into localStorage
function setSchedule(entry) {
  getSchedule();
  if (getSchedule() === null){
      var schedule =[];
    } else {
      var schedule = JSON.parse(localStorage.getItem('schedule'));
    }
  schedule.push({entry})
  localStorage.setItem('schedule', JSON.stringify(schedule))
}

// setSchedule()