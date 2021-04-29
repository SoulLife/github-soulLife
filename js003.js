window.onload = function()
{
    document.getElementById("button").onclick = function()
    {
        //수축기 혈압(최고혈압)을 구한다.
        var hp = parseFloat(document.getElementById("highpressure").value);
        var lp = parseFloat(document.getElementById("lowpressure").value);
        //판정결과를 내보낼 HTML 요소
        var judgement = document.getElementById("judgement");
        //고혈압 여부를 판정하여 HTML요소에 출력한다
        if (hp<120 && lp<80)
        {
            judgement.textContent = "당신의 혈압은 정상입니다.";
        }else if(hp<139&& lp < 89)
        {
            judgement.textContent = "당신의 혈압은 다소 높습니다."
        }else
        {
            judgement.textContent = "당신은 고혈압 입니다.";
        }

    }
}