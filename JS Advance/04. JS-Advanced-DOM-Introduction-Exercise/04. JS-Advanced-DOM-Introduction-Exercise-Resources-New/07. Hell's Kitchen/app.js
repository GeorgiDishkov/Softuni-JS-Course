function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      document.querySelector(`#workers p`).textContent = '';
      let inputData = document.getElementById(`inputs`).children[1].value;
      let result = clearInput(inputData);
      let resturants = {};
      let tempRest;
      for (const line of result) {
         if (line.includes(`-`)) {
            let tempresult = line.split(` `);
            tempRest = tempresult[0];
            if (!(resturants.hasOwnProperty(tempRest))) {
               resturants[tempRest] = {};
            }
         } else {
            let [workers, salary] = line.split(` `);
            salary = salary.split(`,`);
            salary = Number(salary[0]);
            if (resturants[tempRest].hasOwnProperty(workers)) {
               resturants[tempRest][workers] = salary;
            } else {
               resturants[tempRest][workers] = salary;
            }
         }
      }  
      let workersResult = [];
      let averageSalary = 0;
      let bestWorker ;
      let winnerResturant = Object.keys(resturants);
      winnerResturant = winnerResturant.sort((a,b) => bestRsturant(a,b));
      winnerResturant = winnerResturant[0];
      let sortedWorkers = Object.entries(resturants[winnerResturant]);
      sortedWorkers = sortedWorkers.sort((a,b) => b[1]-a[1]);
      bestWorker = sortedWorkers[0][1];
      for (const line of sortedWorkers) {
         workersResult.push(`Name: ${line[0]} With Salary: ${line[1]} `);
         averageSalary += Number(line[1]);
      }
      document.querySelector(`#bestRestaurant p`).textContent = (`Name: ${winnerResturant} Average Salary: ${(averageSalary/sortedWorkers.length).toFixed(2)} Best Salary: ${bestWorker}`); 
      for (const line of workersResult) {
         document.querySelector(`#workers p`).textContent += line;
      }
      function bestRsturant (firstRest , secondRest ) {
          let firstSum = 0;
          let secondSum = 0;
          let firstLength = 0;
          let secondLength = 0;
          for (let [workers , value] of Object.entries(resturants[firstRest])) {
            value = Number(value);
            firstSum += value;
            firstLength ++;
          }for (let [workers , value] of Object.entries(resturants[secondRest])) {
            value = Number(value);
            secondSum += value;
            secondLength ++;
          }
          firstSum = firstSum/firstLength;
          secondSum = secondSum/secondLength;
         return secondSum - firstSum
      }
      function clearInput(input) {
      
         let regex = /([A-Za-z]*[- 1-90]*,?)/gm;
      
         let matches = input.match(regex).map((a) => a.trim());
         let result = [];
         for (const line of matches) {
            if (line && line != `,`) {
               result.push(line);
            }
         }
         return result;
      }
   }
}