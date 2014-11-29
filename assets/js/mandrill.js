+function($) {

  $('form[name=registration]').on('submit', submitRegistrationEmail);
  $('form[name=mentor]').on('submit', submitMentorEmail);
  $('form[name=sponsor]').on('submit', submitSponsorEmail);

  function submitRegistrationEmail(e) {
    e.preventDefault();
    e.stopPropagation();

    var regModal = $('#registrationModal');
    var registration = {
      subject: $('#registration-subject'),
      message: $('#registration-message'),
      from: $('#registration-email')
    };

     var success = $('<div class="alert alert-success" id="registration-alert">Successfully registered your team!</div>');
     var error = $('<div class="alert alert-danger" id="registration-alert">Could not process your request!</div>');

     if ( !registration.message.trim().length || !registration.subject.trim().length || !registration.from.val().trim().length) {
      regModal.prepend(error);
      return;
     }

    $.ajax({
    type: 'POST',
    url: 'https:\/\/mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'GCeXZRKu5LeqiVhr3T2Evw',
      'message': {
        'from_email': strip(registration.from.val()),
        'to': [
            {
              'email': 'ateneohacks@gmail.com',
              'name': 'Registration, AteneoHacks',
              'type': 'to'
            },
          ],
        'autotext': 'true',
        'subject': strip(registration.subject.val()),
        'html': strip(registration.message.val())
      }
    }
   }).done(function(response) {
     regModal.find('.modal-body').prepend( response[0].status === "sent" ? success : error);

     setTimeout(function() {
      regModal.modal('toggle'); 
      $('#registration-alert').remove();
      registration.subject.val('');
      registration.message.val('');
      registration.from.val('');
     }, 5000);     
   });
  }


  function submitMentorEmail(e) {
    e.preventDefault();
    e.stopPropagation();

    var mentorModal = $('#mentorModal');
    var mentor = {
      subject: $('#mentor-subject'),
      message: $('#mentor-message'),
      from: $('#mentor-email')
    };

     var success = $('<div class="alert alert-success" id="mentor-alert">Successfully applied as a mentor! Your application will be reviewed.</div>');
     var error = $('<div class="alert alert-danger" id="mentor-alert">Could not process your request!</div>');

     if ( !mentor.message.val().trim().length || !mentor.subject.val().trim().length || !mentor.from.val().trim().length) {
      regModal.prepend(error);
      return;
     }

    $.ajax({
    type: 'POST',
    url: 'https:\/\/mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'GCeXZRKu5LeqiVhr3T2Evw',
      'message': {
        'from_email': strip(mentor.from.val().trim()),
        'to': [
            {
              'email': 'ateneohacks@gmail.com',
              'name': 'Mentor, AteneoHacks',
              'type': 'to'
            },
          ],
        'autotext': 'true',
        'subject': strip(mentor.subject.val().trim()),
        'html': strip(mentor.message.val().trim())
      }
    }
   }).done(function(response) {
     mentorModal.find('.modal-body').prepend( response[0].status === "sent" ? success : error);

     setTimeout(function() {
      mentorModal.modal('toggle'); 
      $('#mentor-alert').remove();
      mentor.subject.val('');
      mentor.message.val('');
      mentor.from.val('');
     }, 5000);     
   });
  }


  function submitSponsorEmail(e) {
    e.preventDefault();
    e.stopPropagation();

    var regModal = $('#sponsorModal');
    var sponsor = {
      subject: $('#sponsor-subject'),
      message: $('#sponsor-message'),
      from: $('#sponsor-email')
    };

     var success = $('<div class="alert alert-success" id="sponsor-alert">Successfully applied sponsorship! Your application will be reviewed shortly.</div>');
     var error = $('<div class="alert alert-danger" id="sponsor-alert">Could not process your request!</div>');

     if ( !sponsor.message.val().trim().length || !sponsor.subject.val().trim().length || !sponsor.from.val().trim().length) {
      regModal.prepend(error);
      return;
     }

    $.ajax({
    type: 'POST',
    url: 'https:\/\/mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'GCeXZRKu5LeqiVhr3T2Evw',
      'message': {
        'from_email': strip(sponsor.from.val()),
        'to': [
            {
              'email': 'ateneohacks@gmail.com',
              'name': 'Sponsor, AteneoHacks',
              'type': 'to'
            },
          ],
        'autotext': 'true',
        'subject': strip(sponsor.subject.val()),
        'html': strip(sponsor.message.val())
      }
    }
   }).done(function(response) {
     regModal.find('.modal-body').prepend( response[0].status === "sent" ? success : error);

     setTimeout(function() {
      regModal.modal('toggle'); 
      $('#sponsor-alert').remove();
      sponsor.subject.val('');
      sponsor.message.val('');
      sponsor.from.val('');
     }, 5000);     
   });
  }

  function strip(html)
  {
     var tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }
}(jQuery);