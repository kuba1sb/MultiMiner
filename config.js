function amdconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/amd.txt';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/amd.txt", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            alert("You must begin mining with a AMD GPU for this file to be created","MultiMiner");
        }
    });
  }

function baseconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/config.txt';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/config.txt", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            alert("You must begin mining for this file to be created","MultiMiner");
        }
    });
  }

function cpuconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/cpu.txt';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/cpu.txt", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            alert("You must begin mining with a CPU for this file to be created","MultiMiner");
        }
    });
  }

function nvidiaconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/nvidia.txt';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/nvidia.txt", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            alert("You must begin mining with a Nvidia GPU for this file to be created","MultiMiner");
        }
    });
  }

function poolsconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/pools.txt';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/pools.txt", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            alert("You must begin mining for this file to be created","MultiMiner");
        }
    });
  }

  function alloyconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/alloy.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/alloy.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/alloy.html","",'width=662,height=675')
        }
    });
  }

  function arqconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/arq.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/arq.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/arq.html","",'width=662,height=675')
        }
    });
  }

  function bitcoalconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/bitcoal.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/bitcoal.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/bitcoal.html","",'width=662,height=675')
        }
    });
  }

  function bittubeconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/bittube.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/bittube.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/bittube.html","",'width=662,height=675')
        }
    });
  }

  function btcnconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/btcn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/btcn.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/btcn.html","",'width=662,height=675')
        }
    });
  }

  function ccxconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ccx.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/ccx.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ccx.html","",'width=662,height=675')
        }
    });
  }

  function crepconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/crep.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/crep.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/crep.html","",'width=662,height=675')
        }
    });
  }

  function dcyconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/dcy.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/dcy.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/dcy.html","",'width=662,height=675')
        }
    });
  }

  function deroconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/dero.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/dero.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/dero.html","",'width=662,height=675')
        }
    });
  }

  function egemconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/egem.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/egem.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/egem.html","",'width=662,height=675')
        }
    });
  }

  function elyaconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/elya.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/elya.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/elya.html","",'width=662,height=675')
        }
    });
  }

  function esnconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/esn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/esn.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/esn.html","",'width=662,height=675')
        }
    });
  }

  function ethconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/eth.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/eth.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/eth.html","",'width=662,height=675')
        }
    });
  }

  function ethoconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etho.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/etho.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etho.html","",'width=662,height=675')
        }
    });
  }

  function etnconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/etn.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etn.html","",'width=662,height=675')
        }
    });
  }

  function etnxconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/etnx.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/etnx.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/etnx.html","",'width=662,height=675')
        }
    });
  }

  function festconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/fest.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/fest.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/fest.html","",'width=662,height=675')
        }
    });
  }

  function freelabitconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/freelabit.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/freelabit.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/freelabit.html","",'width=662,height=675')
        }
    });
  }

  function grftconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/grft.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/grft.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/grft.html","",'width=662,height=675')
        }
    });
  }

  function irdconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ird.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/ird.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ird.html","",'width=662,height=675')
        }
    });
  }

  function itnsconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/itns.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/itns.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/itns.html","",'width=662,height=675')
        }
    });
  }

  function krbconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/krb.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/krb.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/krb.html","",'width=662,height=675')
        }
    });
  }

  function linesconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/lines.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/lines.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/lines.html","",'width=662,height=675')
        }
    });
  }

  function msrconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/msr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/msr.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/msr.html","",'width=662,height=675')
        }
    });
  }

  function mztconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/mzt.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/mzt.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/mzt.html","",'width=662,height=675')
        }
    });
  }

  function nbrconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/nbr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/nbr.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/nbr.html","",'width=662,height=675')
        }
    });
  }

  function ombconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/omb.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/omb.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/omb.html","",'width=662,height=675')
        }
    });
  }

  function pirlconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/pirl.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/pirl.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/pirl.html","",'width=662,height=675')
        }
    });
  }

  function pleconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/ple.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/ple.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/ple.html","",'width=662,height=675')
        }
    });
  }

  function pluraconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/plura.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/plura.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/plura.html","",'width=662,height=675')
        }
    });
  }

  function recoalconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/recoal.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/recoal.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/recoal.html","",'width=662,height=675')
        }
    });
  }

  function rvnconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/rvn.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/rvn.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/rvn.html","",'width=662,height=675')
        }
    });
  }

  function solaceconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/solace.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/solace.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/solace.html","",'width=662,height=675')
        }
    });
  }

  function supconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/sup.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/sup.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/sup.html","",'width=662,height=675')
        }
    });
  }

  function trtlconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/trtl.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/trtl.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/trtl.html","",'width=662,height=675')
        }
    });
  }

  function tycheconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/tyche.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/tyche.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/tyche.html","",'width=662,height=675')
        }
    });
  }

  function xatconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xat.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/xat.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xat.html","",'width=662,height=675')
        }
    });
  }

  function xcaconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xca.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/xca.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xca.html","",'width=662,height=675')
        }
    });
  }

  function xhvconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xhv.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/xhv.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xhv.html","",'width=662,height=675')
        }
    });
  }

  function xmrconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/xmr.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/xmr.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/xmr.html","",'width=662,height=675')
        }
    });
  }

  function petconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/pet.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/pet.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/pet.html","",'width=662,height=675')
        }
    });
  }

  function aaconfig(){
    var fs = require('fs'),
    filename = 'C:/Miner/Configs/2a.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            require('child_process').exec("notepad C:/Miner/Configs/2a.cmd", function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
                console.log(stdout);
                });
        } else {
            var pat = window.location.pathname;
            var dir = pat.substring(pat.indexOf('', 1), pat.lastIndexOf('/'));
            window.open(dir + "/html/2acoin.html","",'width=662,height=675')
        }
    });
  }