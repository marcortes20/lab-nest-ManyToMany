import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { StudentCourseModule } from './student-course-/student-course-.module';

@Module({
  imports: [
    StudentsModule,
    CoursesModule,
    StudentCourseModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "db_lab",

      autoLoadEntities: true,
      synchronize: true,
      //logging: true, // show sql in terminal

    }),
    StudentCourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
