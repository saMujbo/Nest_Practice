import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Candiateoffer } from './CandidateOffer.entity';
import { CandidateSkill } from './CandidateSkill.entity';

// import { Exclude } from 'class-transformer';
@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  CandidateId: number;

  @Column({ nullable: true })
  Name?: string;

  @Column({ nullable: true })
  Surname1?: string;

  @Column({ nullable: true })
  Surname2?: string;

  @Column({ nullable: true })
  Email?: string;

  @Column({ nullable: true })
  //@Exclude()
  Password?: string;

  @OneToMany(
    () => Candiateoffer,
    (candidateOffers) => candidateOffers.candidate,
  )
  candidateOffers?: Candiateoffer[];
  @OneToMany(() => CandidateSkill, (candidateSkill) => candidateSkill.candidate)
  candidateSkill?: CandidateSkill[];
}
