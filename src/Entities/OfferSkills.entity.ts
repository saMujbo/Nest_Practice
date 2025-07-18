import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Offer } from './Offer.entity';
import { Skills } from './Skills.entitty';

@Entity()
export class OfferSkill {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ nullable: true })
  OfferId: number;

  @ManyToOne(() => Offer, (offer) => offer.offerSkill)
  @JoinColumn({ name: 'Offerid' })
  offer?: Offer;

  @Column({ nullable: true })
  SkillId: number;

  @ManyToOne(() => Skills, (skill) => skill.offerSkills)
  @JoinColumn({ name: 'skillId' })
  skill?: Skills;
}
