import { Module } from '@nestjs/common';
import { StudentCourseService } from './student-course-.service';
import { StudentCourseController } from './student-course-.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourseModule])],
  controllers: [StudentCourseController],
  providers: [StudentCourseService],
})
export class StudentCourseModule {}
