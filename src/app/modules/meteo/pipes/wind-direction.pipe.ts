import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(value: number): string {

    let retour : string = '';
    
    switch (true) {
      case value >= 330 || value <= 30 :
        retour = "N"
        break;
    
      case value > 30 && value < 60 :
        retour = "NE"
        break;

      case value >= 60 && value <= 120 :
        retour = "E"
        break; 
      
      case value > 120 && value < 150 :
        retour = "SE"
        break; 
      
      case value >= 150 && value <= 210 :
        retour = "S"
        break; 
      
      case value > 210 && value < 240 :
        retour = "SW"
        break; 
      
      case value >= 240 && value <= 300 :
          retour = "W"
          break;
      
      case value > 300 && value < 330 :
        retour = "NW"
        break; 

      default:
        break;
    }
    
    return retour;
  }

}
