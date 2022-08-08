import { User } from "./models/user";

//здесь инициализируем пользователя
//сохраним его кошелек
//сгенерируем его nonce


//случайное число nounce
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}


// сюда поступит номер кошелька metamask и
export function initUser(walletId: string){

    const user: User = {
        nonce: getRandomInt(),
        publicAddress: walletId
    }
    return user
}