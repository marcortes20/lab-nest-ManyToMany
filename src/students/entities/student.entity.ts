
import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, ManyToMany, JoinTable } from "typeorm";
@Entity("students")
export class Student {

  @Column({ primary: true, generated: true })
  id: number;

  @ManyToMany(
    () => Course, 
    course => course.students, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
      name: 'student_course',
      joinColumn: {
        name: 'student_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'course_id',
        referencedColumnName: 'id',
      },
    })
    courses?: Course[];
}
