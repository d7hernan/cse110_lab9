
window.addEventListener("DOMContentLoaded", init);

let errors = 1; 

function track_error() {
    console.log("something went wrong...");
    console.log("errors so far: " + errors);
    ++errors; 
}

class NotAFunctionError extends Error {
    constructor(message) {
    super(message);
    this.name = "NotAFunctionError";
  }
}

function init() {

    let value = 1; 

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
    ConsoleError.addEventListener("click", console_error);
    ConsoleCount.addEventListener("click", console_count);
    ConsoleWarn.addEventListener("click", console_warn);
    ConsoleAssert.addEventListener("click", console_assert);
    ConsoleClear.addEventListener("click", console_clear);
    ConsoleDir.addEventListener("click", console_dir);
    ConsoleDirXML.addEventListener("click", console_dir_xml);
    ConsoleGroupStart.addEventListener("click", console_group_start);
    ConsoleGroupEnd.addEventListener("click", console_group_end);
    ConsoleTable.addEventListener("click", console_table);
    StartTimer.addEventListener("click", start_timer);
    EndTimer.addEventListener("click", end_timer);
    ConsoleTrace.addEventListener("click", console_trace);
    TriggeraGlobalError.addEventListener("click", trigger_a_global_error);

    function console_log() {
        console.log("Console Log Demo"); 
    }

    function console_error() {
        console.error("Console Error Demo");
        track_error();  
    }

    function console_count() {
        console.log("Console count demo: " + value); 
        ++value; 
    }

    function console_warn() {
        console.warn("Console Warning Demo");
    }

    function console_assert() {
        const num1 = 2;
        const num2 = 100/50; 
        const num3 = 1; 
        try {
            let msg = "\n" + num1 + ": this number is not equal to 2."
            console.assert(num1 == 2, msg); 

            msg = "\n" + num2 + ": this number is not equal to 2."
            console.assert(num2 == 2, msg);  

            msg = "\n" + num3 + ": this number is not equal to 2."
            console.assert(num3 == 2, msg); 
        }
        catch {
            error(); 
        }
    }

    function console_clear() {
       console.clear();
    }

    function console_dir() {
        console.dir(ConsoleDir); 
    }

    function console_dir_xml() {
        console.log(ConsoleDirXML); 
    }

    function console_group_start() {
        console.group("Group"); 
    }

    function console_group_end() {
        console.groupEnd("Group");  
    }

    function console_table() {
        console.table([
            { 
                Name:  "Daniel",
                Major: "Computer Science",
                Minor: "Music",
                FavoriteClass: "CSE 100"
            },
            {
                Name:  "Ben",
                Major: "Sociology",
                Minor: "Psychology",
                FavoriteClass: "PSYC 106"
            },
            {
                Name:  "Chloe",
                Major: "Economics",
                Minor: "Applied Mathematics",
                FavoriteClass: "ECON 120B"
            }
        ]);  
    }

    function start_timer() {
        console.time("Timer"); 
    }

    function end_timer() {
        console.timeEnd("Timer"); 
    }

    function console_trace() {
        function deep() {
            function deeper() {
                function deepest() {
                    console.trace();
                }
                deepest();
            } 
            deeper(); 
        }
        deep();
    }

    function trigger_a_global_error() {
        //console.log("Error incoming!"); 
        error(); 
    }
}

function error() {
    try {
        errorfunction();
    }
    
    catch {
        track_error();
        throw new NotAFunctionError("\nerrorfunction(): this function is not defined");  
    }
}