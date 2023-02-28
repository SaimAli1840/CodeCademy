// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }


  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,

      mutate () { //function which mutates one selected base
        let generated = returnRandBase() //getting a random base from function aboce
        let randomNum = Math.floor(Math.random() * this.dna.length); //used to generate a random index for dna array
        if(this.dna[randomNum] !== generated){ //comparing if the random dna is the same as generated, if not, we change it
          this.dna[randomNum] = generated;
          return this.dna //return the changed dna
        }

      },

      compareDNA (pAequor) { //method to calculate % similarity between 2 given DNAS
        
        let current = pAequor //saving the passed pA as a var

        let counter = 0; //using this variable to store total similarities
        for (let i = 0; i < current.dna.length; i++){ //using loop to loop and check
          if(this.dna[i] === current.dna[i]){ //checking similarity between both
            counter++; //increase the counter if above is true
            
          }
          
        }
        
        let perc = (counter/current.dna.length)*100 //finding the percentage value
        return perc.toFixed(1);
        
      },

      willLikelySurvive () {
        let counter = 0;
        for (let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            counter++;
          }
          let perc = (counter/this.dna.length)*100
          return perc > 60 ? true : false;
        }
      }
      
    }
  }

  //creating instances
  let instances = []
  for(let i = 0; i < 30; i++){
    let sample = pAequorFactory(i, mockUpStrand())
    if (sample.willLikelySurvive() === true){
      instances.push(sample)
    }
    
  }

console.log(instances)




  