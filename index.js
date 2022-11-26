

window.addEventListener("DOMContentLoaded", init);

function init() {
    const ConsoleLog = errorBtns[0];
    const ConsoleError = errorBtns[1];
    const ConsoleCount = errorBtns[2];
    const ConsoleWarn = errorBtns[3];
    const ConsoleAssert = errorBtns[4];
    const ConsoleClear = errorBtns[5];
    const ConsoleDir = errorBtns[6];
    const ConsoleDirXML = errorBtns[7];
    const ConsoleGroupStart = errorBtns[8];
    const ConsoleGroupEnd = errorBtns[9];
    const ConsoleTable = errorBtns[10];
    const StartTimer = errorBtns[11];
    const EndTimer = errorBtns[12];
    const ConsoleTrace = errorBtns[13];
    const TriggeraGlobalError = errorBtns[14];
    ConsoleLog.addEventListener("click", console_log);

    function console_log() {
        console.log("Console Log Demo"); 
    }
}