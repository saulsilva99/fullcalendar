$(function() {
  $('#calendar').fullCalendar({
    plugins: ['interaction', 'timeGrid'],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek',
    },
    buttonText: {
      today: "Hoje",
      week: "Semana",
    },
    defaultView: 'timeGridWeek',
    allDayText: "Horas",
    hiddenDays: [0, 6],
    minTime: "08:00:00",
    maxTime: "20:00:00",
    locale: 'pt',
    defaultDate: '2019-03-29',
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    eventLimit: true,
    events: [{
      title: 'Saul The best',
      start: '2019-03-29T13:00:00',
      end: '2019-03-29T14:00:00',
      constraint: 'businessHours'
    }]
  });
});
function evento(name) {

  var myEvent = {
    title: name,
    start: '2019-03-26T13:00:00',
    end: '2019-03-26T14:00:00',
    constraint: 'businessHours'
  };
  var calendar = $('#calendar');
  calendar.fullCalendar('renderEvent', myEvent);
}
