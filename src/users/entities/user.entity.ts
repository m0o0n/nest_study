
import { UserStack } from "src/user-stack/entities/user-stack.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    avatarURL: string

    @OneToMany(()=> UserStack, (stack)=> stack.user_id)
    user_stack: UserStack[]
}
