class mobile{
      constructor(public brand:string,public model:string,public year:number,public price:number,public isnew:boolean){}
      isItNew(){
            if(this.isnew==true){
                  return "New";
            }else return "Used";
      }
      format(){
            return `This Phone Is Made By ${this.brand} And Is Called ${this.model}, It Was Made In ${this.year}. The Condition Is ${this.isItNew()} And The Price Is ${this.price} $`;
      }
}
if(localStorage.length==0){
      var text:string='';
      var l:number=0;
      var arr:any[]= [];
      var formater: string[]=[];
}else{
      var text:string=localStorage.getItem('text')!;
      var l:number=parseInt(localStorage.getItem('Mobiles')!);
      var arr:any[]=JSON.parse(localStorage.getItem('arr')!);
      var formater:string[]=JSON.parse(localStorage.getItem('formater')!);
}
const form=document.querySelector("#mobile") as HTMLFormElement;
const brand =document.querySelector("#brands") as HTMLSelectElement;
const model =document.querySelector("#model") as HTMLInputElement;
const year =document.querySelector("#year") as HTMLInputElement;
const price =document.querySelector("#price") as HTMLInputElement;
const condition =document.querySelector("#condition") as HTMLInputElement;

document.getElementById('head')!.innerHTML="Amount of Mobile Data : "+l;
const histories=document.querySelector('#history') as HTMLParagraphElement;
histories!.innerHTML="<b>"+text+"</b>";
form.addEventListener('submit',(e)=>{
      e.preventDefault();
      arr[l]=new mobile(brand.value,model.value,year.valueAsNumber,price.valueAsNumber,!condition.checked);
      formater[l]=arr[l].format();
      text+="<p> * "+formater[l]+"</p>";
      histories!.innerHTML="<b>"+text+"</b>";
      model.value='';
      year.valueAsNumber=2022;
      price.valueAsNumber=1000;
      brand.value='Samsung';
      l++;
      document.getElementById('head')!.innerHTML="Amount of Mobile Data : "+l;
      localStorage.setItem('arr',`${JSON.stringify(arr)}`);
      localStorage.setItem("formater",`${JSON.stringify(formater)}`);
      localStorage.setItem("Mobiles",`${l}`,);
      localStorage.setItem("text",`${text}`);
});
function whenclicked(){
      window.localStorage.clear();
      document.getElementById('history')!.innerHTML='';
      text='';
      l=0; 
      document.getElementById('head')!.innerHTML='Amount of Mobile Data : '+l;
}








