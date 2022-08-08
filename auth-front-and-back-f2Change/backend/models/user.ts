//описание модели user
//вообще можно создать отдельную структуру для nonce - secRetGen
// можно создать отдельную структуру для кошелька wallet
export interface User {
    id?: number;
    nonce: number; //обязательное поле (генерируемый шифроключ)
    publicAddress: string; //обязательное поле
    username?: string; // может быть пустым
}
