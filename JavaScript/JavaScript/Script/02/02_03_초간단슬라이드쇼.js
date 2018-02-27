window.onload = function ()
{
    //슬라이드쇼에 사용할 이미지들
    var myPhotos = new Array("../Icon/K-001.jpg", "../Icon/K-002.jpg", "../Icon/K-003.jpg");
    var index = 0;

    //이전 링크 클릭
    document.getElementById("btnPrev").onclick = function ()
    {
        if (index == 0)
        {
            index = myPhotos.length;
        }
        document.getElementById("imgPlaceHolder").src = myPhotos[--index];
        return false;
    }

    //다음 링크 클릭
    document.getElementById("btnNext").onclick = function () {
        if (++index == myPhotos.length)
        {
            index = 0;
        }
        document.getElementById("imgPlaceHolder").src = myPhotos[index];
        return false;
    }
}