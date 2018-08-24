// Open Wallet or Download Wallet
  
function alloywalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Alloy/AlloyWallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Alloy/AlloyWallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/alloy.bat')
        }
    });
}

function arqwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/ARQMA/arq.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/ARQMA/arq.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/arq.bat')
        }
    });
}

function plewalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/PLE/ple.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/PLE/ple.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/ple.bat')
        }
    });
}

function bitcoalwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/BitCoal/BitCoalWallet-x64.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/BitCoal/BitCoalWallet-x64.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/bitcoal.bat')
        }
    });
}

function btcnwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/BTCN/BitcoinnovaWallet-GUI.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/BTCN/BitcoinnovaWallet-GUI.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/btcn.bat')
        }
    });
}

function bittubewalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/IPBC/IPBC-Wallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/IPBC/IPBC-Wallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/bittube.bat')
        }
    });
}

function xatwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XAT/xat.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XAT/xat.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xat.bat')
        }
    });
}

function ccxwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/CCX/CONCEAL-GUI.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/CCX/CONCEAL-GUI.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/ccx.bat')
        }
    });
}

function crepwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Crep/CREPGUI.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Crep/CREPGUI.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/crep.bat')
        }
    });
}

function derowalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Dero/dero.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Dero/Dero.cmd')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/dero.bat')
        }
    });
}

function dcywalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/DCY/dinastycoinwallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/DCY/dinastycoinwallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/dcy.bat')
        }
    });
}

function egemwalletrun(){
    const shell = require('electron').shell
    shell.openExternal('https://myegemwallet.com/')
}

function esnwalletrun(){
    const shell = require('electron').shell
    shell.openExternal('https://wallet.gonspool.com/')
}

function etnwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/ETN/ElectroneumGUIWallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/ETN/ElectroneumGUIWallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/etn.bat')
        }
    });
}

function etnxwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/ETNX/etnx.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/ETNX/etnx.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/etnx.bat')
        }
    });
}

function elyawalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Elyacoin/Elyacoin.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Elyacoin/Elyacoin.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/elya.bat')
        }
    });
}

function ethowalletrun(){
    const shell = require('electron').shell
    shell.openExternal('https://wallet.ether1.org/')
}

function festwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Fest/fest.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Fest/fest.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/fest.bat')
        }
    });
}

function freelabitwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Freelabit/freelabitwallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Freelabit/freelabitwallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/freelabit.bat')
        }
    });
}

function grftwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Grft/GraftWallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Grft/GraftWallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/grft.bat')
        }
    });
}

function xhvwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XHV/haven-wallet-gui.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XHV/haven-wallet-gui.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xhv.bat')
        }
    });
}

function irdwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/IRD/Iridium_Wallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/IRD/Iridium_Wallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/ird.bat')
        }
    });
}

function itnswalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/ITNS/itns.cmd';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/ITNS/itns.cmd')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/itns.bat')
        }
    });
}

function krbwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/KRB/karbowanec.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/KRB/karbowanec.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/krb.bat')
        }
    });
}

function lineswalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Lines/Lines.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Lines/Lines.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/lines.bat')
        }
    });
}

function mztwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/MZT/myztic-wallet-gui.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/MZT/myztic-wallet-gui.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/mzt.bat')
        }
    });
}

function msrwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/MSR/masari-wallet-gui.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/MSR/masari-wallet-gui.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/msr.bat')
        }
    });
}

function xmrwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XMR/monero-wallet-gui.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XMR/monero-wallet-gui.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xmr.bat')
        }
    });
}

function nbrwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/NBR/niobio.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/NBR/niobio.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/nbr.bat')
        }
    });
}

function ombwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/OMB/wallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/OMB/wallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/omb.bat')
        }
    });
}

function pirlwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Pirl/Pirl-Nautilus-Wallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Pirl/Pirl-Nautilus-Wallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/pirl.bat')
        }
    });
}

function plurawalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Plura/PluraCoin.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Plura/PluraCoin.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/plura.bat')
        }
    });
}

function rvnwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/RVN/raven-qt.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/RVN/raven-qt.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/rvn.bat')
        }
    });
}

function recoalwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/ReCoal/recoal.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/ReCoal/recoal.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/recoal.bat')
        }
    });
}

function solacewalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/Solace/SolaceGUIWallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/Solace/SolaceGUIWallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/solace.bat')
        }
    });
}

function xtlwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XTL/Stellite-Wallet-GUI.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XTL/Stellite-Wallet-GUI.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xtl.bat')
        }
    });
}

function supwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/SUP/Superior-wallet-gui.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/SUP/Superior-wallet-gui.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/sup.bat')
        }
    });
}

function trtlwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/TRTL/trtl.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/TRTL/trtl.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/trtl.bat')
        }
    });
}

function tychewalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/TYCHE/TycheCashGUI.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/TYCHE/TycheCashGUI.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/tyche.bat')
        }
    });
}

function xunwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XUN/UltraNoteWallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XUN/UltraNoteWallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xun.bat')
        }
    });
}

function xcawalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/XCA/X-CASH_GUI_Wallet.exe';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/XCA/X-CASH_GUI_Wallet.exe')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/xca.bat')
        }
    });
}

function ethwalletrun(){
    const shell = require('electron').shell
    shell.openExternal('https://www.exodus.io/')
}

function petwalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/PET/pet.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/PET/pet.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/pet.bat')
        }
    });
}

function aawalletrun(){
    const shell = require('electron').shell
    var fs = require('fs'),
    filename = 'C:/Miner/Wallets/2A/2a.bat';
    fs.exists(filename, function(exists) {
        if (exists) {
            shell.openExternal('C:/Miner/Wallets/2A/2a.bat')
        } else {
            shell.openExternal('C:/Miner/Wallets/CMD/2a.bat')
        }
    });
}