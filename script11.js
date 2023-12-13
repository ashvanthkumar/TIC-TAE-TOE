let count=0;
function check(curr_id){
    if(count%2==0)
    {
        //console.log(count);
        let img=document.getElementById(curr_id);
        img.style.background="url(images/x.jpg)";
        img.style.width='150px';
        img.style.height='150px';
        img.innerText='x';
    }
    else 
    {
        let img=document.getElementById(curr_id);
        img.style.background="url(images/o.jpg)";
        img.style.width='150px';
        img.style.height='150px';
        img.innerText='o';
    }
    count++;
    let a1=document.getElementById("1").textContent;
    let a2=document.getElementById("2").textContent;
    let a3=document.getElementById("3").textContent;
    let a4=document.getElementById("4").textContent;
    let a5=document.getElementById("5").textContent;
    let a6=document.getElementById("6").textContent;
    let a7=document.getElementById("7").textContent;
    let a8=document.getElementById("8").textContent;
    let a9=document.getElementById("9").textContent;
    
    if(a1=='x' && a2=='x' && a3=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a4=='x' && a5=='x' && a6=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else  if(a7=='x' && a8=='x' && a9=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a1=='x' && a5=='x' && a9=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a3=='x' && a5=='x' && a7=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a1=='x' && a4=='x' && a7=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a3=='x' && a6=='x' && a9=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a2=='x' && a5=='x' && a8=='x' )
    {
        alert("X Won !");
        xwin();
    }
    else if(a1=='o' && a2=='o' && a3=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a4=='o' && a5=='o' && a6=='o' )
    {
        alert("O Won !");
        owin();
    }
    else  if(a7=='o' && a8=='o' && a9=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a1=='o' && a5=='o' && a9=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a3=='o' && a5=='o' && a7=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a1=='o' && a4=='o' && a7=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a3=='o' && a6=='o' && a9=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(a2=='o' && a5=='o' && a8=='o' )
    {
        alert("O Won !");
        owin();
    }
    else if(count==9)
    {
        alert("Match Tied !");
    }
}

function xwin()
{
    document.getElementById("name").innerHTML="";
    let img1=document.createElement('img');
    img1.src="images/xwon.jpg";
    img1.style.width='900px';
    document.getElementById("name").appendChild(img1);
}

function owin()
{
    document.getElementById("name").innerHTML="";
    let img1=document.createElement('img');
    img1.src="images/owon.jpg";
    img1.style.width='900px';
    document.getElementById("name").appendChild(img1);
}