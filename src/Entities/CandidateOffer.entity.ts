import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Candidate } from './Cantidate.entity';

@Entity()
export class Candiateoffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CandidateId: number;

  @ManyToOne(() => Candidate, (candidate) => candidate.candidateOffers)
  @JoinColumn({ name: 'CandidateId' })
  //@Exclude()
  candidate: Candidate;
}
