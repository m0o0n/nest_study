import { UserStack } from "src/user-stack/entities/user-stack.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stack {
    @PrimaryGeneratedColumn({name: 'stack_id'})
    id: number

    @Column()
    title: string
    
    @OneToMany(()=> UserStack, (stack)=> stack.stack_id)
    user_stack: UserStack[]
}
