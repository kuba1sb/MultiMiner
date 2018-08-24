TITLE MultiMiner - TurtleCoin Wallet
echo off
bitsadmin.exe /transfer "TurtleCoin Wallet" http://update.multiminer.us/CMUpdate/Wallets/TRTL.zip C:\Miner\Wallets\TRTL.zip
cls
echo.
echo.
echo  Installing TurtleCoin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\TRTL.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
mshta "javascript:var sh=new ActiveXObject( 'WScript.Shell' ); sh.Popup( 'This is a CLI wallet and uses TWO seperate windows.  The first window is the daemon and must remain open for the wallet to work.  Simply minimize this window.  The second window is the wallet.  From this window you can obtain your mining address as well as manage your funds for this coin.', 10, 'MultiMiner', 64 );close()"
C:\Miner\Wallets\TRTL\trtl.bat
exit