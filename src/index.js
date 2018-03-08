// Entry in webpack

import './styles/index.scss';
import * as Utils from "./library/exampleHelperClass"

export default class testClass {

  constructor() {
    console.log("class instance created");// eslint-disable-line
  }

  sayHello() {
    console.log("I am an ES6 new class");// eslint-disable-line
  }

  returnSomeSum(){
    console.log(Utils.sum(5,7));// eslint-disable-line
  }

}
