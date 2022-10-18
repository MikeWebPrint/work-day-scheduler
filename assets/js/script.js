// get time object and show current date and time
container = $('.container') //select DOM element
function showTime() {
  var now = dayjs().format('dddd, MMMM DD, h:mma'); 
  $('#currentDay').text('Current time: '+ now ); 
};
setInterval(showTime, 1000); //update display time every second
var currentHour = dayjs().hour() // current hour number for comparing to appointment time
// global variables to create the appointment rows
sampleHours=[]
sampleHours.length = 13
$.each(sampleHours, function(index){
  row = $('<form class="row" id='+(index )+'></form>'); // set ID on each row
  apptTime = dayjs().set('hour', index + 7); //start at selected hour
  hour = $('<div class="hour col col-3 col-md-2 col-lg-1">' + apptTime.format('ha') + '</div>'); //display that hour
  entryField = $('<textarea class="col description" id=entryField-' + index + '></textarea>'); //create textarea and set an ID
  saveBtn = $('<button type="submit" class="saveBtn col col-2 col-lg-1 align-items-center"></button>')// create button and append icon
  icon = $('<i></i>');
  $(icon).addClass('fa-solid fa-floppy-disk')
  saveBtn.append(icon);
  // append elements to each row
  row.append(hour);
  row.append(entryField);
  row.append(saveBtn);
  container.append(row);
// set up classes dynamically depending on hour comparison
  $.each(row, function() {
    apptHour = apptTime.format('H')
    if (currentHour < apptHour){
      row.addClass('future')
    } else if (currentHour == apptHour){
      row.addClass('present')
    } else {
      row.addClass('past')
    }
  })
})
// event listener on save button to add info to local storage
// https://stackoverflow.com/questions/45563841/get-val-of-element-multiple-forms-at-one-page-with-jquery
$('form').on('submit', function(e) {
  e.preventDefault();
  var appointment = $(this).find('textarea').val();
  var time = $(this).index();
    setSchedule(time, appointment)
    // console.log(time, appointment)
  }
) 
// get schedule from localStorage
function getSchedule() {
  var hours = $([0,1,2,3,4,5,6,7,8,9,10,11,12]);
  for (i=0; i< hours.length;i++){
    var appointment = localStorage.getItem(i);
    if (appointment === ''){
      localStorage.removeItem(hours[i]) //delete removed appointments
    }
    $('#entryField-'+i).val(appointment);
    // console.log('Get ' + appointment);
  }
  return appointment;
}
// get and set schedule into localStorage
function setSchedule(time, appointment) {
  localStorage.setItem(time, appointment) // add new appointment
  getSchedule(); // show all appointments including new one
}
getSchedule() // get data from local Storage on page load
