//Question:1

function remItem(){
    const ele=document.getElementById('rem').firstElementChild;
    console.log(ele);
    document.getElementById('rem').removeChild(ele);
}

//Question:2

function red()
{
    var r=document.getElementById("para");
    console.log(r);
    r.style.color='red';
}
function green()
{
    var g=document.getElementById("para");
    console.log(g);
    g.style.color='green';
}
function blue()
{
    var b=document.getElementById("para");
    console.log(b);
    b.style.color='blue';
}
function orange()
{
    var o=document.getElementById("para");
    console.log(o);
    o.style.color='orange';
}

//Question:3
function subClick()
{
    const name1=document.getElementById('fname1').value;
    console.log(name1);

    const name2=document.getElementById('lname1').value;
    console.log(name2);
}

//Question:4

    function img1()
    {   
        pic1.style.width='350px';
        pic1.style.height='200px';
        pic1.src='image100.jpg';
    }

    function img2()
    {
        pic2.style.width='350px';
        pic2.style.height='200px';
        pic2.src='image101.webp';
    }
    
    function img3()
    {
        pic3.style.width='350px';
        pic3.style.height='200px';
        pic3.src='image102.jpg';
    }

