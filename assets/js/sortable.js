

$(document).ready(function() {
    $('#sortTable').DataTable({
      dom: "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-12 col-md-12 text-center'p>>",
      "searching": false,
      "lengthChange": false,
      pagingType: 'full_numbers',
      language: {
        "info": "Total _TOTAL_",
        //customize pagination prev and next buttons: use arrows instead of words
        'paginate': {
          'first': '<span class="paginate_button fa fa-angle-double-left mx-2"></span>',
          'last': '<span class="paginate_button fa fa-angle-double-right mx-2"></span>',
          'previous': '<span class="paginate_button fa fa-angle-left mx-2"></span>',
          'next': '<span class="paginate_button fa fa-angle-right mx-2"></span>'
        },
        //customize number of elements to be displayed
        "lengthMenu": 'Display <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> results'
      }
    })  
  } );