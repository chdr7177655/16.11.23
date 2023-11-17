const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('project.db')

db.run(` CREATE TABLE COMPANY(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR(50),
    SALARY REAL
   );`, error => {
if (error)
console.log('error:' + JSON.stringify(error));
else
console.log('teble');

   });
//1
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (1, 'Paul', 32, 'California', 20000.00 );` , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
    
       });

   console.log(1);
//2
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (2, 'Allen', 25, 'Texas', 15000.00 );` , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
    
       });
//3
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );`
        , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
           
        });
//4
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );`
             , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
                  
         });   
//5
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (5, 'David', 27, 'Texas', 85000.00 );`
              , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
                         
          });  
  //6                           
    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (6, 'Kim', 22, 'South-Hall', 45000.00 ); ` 
             , error => {
    if (error)
    console.log('error:' + JSON.stringify(error));
    else
    console.log('teble');
                         
           });  
   
//    אפשרות שנייה
//    db.run(`INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//    VALUES (?, '?', ?, '?', ?.? );`,[1, 'Paul', 32, 'California', 20000.00]``, error => {
//     if (error)
//     console.log('error:' + JSON.stringify(error));
//     else
//     console.log('teble');
    
//        });

db.run(`DELETE FROM COMPANY WHERE id = 5; ` 
         , error => {
if (error)
console.log('error:' + JSON.stringify(error));
else
console.log('teble');
                     
       });
