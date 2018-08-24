TITLE MultiMiner - PetCoin Wallet
echo off
bitsadmin.exe /transfer "PetCoin Wallet" http://update.multiminer.us/CMUpdate/Wallets/PET.zip C:\Miner\Wallets\PET.zip
cls
echo.
echo.
echo  Installing Plenteum Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\PET.zip -d C:\Miner\Wallets -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
mshta "javascript:var sh=new ActiveXObject( 'WScript.Shell' ); sh.Popup( 'This is a CLI wallet and uses TWO seperate windows.  The first window is the daemon and must remain open for the wallet to work.  Simply minimize this window.  The second window is the wallet.  From this window you can obtain your mining address as well as manage your funds for this coin.', 10, 'MultiMiner', 64 );close()"
C:\Miner\Wallets\PET\pet.bat
exit