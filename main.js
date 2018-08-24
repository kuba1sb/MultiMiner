const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 700, height: 790})

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
    const shell = require('electron').shell
    shell.openExternal('C:/Miner/Configs/SilentCMD C:/Miner/Stop.exe')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    const shell = require('electron').shell
    shell.openExternal('C:/Miner/Configs/SilentCMD C:/Miner/Stop.exe')
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const template = [
    {
          label: 'Home',
          click () { require('electron').shell.openExternal('https://multiminer.us') }
    },
	  {
      label: 'Endorsements',
      submenu: [
        {
          label: 'Catalyst',
          click () { require('electron').shell.openExternal('https://catalyst.cash/') }
        },
        {
          label: 'Conceal Network',
          click () { require('electron').shell.openExternal('https://conceal.network/') }
        },
        {
          label: 'Electronero',
          click () { require('electron').shell.openExternal('https://electronero.org/') }
        },
        {
          label: 'Elyacoin',
          click () { require('electron').shell.openExternal('https://elyatel.com/') }
        },
		    {
          label: 'Ether-1',
          click () { require('electron').shell.openExternal('https://ether1.org/#') }
        },
		    {
          label: 'EtherGem',
          click () { require('electron').shell.openExternal('https://egem.io/') }
        },
		    {
          label: 'Festival',
          click () { require('electron').shell.openExternal('https://bitcointalk.org/index.php?topic=3683049.msg36802128') }
        },
        {
          label: 'ReCoal',
          click () { require('electron').shell.openExternal('https://www.recoal.org/') }
        }
      ]
    },
    {
      label: 'Pools',
      submenu: [
        {
          label: 'MultiMiner Pools',
          submenu: [
			      {
			        label: 'ArQmA (ARQ) Pool',
			        click () { require('electron').shell.openExternal('https://arq.multiminer.us') }
            },
            {
              label: 'Alloy (XAO) Pool',
              click () { require('electron').shell.openExternal('https://alloy.arhash.xyz/') }
            },
            {
              label: 'Festival (FEST) Pool',
              click () { require('electron').shell.openExternal('https://festival.multiminer.us/') }
            },
            {
              label: 'PrivatePay (XPP) Pool',
              click () { require('electron').shell.openExternal('https://xpp.arhash.xyz/') }
            },
            {
              label: 'ReCoal (REL) Pool',
              click () { require('electron').shell.openExternal('https://recoal.multiminer.us/') }
            },
            {
              label: 'X-CASH (XCA) Pool',
              click () { require('electron').shell.openExternal('https://xcash.arhash.xyz/') }
            },  
          ]
		    }
		  ]
    },
    {
     label: 'Updates',
     submenu: [
        {
          label: 'MultiMiner',
          click () { require('electron').shell.openExternal('C:/Miner/wyUpdate.exe') }
        },
        {
          label: 'Wallets',
          submenu: [
            {
              label: '2ACoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/2A/wyUpdate.exe') }
            },
            {
              label: 'Alloy Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Alloy/wyUpdate.exe') }
            },
            {
              label: 'ArQmA Wallet',
              click () { shell.openExternal('C:/Miner/Wallets/ARQMA/wyUpdate.exe') }
            },
            {
              label: 'BitCoal Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/BitCoal/wyUpdate.exe') }
            },
            {
              label: 'Bitcoin-N Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/BTCN/wyUpdate.exe') }
            },
            {
              label: 'BitTube Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/BitTube/wyUpdate.exe') }
            },
            {
              label: 'Catalyst Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XAT/wyUpdate.exe') }
            },
            {
              label: 'Conceal Network Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/CCX/wyUpdate.exe') }
            },
            {
              label: 'Crep Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Crep/wyUpdate.exe') }
            },
            {
              label: 'Dero Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Dero/wyUpdate.exe') }
            },
            {
              label: 'Dinastycoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/DCY/wyUpdate.exe') }
            },
            {
              label: 'Electroneum Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/ETN/wyUpdate.exe') }
            },
            {
              label: 'Electronero Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/ETNX/wyUpdate.exe') }
            },
            {
              label: 'Elyacoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Elyacoin/wyUpdate.exe') }
            },
            {
              label: 'Festival Coin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Fest/wyUpdate.exe') }
            },
            {
              label: 'Freelabit Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Freelabit/wyUpdate.exe') }
            },
            {
              label: 'Graft Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Grft/wyUpdate.exe') }
            },
            {
              label: 'Haven Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XHV/wyUpdate.exe') }
            },
            {
              label: 'Intense Coin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/ITNS/wyUpdate.exe') }
            },
            {
              label: 'Iridium Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/IRD/wyUpdate.exe') }
            },
            {
              label: 'Karbo Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/KRB/wyUpdate.exe') }
            },
            {
              label: 'Lines Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Lines/wyUpdate.exe') }
            },
            {
              label: 'Masari Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/MSR/wyUpdate.exe') }
            },
            {
              label: 'Monero Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XMR/wyUpdate.exe') }
            },
            {
              label: 'Myztic Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/MZT/wyUpdate.exe') }
            },
            {
              label: 'Niobio Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/NBR/wyUpdate.exe') }
            },
            {
              label: 'Ombre Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/OMB/wyUpdate.exe') }
            },
            {
              label: 'PetCoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/PET/wyUpdate.exe') }
            },
            {
              label: 'Pirl Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Pirl/wyUpdate.exe') }
            },
            {
              label: 'Plenteum Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/PLE/wyUpdate.exe') }
            },
            {
              label: 'PluraCoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Plura/wyUpdate.exe') }
            },
            {
              label: 'Raven Coin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/RVN/wyUpdate.exe') }
            },
            {
              label: 'ReCoal Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/ReCoal/wyUpdate.exe') }
            },
            {
              label: 'Solace Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/Solace/wyUpdate.exe') }
            },
            {
              label: 'Stellite Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XTL/wyUpdate.exe') }
            },
            {
              label: 'Superior Coin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/SUP/wyUpdate.exe') }
            },
            {
              label: 'TurtleCoin Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/TRTL/wyUpdate.exe') }
            },
            {
              label: 'TyceCash Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/TYCHE/wyUpdate.exe') }
            },
            {
              label: 'UltraNote Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XUN/wyUpdate.exe') }
            },
            {
              label: 'X-Cash Wallet',
              click () { require('electron').shell.openExternal('C:/Miner/Wallets/XCA/wyUpdate.exe') }
            }
            ]
          }
        ]
      }
    ]

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services', submenu: []},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ]
    })
}
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)