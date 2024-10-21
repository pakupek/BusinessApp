import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule, ShowDateComponent, CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number = -1;
  originalInterest: string = '';  // Zmienna do przechowywania oryginalnej wartości przed edycją
  previousInterests: string[] = [];  // Tablica do przechowywania poprzednich zapisanych wartości

  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
    this.previousInterests = [...this.interests];  // Początkowa wartość historii interesów
  }

  selectInterest(which: number): void {
    this.selected = which;
    this.originalInterest = this.interests[which];  // Zapisz oryginalną wartość przed edycją
  }

  saveInterest(): void {
    // Zaktualizuj historię poprzednich interesów
    this.previousInterests[this.selected] = this.interests[this.selected];  
    this.selected = -1;  // Zakończ edycję
  }

  cancelEdit(): void {
    if (this.selected > -1) {
      // Przywróć wartość do poprzednio zatwierdzonej
      this.interests[this.selected] = this.previousInterests[this.selected];
      this.selected = -1;  // Zakończ edycję
    }
  }
}
