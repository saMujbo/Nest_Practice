import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OfferSkill } from './OfferSkills.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  OfferId?: number;

  @Column({ nullable: true })
  CompanyId?: number;

  @Column({ nullable: true })
  Job?: string;

  @Column({ nullable: true })
  Description?: string;

  @OneToMany(() => OfferSkill, (offerSkill) => offerSkill.offer)
  offerSkill?: OfferSkill[];
}
