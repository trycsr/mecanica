//Toda a base de dados armazenados na memória do projeto por meio de toda a implementação deste código.
import { randomUUID } from "crypto"


export class DatabaseMemory{
    #motors = new Map()

list(search){
    return Array.from(this.#motors.entries()).map((motorArray) => {
        const id = motorArray[0]

        const data = motorArray[1]

        return{
            id,
            ...data,
        }
        
    })
    .filter(motor => {
        if (search){
        return motor.potencia.includes(search)
        }
        return true
    })
}

    create(motor){
        const motorId = randomUUID()
        this.#motors.set(motorId, motor)
    }
    
    update(id, motor){
        this.#motors.set(id, motor)
    }

    delete(id, motor){
        this.#motors.delete(id, motor)
    }
}
