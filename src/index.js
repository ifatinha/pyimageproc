import "./css/main.css";
import dayjs from "dayjs";
import { simulateRounds, tally } from "./util/battle.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="header">
    <div class="brand">
      <div class="logo">GS</div>
      <div>
        <div class="title">Galaxy Starter</div>
        <div class="subtitle">Simulação minimalista — Jedi vs Sith</div>
      </div>
    </div>
    <div class="small">Hora local: <span id="now"></span></div>
  </div>

  <div class="card">
    <div class="controls">
      <select id="favor" class="select">
        <option value="">Sem favorecimento</option>
        <option value="jedi">Favorecer Jedi</option>
        <option value="sith">Favorecer Sith</option>
      </select>
      <select id="rounds" class="select">
        <option value="1">1 round</option>
        <option value="3" selected>3 rounds</option>
        <option value="5">5 rounds</option>
      </select>
      <button id="run" class="btn">Iniciar simulação</button>
      <button id="save" class="btn">Salvar resultado</button>
      <button id="clear" class="btn">Limpar log</button>
    </div>
  </div>

  <div id="output" class="card">
    <div class="result">
      <div>
        <div class="status">Nenhuma simulação executada</div>
        <div class="small" id="summary"></div>
      </div>
      <div class="small" id="log-count">Logs: 0</div>
    </div>
    <pre id="details" style="white-space:pre-wrap;margin-top:12px;color:var(--muted)"></pre>
  </div>

  <div class="footer">
    <div>galaxy-starter • exemplo</div>
    <div class="small">Built with Webpack • Babel</div>
  </div>
`;

/**
 * Atualiza o conteúdo de um elemento HTML com o horário e data atuais.
 *
 * A função:
 * - Usa a biblioteca dayjs para obter a data e hora atuais.
 * - Formata a data no padrão "DD/MM/YYYY HH:mm:ss".
 * - Seleciona o elemento HTML com id "now".
 * - Atualiza o texto do elemento com a data e hora formatadas.
 *
 * Dependências:
 * - dayjs (https://day.js.org/)
 *
 * @example
 * // Supondo que exista no HTML:
 * // <span id="now"></span>
 * updateTime();
 * // O conteúdo do <span> será algo como "27/10/2025 19:45:12"
 */
function updateTime() {
  const now = dayjs().format("DD/MM/YYYY HH:mm:ss");
  document.querySelector("#now").textContent = now;
}

updateTime();
setInterval(updateTime, 1000);

// Elements
const runBtn = document.querySelector("#run");
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");
const favorEl = document.querySelector("#favor");
const roundsEl = document.querySelector("#rounds");
const summaryEl = document.querySelector("#summary");
const statusEl = document.querySelector(".status");
const detailsEl = document.querySelector("#details");
const logCountEl = document.querySelector("#log-count");

// Local storage key
const STORAGE_KEY = "galaxy-starter-logs";

/**
 * Recupera os logs armazenados no localStorage.
 *
 * A função:
 * - Tenta obter o item do localStorage usando a chave `STORAGE_KEY`.
 * - Se existir algum dado, converte o JSON armazenado em um array.
 * - Caso não haja dados, retorna um array vazio.
 * - Se ocorrer algum erro durante o parse do JSON, também retorna um array vazio.
 *
 * Dependências:
 * - `STORAGE_KEY`: constante que define a chave usada no localStorage.
 *
 * @returns {Array} Array contendo os logs armazenados, ou vazio se não houver registros.
 *
 * @example
 * // Supondo que localStorage contenha:
 * // localStorage.setItem(STORAGE_KEY, JSON.stringify([{ action: "login", time: "10:00" }]));
 * const logs = getLogs();
 * console.log(logs);
 * // [{ action: "login", time: "10:00" }]
 */
function getLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Armazena os logs no localStorage e atualiza a contagem de logs na interface.
 *
 * A função:
 * - Converte o array `logs` em uma string JSON.
 * - Salva essa string no localStorage usando a chave `STORAGE_KEY`.
 * - Atualiza o elemento da interface `logCountEl` com o número atual de logs.
 *
 * Dependências:
 * - `STORAGE_KEY`: constante que define a chave usada no localStorage.
 * - `logCountEl`: elemento HTML que exibe a contagem de logs.
 *
 * @param {Array} logs - Array contendo os logs que devem ser armazenados.
 *
 * @example
 * const logs = [{ action: "login", time: "10:00" }];
 * setLogs(logs);
 * // localStorage agora contém os logs e logCountEl mostrará "Logs: 1"
 */

function setLogs(logs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  logCountEl.textContent = `Logs: ${logs.length}`;
}

setLogs(getLogs());

// run simulation

runBtn.addEventListener("click", () => {
  const favor = favorEl.value || null;
  const rounds = Number(roundsEl.value || 3);
  const results = simulateRounds(rounds, favor);
  alert(results);
  const summary = tally(results);

  statusEl.textContent = `Última simulação: vencedor — ${
    summary.outcome === "draw" ? "Empate" : summary.outcome.toUpperCase()
  }`;

  summaryEl.textContent = `Jedi ${summary.jedi} X Sith ${summary.sith}`;
  detailsEl.textContent = results
    .map((r) => `Round ${r.round}: ${r.winner}`)
    .join("\n");
});

// Save result
saveBtn.addEventListener("click", () => {
  const details = detailsEl.textContent || "Nenhum resultado";
  const when = dayjs().format("DD/MM/YYYY HH:mm:ss");
  alert(when);
  const logs = getLogs();
  logs.push({ when, details });
  setLogs(logs);
  alert("Resultado salvo no localStorage");
});

// clear logs
clearBtn.addEventListener("click", () => {
  setLogs([]);
  alert("Logs limpos.");
});
