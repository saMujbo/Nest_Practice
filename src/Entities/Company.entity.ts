import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Candiateoffer } from './CandidateOffer.entity';
import { CandidateSkill } from './CandidateSkill.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  CompanyId?: number;

  @Column({ nullable: true })
  Name?: string;

  @Column({ nullable: true })
  WebSite?: string;

  @Column({ nullable: true })
  Email?: string;

  @Column({ nullable: true })
  Password: string;

  @OneToMany(() => Candiateoffer, (candidateoffer) => candidateoffer.candidate)
  candidateoffer: Candiateoffer[];

  @OneToMany(() => CandidateSkill, (candidateSkill) => candidateSkill.candidate)
  candidateSkill: CandidateSkill[];
}
