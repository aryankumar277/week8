import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber: any = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber: boolean = false;

  constructor() { }

  ngOnInit(): void { }

//function to clear screen
  clearFunc() {
    console.log("C");
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

//function to do calculation
  mainCalc(op1: any, op2: any) {
    switch (op1) {
      case '+': return this.firstOperand += op2;
      case '-': return this.firstOperand -= op2;
      case '*': return this.firstOperand *= op2;
      case '/': return this.firstOperand /= op2;
      case '!': return fact(this.firstOperand);
      case 'P': return prime(this.firstOperand);
      case '=': return op2;
    }
  }

//function to input number
  inputNum(n: string) {
    console.log(n);

    if(this.waitForSecondNumber) {
      this.currentNumber = n;
      this.waitForSecondNumber = false;
    }
    else {
      this.currentNumber == '0' ? this.currentNumber = n : this.currentNumber += n;
    }
  }

//function for decimal point
  numPoint(){
    if (!this.currentNumber.includes('.')) {
        this.currentNumber += '.';
        console.log(".");
    }
  }

//function to input operator
  inputOperator(op: string){
    console.log(op);

    if(this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    }
    else if(this.operator) {
      const result = this.mainCalc(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }
}

//function to calculate factorial of a number
function fact(n: any) {
  let result = 1;

  if (n<0) {
    return "Undefined";
  }
  if (n == 0 || n==1) {
    return result;
  }
  else {
    for (let i=1; i<=n; i++) {
      result *= i;
    }
    return result;
  }
}

//function to find if a number is prime or not
function prime(n: any) {
  if (n<0) {
    return "Undefined";
  }
  var count = 0;
  for (let i=2; i<=Math.floor(n/2); i++) {
    if (n%i == 0) {
      count = 1;
      break;
    }
  }
  if (count == 1) {
    return "Not Prime";
  }
  else {
    return "Prime";
  }
}
