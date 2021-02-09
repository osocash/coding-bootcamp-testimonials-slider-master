var profiles=document.getElementsByClassName("profile");
var chev=document.getElementsByClassName("chev");
for(let i=0;i<chev.length;i++)
{
    chev[i].addEventListener("click",function (){
    console.log(profiles);
    profiles[0].classList.toggle("profile1");
    profiles[0].classList.toggle("profile2");
    profiles[1].classList.toggle("profile1");
    profiles[1].classList.toggle("profile2");
    
});
}
