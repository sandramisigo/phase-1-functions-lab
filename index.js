// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
  }

  function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTraveled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
  }

 

