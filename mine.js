// Run Miners or Build Config
function alloyrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/alloy.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/alloy.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/alloy.html","",'width=662,height=675')
        }
    });
}
  
function arqrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/arq.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/arq.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/arq.html","",'width=662,height=675')
        }
    });
}

function bitcoalrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/bitcoal.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/bitcoal.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/bitcoal.html","",'width=662,height=675')
        }
    });
}

function btcnrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/btcn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/btcn.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/btcn.html","",'width=662,height=675')
        }
    });
}

function bittuberun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/bittube.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/bittube.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/bittube.html","",'width=662,height=675')
        }
    });
}

function xatrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xat.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xat.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xat.html","",'width=662,height=675')
        }
    });
}

function ccxrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ccx.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/ccx.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ccx.html","",'width=662,height=675')
        }
    });
}

function creprun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/crep.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/crep.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/crep.html","",'width=662,height=675')
        }
    });
}

function derorun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/dero.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/dero.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/dero.html","",'width=662,height=675')
        }
    });
}

function dcyrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/dcy.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/dcy.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/dcy.html","",'width=662,height=675')
        }
    });
}

function etnrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/etn.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etn.html","",'width=662,height=675')
        }
    });
}

function etnxrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etnx.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/etnx.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etnx.html","",'width=662,height=675')
        }
    });
}

function elyarun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/elya.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/elya.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/elya.html","",'width=662,height=675')
        }
    });
}

function ethorun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etho.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/etho.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etho.html","",'width=662,height=675')
        }
    });
}

function esnrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/esn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/esn.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/esn.html","",'width=662,height=675')
        }
    });
}

function egemrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/egem.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/egem.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/egem.html","",'width=662,height=675')
        }
    });
}

function festrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/fest.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/fest.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/fest.html","",'width=662,height=675')
        }
    });
}

function freelabitrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/freelabit.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/freelabit.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/freelabit.html","",'width=662,height=675')
        }
    });
}

function grftrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/grft.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/grft.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/grft.html","",'width=662,height=675')
        }
    });
}

function xhvrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xhv.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xhv.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xhv.html","",'width=662,height=675')
        }
    });
}

function itnsrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/itns.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/itns.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/itns.html","",'width=662,height=675')
        }
    });
}

function irdrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ird.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/ird.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ird.html","",'width=662,height=675')
        }
    });
}

function krbrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/krb.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/krb.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/krb.html","",'width=662,height=675')
        }
    });
}

function linesrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/lines.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/lines.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/lines.html","",'width=662,height=675')
        }
    });
}

function msrrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/msr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/msr.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/msr.html","",'width=662,height=675')
        }
    });
}

function xmrrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xmr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xmr.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xmr.html","",'width=662,height=675')
        }
    });
}

function mztrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/mzt.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/mzt.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/mzt.html","",'width=662,height=675')
        }
    });
}

function nbrrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/nbr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/nbr.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/nbr.html","",'width=662,height=675')
        }
    });
}

function ombrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/omb.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/omb.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/omb.html","",'width=662,height=675')
        }
    });
}

function pirlrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/pirl.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/pirl.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/pirl.html","",'width=662,height=675')
        }
    });
}

function plerun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ple.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/ple.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ple.html","",'width=662,height=675')
        }
    });
}

function plurarun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/plura.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/plura.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/plura.html","",'width=662,height=675')
        }
    });
}

function rvnrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/rvn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/rvn.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/rvn.html","",'width=662,height=675')
        }
    });
}

function solacerun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/solace.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/solace.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/solace.html","",'width=662,height=675')
        }
    });
}

function xtlrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xtl.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xtl.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xtl.html","",'width=662,height=675')
        }
    });
}

function suprun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/sup.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/sup.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/sup.html","",'width=662,height=675')
        }
    });
}

function trtlrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/trtl.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/trtl.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/trtl.html","",'width=662,height=675')
        }
    });
}

function tycherun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/tyche.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/tyche.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/tyche.html","",'width=662,height=675')
        }
    });
}

function xunrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xun.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xun.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xun.html","",'width=662,height=675')
        }
    });
}

function recoalrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/recoal.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/recoal.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/recoal.html","",'width=662,height=675')
        }
    });
}

function xcarun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xca.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/xca.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xca.html","",'width=662,height=675')
        }
    });
}

function ethrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/eth.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/eth.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/eth.html","",'width=662,height=675')
        }
    });
}

function aarun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/2a.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/2a.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/2acoin.html","",'width=662,height=675')
        }
    });
}

function petrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/pet.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            shell.openExternal('C:/Miner/Stop.exe')
            sleep(300).then(() => {
                shell.openExternal('C:/Miner/Configs/pet.cmd')
            });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/pet.html","",'width=662,height=675')
        }
    });
}