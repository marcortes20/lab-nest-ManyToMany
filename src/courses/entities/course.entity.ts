import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity("courses")
export class Course {

  @Column({ primary: true, generated: true })
  id: number;

  @ManyToMany(
    () => Student,
    student => student.courses,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  students?: Student[];
  
}

