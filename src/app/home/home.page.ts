import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular';

interface student {
  id: number;
  name: string;
  gender: string;
  course: string;
  year: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent
  ]
})
export class HomePage {

  students: student[] = [
    { id: 1, name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 2, name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 3, name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 4, name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 5, name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 6, name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 7, name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 8, name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3 }
  ];

  showStudents: boolean = true;

  get totalStudents(): number {
    return this.students.length;
  }

  get maleStudents(): number {
    return this.students.filter(
      student => student.gender === 'Male'
    ).length;
  }

  get femaleStudents(): number {
    return this.students.filter(
      student => student.gender === 'Female'
    ).length;
  }

  toggleStudents(): void {
    this.showStudents = !this.showStudents;
  }
}
