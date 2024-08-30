document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#splide-demo',{
        perPage : 5,
        rewind : true,
        perMove :1,
        type: "loop",
        focus : "center" ,
        wheel : true,
        autoplay : true,
        // điểm vỡ ảnh
        breakpoints: {
          1320: {
            perPage: 4,
          },
          1058: {
            perPage: 3,
          },
          796: {
            perPage: 2,
          },
          534: {
            perPage: 1,
        },
        // bắt buộc mỗi giao diện cần phải cso break points
    },
  }  );
    splide.mount();
  } );


//  đây là sile : sự kiện lắng nghe
// hàm này có tác dụng :
// tạo ra splide = cái splide-demo
