import { Stack } from 'src/stack/entities/stack.entity';
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserStack {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.user_stack)
    @JoinColumn({name: 'user_id'})
    user_id: User

    @ManyToOne(()=> Stack, (stack)=> stack.user_stack)
    @JoinColumn({name: 'stack_id'})
    stack_id: Stack
}
