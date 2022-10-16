
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
$.each(sampleHours, function(index){
  row = $('<div class="row"></div>');
  apptTime = dayjs().set('hour', index + 9);
  hour = $('<div class="hour col col-2 col-lg-1">' + apptTime.format('ha') + '</div>');
  
  entryField = $('<textarea class="col description"></textarea>');
  saveBtn = $('<div class="saveBtn col col-2 col-lg-1"></div>')
  icon = $('<i></i>');
  $(icon).addClass('fa-solid fa-floppy-disk')
  // row.attr('id', [i]);
  saveBtn.append(icon);
  row.append(hour);
  row.append(entryField);
  row.append(saveBtn);
  container.append(row);
  $.each(row, function(apptTime) {
    if (dayjs().isBefore(apptTime) ){
      row.addClass('future')
    } else if (dayjs().isSame(apptTime) ){
      row.addClass('present')
    } else {
      row.addClass('past')
    }
  })
  $.each(row, function(){
   $(saveBtn).on('click', function(event){
      event.preventDefault();
      description = $('.description').val();
      // console.log('hello')
      console.log(description);
    })
  })
})


console.log($('.row'));

