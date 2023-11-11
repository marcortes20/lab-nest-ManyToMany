
import { Course } from "src/courses/entities/course.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToMany,PrimaryColumn,ManyToOne, JoinColumn} from "typeorm";
@Entity("StudentCourse")
class StudentCourse { 

  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(
    () => Student,
    student => student.courses,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: Student[];

  @ManyToOne(
    () => Course,
    course => course.students,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  courses: Course[];
}
