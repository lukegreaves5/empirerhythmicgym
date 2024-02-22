$( document ).ready(function() {

    const $homeSldier = $("#home-slider");
  
    const $airtablePhotos = "https://api.airtable.com/v0/app0If42ofYL8h6Tq/Photos?api_key=keymG5zyrY5kKFbSk";
    const $airtableHome = "https://api.airtable.com/v0/app0If42ofYL8h6Tq/Home?api_key=app0If42ofYL8h6Tq";
   
    $.ajax({
      url: $airtablePhotos,
      type: "GET",
      error: function(err) {
        console.log(err);
        //error(err)
      },
      success: function(data) {
        console.log(data);
        addLogo(data);
      }
    });
  
  
    function addLogo(data) {
      var $dataSorted = data.records.sort((a, b) => parseFloat(a.fields.position) - parseFloat(b.fields.position));
      for (var d in $dataSorted) {
      var imageContainer = document.createElement('div');
      imageContainer.className = "carousel-item col-md-3";
      var $image = document.createElement("img")
      $image.src = data.records[d].fields.image[0].url;
      $image.className = "img-fluid mx-auto d-block boxshadow1";
      $image.style.height = "12rem";
      $image.style.maxWidth = "100%";
    
      imageContainer.append($image);
      $homeSldier.append(imageContainer);
  
      };
    };
  
  });