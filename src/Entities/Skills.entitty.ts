import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { OfferSkill } from './OfferSkills.entity';
import { CandidateSkill } from './CandidateSkill.entity';

@Entity()
export class Skills {
  @PrimaryGeneratedColumn()
  SkillId: number;

  @Column({ nullable: true })
  Name?: string;

  @Column({ nullable: true })
  Icon?: string;

  @OneToMany(
    () => CandidateSkill,
    (candidateSkill: CandidateSkill) => candidateSkill.skill,
  )
  // @Exclude()
  candidateSkill?: CandidateSkill[];

  @ManyToMany(() => OfferSkill, (offerSkill) => offerSkill.skill)
  // @Exclude()
  offerSkills?: OfferSkill[];
}
