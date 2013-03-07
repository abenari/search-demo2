// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.autocomplete
//= require scoped_search
//= require twitter/bootstrap
//= require_tree .

// run the auto completer script
$(function(){$('#search').scopedSearch()})

//add bookmark dialog
$(function() {
  $('#bookmarks-modal .btn-primary').click(function(){
    $("#bookmark-submit").click();
  });
  $("#bookmarks-modal").bind('shown', function () {
    var query = encodeURI($("#search").val());
    var url = $("#bookmark").attr('data-url');
    $("#bookmarks-modal .modal-body").empty();
    $("#bookmarks-modal .modal-body").append("<span id='loading'>Loading ...</span>");
    $("#bookmarks-modal .modal-body").load(url + '?query=' + query + ' form',
                                           function(response, status, xhr) {
                                             $("#loading").hide();
                                             $('.modal-body .form-actions').hide()
                                           });
  });

});
