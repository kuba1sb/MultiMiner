TITLE MultiMiner - Plenteum Wallet
echo off
bitsadmin.exe /transfer "Plenteum Wallet" http://update.multiminer.us/CMUpdate/Wallets/PLE.zip C:\Miner\Wallets\PLE.zip
cls
echo.
echo.
echo  Installing Plenteum Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\PLE.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
mshta "javascript:var sh=new ActiveXObject( 'WScript.Shell' ); sh.Popup( 'This is a CLI wallet and uses TWO seperate windows.  The first window is the daemon and must remain open for the wallet to work.  Simply minimize this window.  The second window is the wallet.  From this window you can obtain your mining address as well as manage your funds for this coin.', 10, 'MultiMiner', 64 );close()"
C:\Miner\Wallets\PLE\ple.bat
exit