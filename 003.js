window.onload = function()
{
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");        
    //이미지 객체 생성하기
    var img = new Image();
    //이미지 읽어들인후 처리
    img.onload = function()
    {
        ctx.drawImage(img,0,0);
        //이미지 데이타 객체 가져오기
        //(canvas.width와 canvas.height에는 canvas요소의 너비와 높이가 저장되어 있음)
        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        //RGBA 값을 구하는 메서드를 추가
        imageData.getRGBA = function(m,n,i)
        {
            return this.data[this.width * 4 * n + 4 * m+i];
        }
        var rgb = document.getElementById("rgb");
        //canvas요소를 클릭했을떄 처리
        canvas.onclick = function(event)
        {
            var x = event.offsetX//마우스로 클릭한 위치의 x좌표
            var y = event.offsetY//마우스로 클릭한 위치의 y좌표
            rgb.textContent = "R:" + to3digit(imageData.getRGBA(x,y,0))
                                + " G" + to3digit(imageData.getRGBA(x,y,1))
                                + " B" + to3digit(imageData.getRGBA(x,y,2));
        };
    };

    img.src = "./태국브라더.gif";
    function to3digit(n)
    {
        return ("000"+n).slice(-3);
    }


}