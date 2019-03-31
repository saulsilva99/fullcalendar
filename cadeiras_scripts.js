$(document).ready(function() {

   $('#calendar').fullCalendar({
      plugins: ['interaction', 'timeGrid'],
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
         id: 1,
         title: 'Saul The best',
         start: '2019-03-29T13:00:00',
         end: '2019-03-29T14:00:00',
      }]
   });
});


function handlerEventNames(name) {
   if (name == 'ads-T21') {

      if ($("input[name=" + name + "]").is(":checked")) {
         console.log("input[name=" + name + "]");
         var evento1 = {
            id: "ads-T21",
            title: name,
            start: '2019-03-26T14:30:00',
            end: '2019-03-26T15:30:00',
            color: "black"
         };
         var evento2 = {
            id: "ads-T21",
            title: name,
            start: '2019-03-29T13:00:00',
            end: '2019-03-29T14:00:00',
            color: "black"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
         $('#calendar').fullCalendar('renderEvent', evento2);
      }else{
         $('#calendar').fullCalendar('removeEvents', "ads-T21");
      }
   } else if (name == 'ads-TP21') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "ads-TP21",
            title: name,
            start: '2019-03-26T15:40:00',
            end: '2019-03-26T17:00:00',
            color: "orange",
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "ads-TP21");
      }
   } else if (name == 'ads-TP22') {
      if ($("input[name=" + name + "]").is(":checked")) {
         console.log(2);
         var evento1 = {
            id: "ads-TP22",
            title: name,
            start: '2019-03-25T13:00:00',
            end: '2019-03-25T14:00:00',
            color:"orange"
         };
         $('#calendar').fullCalendar('renderEvent',evento1);
      }
      else{
         $('#calendar').fullCalendar('removeEvents', "ads-TP22");
      }
   } else if (name == 'ads-TP23') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "ads-TP23",
            title: name,
            start: '2019-03-29T14:00:00',
            end: '2019-03-29T15:30:00',
            color:"orange"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "ads-TP23");
      }
   }

   // -------------------- prog 2

   else if (name == 'progII-T21') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-T21",
            title: name,
            start: '2019-03-25T08:00:00',
            end: '2019-03-25T09:00:00',
            color:"black"
         };
         var evento2 = {
            id: "progII-T21",
            title: name,
            start: '2019-03-26T11:00:00',
            end: '2019-03-26T12:00:00',
            color:"black"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
         $('#calendar').fullCalendar('renderEvent', evento2);

      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-T21");
      }
   }

   else if (name == 'progII-TP21') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-TP21",
            title: name,
            start: '2019-03-26T12:00:00',
            end: '2019-03-26T13:30:00',
            color:"orange"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-TP21");
      }
   }
   else if (name == 'progII-TP22') {
      if ($("input[name=" + name + "]").is(":checked")) {
         var evento1 = {
            id: "progII-TP22",
            title: name,
            start: '2019-03-27T12:00:00',
            end: '2019-03-27T13:30:00',
            color:"orange"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-TP22");
      }
   }
   else if (name == 'progII-TP24') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-TP24",
            title: name,
            start: '2019-03-26T12:00:00',
            end: '2019-03-26T13:30:00',
            color:"orange"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-TP24");
      }
   }


   else if (name == 'progII-PL21') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-PL21",
            title: name,
            start: '2019-03-28T10:30:00',
            end: '2019-03-28T12:00:00',
            color:"purple"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-PL21");
      }
   }
   else if (name == 'progII-PL22') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-PL22",
            title: name,
            start: '2019-03-26T08:30:00',
            end: '2019-03-26T10:00:00',
            color:"purple"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-PL22");
      }
   }
   else if (name == 'progII-PL23') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-PL23",
            title: name,
            start: '2019-03-28T12:00:00',
            end: '2019-03-28T13:30:00',
            color:"purple"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-PL23");
      }
   }
   else if (name == 'progII-PL24') {
      if ($("input[name=" + name + "]").is(":checked")) {

         var evento1 = {
            id: "progII-PL24",
            title: name,
            start: '2019-03-29T08:00:00',
            end: '2019-03-29T09:30:00',
            color:"purple"
         };
         $('#calendar').fullCalendar('renderEvent', evento1);
      }else{
         $('#calendar').fullCalendar('removeEvents', "progII-PL24");
      }
   }

}
