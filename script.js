'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/*

const displaymovements = fucntion(movements)
{
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawl';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html)

  });




}
displaymovements(account1.movements);
*/

const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
 const euToUs=1.1;
const result= movements.map(function(mov){
   return mov * euToUs;
 });
 console.log(movements);
 console.log(result)
const createUsername=function(account){
 const username=user.toLowerCase().split(' ').map(name=>
  name[0])
  .join('');
  
 }
createUsername(accounts);
  */
 /*
 const deposits=movements.filter(function(mov){
   return mov>0;

 });
 console.log(deposits);

 const depositvalue=[];
 for(const mov of movements){
   if(mov>0)
   depositvalue.push(mov);
 }
 console.log(depositvalue);

 const withdrawls=[];
 for(const withd of movements){
   if(withd<0){
     withdrawls.push(withd)
   }
 }
 console.log(withdrawls)

 const filter=movements.filter(value=>
    value<0
 );
 console.log(filter)
 */
/*
function max(func){
  return function(a,b){
    return func(a,b)
  }
}*/
/*
const euroToUsd=1.1;
const totalDepositUsd=movements.filter(mov=> mov>0).map(mov=> mov*euroToUsd).reduce((acc,mov)=>acc+mov,0)
console.log(totalDepositUsd);

const calcDisplaySummary=function(movements){
  const incomes=movements.filter(mov=> mov>0).reduce((acc,mov)=> acc+mov,0);
  labelSumIn.textContent=`${incomes}EU`;

  const outcome=movements.filter(mov=> mov<0).reduce((acc,mov)=> acc+mov,0);
  labelSumOut.textContent=`${outcome}EU`;
  
  const interest=movements.filter(mov=> mov>0).map(deposit=>deposit*1.2/100).filter((int,i,arr)=>{console.log(arr);
  return int>=1;
  }).reduce((acc,int)=> acc+int,0);
  labelSumInterest.textContent=`${interest}EU`
}

calcDisplaySummary(account1.movements)
console.log(accounts)

const account= accounts.find(acc=>acc.owner==='Jessica Davis')
console.log(account)

//EVENT LISTENER
let currentAccount;
btnLogin.addEventListener('click',function(e){

  e.preventDefault();
  console.log('login')
  currentAccount=accounts.find(acc=>accounts.username===inputLoginUsername.value);
  console.log(currentAccount)

})

*/
const dogs=[
  {weight:22, curFood:250, owners: ['Alice','Bob']},
  {weight:8, curFood:200, owners: ['Matilda']},
  {weight:13, curFood:275, owners: ['Sarah','John']},
  {weight:32, curFood:340, owners: [' Michael']},
];

dogs.forEach(dog=>dog.recFood=Math.trunc(dog.weight**0.75*28));
console.log(dogs)

const dogSarah= dogs.find(dog=>dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(`the sarah dog is eating ${dogSarah.curFood>dogSarah.recFood?'much':'little'}`)

const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recFood).map(dog=>dog.owners).flat();
console.log(ownersEatTooMuch)

const ownersEatTooLittle=dogs.filter(dog=>dog.curFood<dog.recFood).map(dog=>dog.owners).flat();
console.log(ownersEatTooLittle)

console.log(dogs.some(dog=>dog.curFood===dog.recFood))