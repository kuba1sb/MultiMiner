TITLE MultiMiner - ArQmA Wallet
echo off
bitsadmin.exe /transfer "ArQmA Wallet" http://update.multiminer.us/CMUpdate/Wallets/ARQMA.zip C:\Miner\Wallets\ARQ.zip
cls
echo.
echo.
echo  Installing ArQmA Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\ARQ.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
mshta "javascript:var sh=new ActiveXObject( 'WScript.Shell' ); sh.Popup( 'This is a CLI wallet and uses TWO seperate windows.  The first window is the daemon and must remain open for the wallet to work.  Simply minimize this window.  The second window is the wallet.  From this window you can obtain your mining address as well as manage your funds for this coin.', 10, 'MultiMiner', 64 );close()"
C:\Miner\Wallets\ARQMA\arq.bat
exit