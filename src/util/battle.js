/**
 * battle.js
 *
 * Este arquivo contém funções para simular batalhas entre Jedi e Sith
 * e calcular o resultado final.
 *
 * Funções:
 *
 * 1. simulateBattles(rounds, favor, results)
 *    - Simula um número definido de rodadas de batalha.
 *    - Cada rodada é decidida aleatoriamente com base em um viés de vitória
 *      que pode favorecer Jedi, Sith ou ser justo (50/50).
 *    - Os resultados de cada rodada são armazenados no array `results`.
 *
 * 2. tally(results)
 *    - Recebe o array de resultados de `simulateBattles`.
 *    - Conta o número de vitórias de cada lado (Jedi e Sith).
 *    - Determina o resultado final (outcome) considerando:
 *        - empate → "draw"
 *        - lado com mais vitórias → "Jedi" ou "Sith"
 *    - Retorna um objeto resumo com a contagem de vitórias e o resultado final.
 *
 * Exemplo de uso:
 *
 * const results = [];
 * simulateBattles(5, "jedi", results);
 * const summary = tally(results);
 * console.log(summary);
 * // { jedi: 3, sith: 2, outcome: "Jedi" }
 */

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
    results.push({ round: idx + 1, winner });
  }

  return results;
}

/**
 * Calcula o resumo das vitórias de Jedi e Sith a partir de um array de resultados.
 *
 * Para cada objeto em `results`:
 * - Verifica quem venceu a rodada.
 * - Incrementa o contador de vitórias correspondente (Jedi ou Sith).
 *
 * Depois de contar todas as vitórias:
 * - Se ambos tiverem o mesmo número de vitórias, define `outcome` como "draw".
 * - Caso contrário, define `outcome` como o lado que venceu mais rodadas.
 *
 * @param {Array<Object>} results - Array de objetos representando os resultados de cada rodada.
 *   Cada objeto deve ter a forma:
 *     { round: number, winner: "jedi" | "sith" }
 * @returns {Object} summary - Objeto resumido contendo:
 *   - {number} jedi: número de vitórias dos Jedi
 *   - {number} sith: número de vitórias dos Sith
 *   - {string} outcome: resultado final ("Jedi", "Sith" ou "draw")
 *
 * @example
 * const results = [
 *   { round: 1, winner: "jedi" },
 *   { round: 2, winner: "sith" },
 *   { round: 3, winner: "jedi" }
 * ];
 *
 * tally(results);
 * // Retorna:
 * // { jedi: 2, sith: 1, outcome: "Jedi" }
 */

export function tally(results = []) {
  const summary = results.reduce(
    (acumulador, result) => {
      if (result.winner === "jedi") acumulador.jedi++;
      else acumulador.sith++;
      return acumulador;
    },
    { jedi: 0, sith: 0 }
  );

  if (summary.jedi === summary.sith) summary.outcome = "draw";
  else summary.outcome = summary.jedi > summary.sith ? "Jedi" : "Sith";
  return summary;
}
