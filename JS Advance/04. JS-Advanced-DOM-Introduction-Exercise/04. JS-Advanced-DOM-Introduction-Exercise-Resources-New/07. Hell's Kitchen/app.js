function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputData = document.getElementById(`inputs`).children[1].value;
      let result = clearInput(inputData); 
      let resturants = {};
      let tempRest;
      for (const line of result) {
         if(line.includes(`-`)){
               let tempresult = line.split(` `);
               tempRest = tempresult[02];
               resturants.resturant = {resturant = tempresult[0]
               };
           }else {
               let [workers ,salary] = line.split(` `);
               resturants.tempRest = {workers = salary};
         }
      }
   }
}
function clearInput(input) {

   let regex = /([A-Za-z]*[- 1-90]*,?)/gm;

   let matches = input.match(regex).map((a) => a.trim());
   let result = [];
   for (const line of matches) {
       if(line && line != `,`){
           result.push(line);
       }
   }
   return result;
}