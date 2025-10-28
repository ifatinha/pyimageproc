/**
 * Simula batalhas entre Jedi e Sith em múltiplas rodadas.
 *
 * Para cada rodada:
 * - Calcula a chance de vitória (bias) com base no parâmetro `favor`.
 *   - favor === "jedi" → 60% de chance de vitória para Jedi
 *   - favor === "sith" → 40% de chance de vitória para Jedi (ou 60% para Sith)
 *   - qualquer outro valor → 50% de chance para cada
 * - Gera um número aleatório (Math.random()) entre 0 e 1.
 * - Compara o número com o bias para determinar o vencedor.
 * - Adiciona o resultado ao array `results`.
 *
 * @param {number} rounds - Número de rodadas a serem simuladas.
 * @param {string} favor - Lado favorecido ("jedi", "sith" ou qualquer outro para chance justa).
 * @param {Array} results - Array onde os resultados das rodadas serão armazenados.
 *
 * @example
 * const results = [];
 * simulateBattles(5, "jedi", results);
 * console.log(results);
 * // [
 * //   { round: 1, winner: "jedi" },
 * //   { round: 2, winner: "sith" },
 * //   ...
 * // ]
 */
export function simulateRounds(rounds = 3, favor = null) {
  let results = [];

  for (let idx = 0; idx < rounds; idx++) {
    const bias = favor === "jedi" ? 0.6 : favor === "sith" ? 0.4 : 0.5;
    const roll = Math.random();
    const winner = roll < bias ? "jedi" : "sith";
    results.push({ round: i + 1, winner });
  }
}

