              //                                  Condition 
              //                                if statement

              /*if (true){
                  console.log("IF STATEMENT EXUCUTED");
              } else{
                  console.log("Else STATEMENT EXECUTED")
              }

              console.log("IF STATEMENT EXUCUTED");*/

              /*var age = prompt();

              if (age >= 50){
                  console.log("old!");
              }
              else if (age >= 30 && age <50){
                  console.log("under 50 but above or equal 30!");
              }
              // 30 <= age <50
              else if (age < 30 && age >= 18){
                  console.log("under 30 but above or equal 18!");
              }
              else if (age < 18 && age > 0){
                  console.log("Under 18!");
              }
              else {
                  console.log("Invalid Input");
              }
              */



              //                                                NESTED STATEMENT
              //                                               find the largest number


              /*
                 var n1 = prompt("First number: ");
                 var n2 = prompt("Second number: ");
                 var n3 = prompt("Third number: ");

                 n1 = parseInt(n1);
                 n2 = parseInt(n2);
                 n3 = parseInt(n3);

                  if  (n1 >= n2){
                      if (n1 >= n3){
                          console.log(n1 + "is the largest!");
                      }
                      else {
                         console.log(n3 + "is the largest!");
                    }
                  }   else {
                        if (n2 >= n3){
                             console.log(n2 + "is the largest!");
                         }
                         else {
                             console.log(n3 + "is the largest!");
                         }
                      }
                  
                 */

              //(n1 >= n2 && n1>= n3){
              //     console.log(n1 + "is the largest number");
              // }
              // else if (n2 >=n1 && n2> n3){
              //     console.log(n2 +"is the largest number!");
              // }
              // else {
              //     console.log(n3 +"is the largest number!");
              // }


              ///////////////                            Switch


              /*
              console.log("select an option:\na option 1 \nb. option 2\nc. option 3");

              choice = prompt();

              var text;
              switch(choice){
                  case "a" :         //if ("choice==a")
                      text = "option 1 selected";
                      break;
                  
                  case "b" :         
                      text = "option 2 selected";
                      break;
                      
                  case "c" :         
                      text = "option 3 selected";
                      break;
                      default:
                          text = "no option selected"; 
                  }
              console.log(text);
              */


              //                                       Exercise and Solution


              /*
              var number = prompt("What is your number");

                  number = parseInt(number);

                  var grade;

              if (number <= 100 && number >=80 ){
                  grade = "A+";
              } else if (number < 80 & number >=70){
                  grade = "A";
              } else if (number < 70 & number >=60){
                  grade = "A-";
              }else if (number < 60 & number >=50){
                  grade = "B";
              }else if (number < 50 & number >=40){
                  grade = "c";
              }else if (number < 40 & number >=33){
                  grade = "D";
              }
              else if (number < 33 & number >=0){
                  grade = "F";
              }
              else{
                  grade = "Invalid Input";
              }
                  
              console.log("Tour Grade: " + grade);
              */

              /*
              if (choice == "a"){
                  text = "you have selected option 1";
              } 
              else if (choice == "b"){
                  text = "you have selected option 2";       
              }
              else if (choice == "c"){
                  text = "you have selected option 3";       
              }
              else {
                  text = "no selected option ";
              }

              console.log(text);
              */

              //                                          Select an option
              //                                            1 add 
              //                                            2 subtarct 
              //                                            3 mulitply
              //                                            4 divide

              /*
            
               console.log("Select an option: \n1. ADD \n2. Subtract \n3. mulitply \n4. Divide");

               var num1 = prompt("Enter First Number: ");
               var num2 = prompt("Enter Second Number: ");
               var option = prompt("Choose an Operation: ");

               var result = null;

               num1 = parseInt(num1);
               num2 = parseInt(num2);
               option = parseInt(option);

               var num1Con = isNaN(num1);
               var num2Con = isNaN(num2);
               var optionCon = isNaN(option);

               // console.log(num1Con);

               if (num1Con || num2Con || optionCon) {
                   console.log("Invalid Input!");
               } else {
                   switch (option) {
                       case 1:
                           result = num1 + num2;
                           break;
                       case 2:
                           result = num1 - num2;
                           break;
                       case 3:
                           result = num1 * num2;
                           break;
                       case 4:
                           result = num1 / num2;
                           break;
                     default:
                         break;
                   }
                   if (result == null){
                       console.log("NO Result!");
                   }
                   else{
                       console.log("Result : " + result);
                   }
               }
                
               */


              //                                               LOOPS
              //                                               While loops 



              /*
                          while (true) {
                              console.log("Hello World!");
                          }
              */
              /*           while (false) {
                             console.log("Hello World!");
                         }
                */

              /*    
                var i = 1;
                
                          while (i <= 5) {
                            console.log("value of i : " + i);
                            i ++;
                        }
                        console.log("out of the loop");
             */


              /*     while (i <= 5)   var i = -55;                
                     do  {
                        console.log("value of i : " + i);
                        i ++;
                    } while (i <= 5);

                    console.log("out of the loop");
                    */


              //                       More On While LOOP
              //                         PRINT 1 TO 10          
                    //                   Sum of 1 to 10
              
 /*            
              var i = 1;
              var sum = 0;
              var product = 1;

              while (i <= 10) {
                
                // if (i === 4){
                //     console.log("Value if i is " + i);
                // }
                //console.log(i);
                
                sum = sum + i;      
                                    // sum = 0 + 1; sum -> 1
                                    // sum = 1 + 2; sum -> 3
                                    // sum = 3 + 3; sum -> 6
                                    // sum = 6 + 1; sum -> 1
                                    // sum = 0 + 1; sum -> 1
                
                                    // 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17
                product = product * i;                
                i++;
              } 

             // console.log("out of the loop");
             console.log("Result: " + sum);
             console.log("Product: " + product);

*/
