function scuberGreetingForFeet(travelDistance){
  if (travelDistance <= 400) {
    return 'This one is on me!';
} else if (travelDistance > 400 && travelDistance < 2000) {
    return 'That will be twenty bucks.';
} else if (travelDistance > 2000 && travelDistance < 2500) {
    return 'I will gladly take your thirty bucks.';
} else if (travelDistance > 2500) {
    return 'No can do.';
}
}


function ternaryCheckCity(city) {
  if (city == 'NYC') {
    return 'Ok, sounds good.'
  } else if (city !== 'NYC') {
    return 'No go.';
  }
}

/*
function ternaryCheckCity(city) {
  city == 'NYC' ? 'Ok, sounds good.' : "No go.";
}*/


function switchOnCharmFromTip(tip) {
  switch(tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return 'Bye.';
    break;
  }
}