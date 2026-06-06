function sum()
{
    let c=5;
    let a=0;

    let c=parseInt(document.getElementById("tot").innerHTML.split(": ")[1]);
    c--;
    document.getElementById("tot").innerHTML="Total items: " + c;

    const item=document.getElementById("itms");
    a++;
    item.innerHTML="Added items: " + a;

    const list=document.getElementById("itml");
    list.innerHTML+='<div> name  price</div>';

   
    

}