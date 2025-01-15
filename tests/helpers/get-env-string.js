import 'dotenv/config';

/**
 * Recupera um env string.
 * @param {string} name env name.
 * @returns {String}
 */
export default function getEnvString (name) {
    const value = process.env[ name ];
    return value;
}