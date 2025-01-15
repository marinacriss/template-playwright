import faker from "faker-br";
import getEnvString from "../helpers/get-env-string";

/**
 * Gera um email aleatorio utilizando como base o email configurado no .env, adicionandoo símbolo de + e alguns números.
 */

export default function validEmailGenerator() {
    let emailEnv = getEnvString('EMAIL');
    let emailBreak = emailEnv.split("@");
    let email = emailBreak[0] + "+" + faker.random.number() + '@' + emailBreak[1];
    return email;
}