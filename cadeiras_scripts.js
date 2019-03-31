$(document).ready(function() {

  $('#calendar').fullCalendar({
    plugins: [ 'interaction','timeGrid' ],
    defaultView: 'agendaWeek',
    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'agendaWeek'
    },
      allDayText: "Horas",
       hiddenDays: [0, 6],
       minTime: "08:00:00",
       maxTime: "20:00:00",
       locale: 'pt',
       defaultDate: '2019-03-29',
       navLinks: true, // can click day/week names to navigate views
       editable: false,
       events: [{
          id:1,
          title: 'Saul The best',
          start: '2019-03-29T13:00:00',
          end: '2019-03-29T14:00:00',
       }]
  });
});

function evento(name) {
  var eventoo =  handlerEventNames(name);
  $('#calendar').fullCalendar('renderEvent', eventoo);
}
function handlerEventNames(name){
  console.log(name);
  if(name == 'ads-T21'){
    var eventoo = [{id:2,title: name,start: '2019-03-26T14:30:00',end: '2019-03-26T15:30:00'},
                   {id:2,title: name,start: '2019-03-29T14:30:00',end: '2019-03-29T15:30:00'}];
    return eventoo;
  }
  else if(name == 'ads-T22'){
    var eventoo = {id:3,title: name,start: '2019-03-26T13:00:00',end: '2019-03-26T14:00:00',
    };
    return eventoo;
  }
  else if(name == 'ads-TP21'){
    var eventoo = {id:4,title: name,start: '2019-03-26T13:00:00',end: '2019-03-26T14:00:00',
    };
    return eventoo;
  }


}
