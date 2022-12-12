let male = '0,0%'
let female = '0,0%'

function getGender(gender) {
    if (gender < 2) {
      male = '100%'
    } else if (gender >= 2 || gender < 4) {
      male = '87,5%'
      female = '12,5%'
    } else if (gender >= 4 || gender < 8) {
      male = '75%'
      female = '25%'
    } else if (gender >= 8 || gender < 12) {
      male = '50%'
      female = '50%'
    } else if (gender >= 12 || gender < 15) {
      male = '25%'
      female = '75%'
    } else {
      female = '100%'
    }
  
    return 'M: ' + male + 'F: ' + female
  }
  console.log(getGender(1))