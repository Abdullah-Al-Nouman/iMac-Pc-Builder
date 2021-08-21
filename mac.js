

// ------------------
// updating value
// ------------------

function ValueUpdating(id , value) {
  var costEliment = document.getElementById(id)
  costEliment.innerText = value;
 
}



//   --------------------------------
//   calculating total price function
//   --------------------------------
 function PriceTotal () {

  var PriceElement = document.getElementById('best-price')
  var Price = parseFloat(PriceElement.innerText);

  var memoryPrice = document.getElementById('memory-cost')
  var MemoryPrice = parseFloat(memoryPrice.innerText);
   
  var storageCostElmnt = document.getElementById('storage-cost')
  var StorageCost = parseFloat(storageCostElmnt.innerText);
   
  var ElemntOfdeliveryCost = document.getElementById('delevary-cost')
  var DeliveryCost = parseFloat(ElemntOfdeliveryCost.innerText);

 var TotalPrice = document.getElementById('extra-total-cost');
 
 TotalPrice.innerText = Price + MemoryPrice + StorageCost +  DeliveryCost ; 

 var intotalEliment = document.getElementById('intotal-price');
 intotalEliment.innerText = TotalPrice.innerText;

 }



//   ------------------------------------------
//   Adding Promo code and steve kakus discount
//   ------------------------------------------



const TotalDiscountedPrice = document.getElementById('extra-total-cost');
const discountPrice = document.getElementById('intotal-price');
const pomoInput = document.getElementById('promo-code-input');
const applyBtn = document.getElementById('Apply-Button');

applyBtn.addEventListener('click', function(){
  if(pomoInput.value == 'stevekaku'){
    var DiscountRate = parseFloat(TotalDiscountedPrice.innerText) * (20/100)
    discountPrice.innerText = parseFloat(TotalDiscountedPrice.innerText) - DiscountRate;
    pomoInput.value = '';
  }
})



// --------------------------------
// Memory part and function calling
// --------------------------------
document.getElementById('memory-8GB').addEventListener('click', function()
{
  ValueUpdating('memory-cost', 0)
  PriceTotal ()
})
document.getElementById('memory-16GB').addEventListener('click', function()
{
  ValueUpdating('memory-cost', 180)
  PriceTotal ()
})

//   -----------------
//   SSD Storage part
//   -----------------
document.getElementById('SSD-256GB').addEventListener('click', function()
{
  ValueUpdating('storage-cost', 0)
  PriceTotal ()
})
document.getElementById('SSD-512GB').addEventListener('click', function()
{
  ValueUpdating('storage-cost', 100)
  PriceTotal ()
})
document.getElementById('SSD-1TB').addEventListener('click', function()
{
  ValueUpdating('storage-cost', 180)
  PriceTotal ()
})


//   ----------------
//   Delivery Costing
//   ----------------


document.getElementById('free-delivery').addEventListener('click', function()
{
  ValueUpdating('delevary-cost', 0)
  PriceTotal ()
})
document.getElementById('delivery-charge').addEventListener('click', function()
{
  ValueUpdating('delevary-cost', 20)
  PriceTotal ()
})