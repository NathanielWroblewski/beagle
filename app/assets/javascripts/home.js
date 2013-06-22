var Results = {
  init: function() {
    $('form').on('ajax:success', this.appendResults);
    $('form').on('ajax:error', this.appendErrors);
  },

  appendResults: function(event, data, status, xhr) {

    $('.results').html(data.searchResponses);
  },

  appendErrors: function(event, xhr, status, error) {
    $('.results').before($.parseJSON(xhr.responseText).error);
  }
};

var CodeSnippet = {
  init: function() {
    $('.home').on('click', 'a', function(e) {
      e.preventDefault();
      e.stopPropagation();

      var link = $(this).attr('href');
      iFrame.init();
    });//end on
  }
};

var iFrame = {
  init: function(link) {
    $('.code-snippet-container').html(this.templateCode);
    $('.code-snippet').html(this.template(link));
  },

  template: function(link) {
    return "<iframe src='" +link+ "'></iframe>";
  },

  templateCode: function() {
    return "<code>" +this.template+ "</code>";
  }
};

$(document).ready(function() {
  Results.init();

  $('.home-logo').click(function(){
    $(".modal-container").fadeIn();
  });

  $(".modal-container").click(function(){
    $(this).fadeOut('fast');
  });

  CodeSnippet.init();
});
