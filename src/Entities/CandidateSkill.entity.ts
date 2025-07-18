import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Candidate } from './Cantidate.entity';
import { Skills } from './Skills.entitty';

@Entity()
export class CandidateSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  CandidateId?: number;

  @Column({nullable:true})
  SkillId?:number;
  
  @ManyToOne(() => Candidate, (candidate) => candidate.candidateSkill)
  @JoinColumn({ name: 'CandidateId' })
  candidate: Candidate;

  @ManyToOne(() => Skills, (skill) => skill.candidateSkill)
  @JoinColumn({ name: 'skillId' })
  skill: Skills;
}
