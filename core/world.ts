// Ядро опису об'єктів нашого "Roblox 2.0"
export interface GameObject {
    id: string;          // Унікальний номер об'єкта
    type: 'part' | 'mesh' | 'script'; 
    position: { x: number, y: number, z: number };
    rotation: { x: number, y: number, z: number };
    color: string;       // HEX-код кольору
    ownerId: string;     // Хто створив цей об'єкт
}

export class WorldState {
    private objects: Map<string, GameObject> = new Map();

    // Додати об'єкт у світ
    addObject(obj: GameObject) {
        this.objects.set(obj.id, obj);
        console.log(`Об'єкт ${obj.id} додано в позицію ${obj.position.x}`);
    }

    // Отримати всі об'єкти для відправки гравцю
    getAllObjects() {
        return Array.from(this.objects.values());
    }
}
