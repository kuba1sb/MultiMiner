TITLE MultiMiner - Masari Wallet
echo off
bitsadmin.exe /transfer "Masari Wallet" http://update.multiminer.us/CMUpdate/Wallets/MSR.zip C:\Miner\Wallets\MSR.zip
cls
echo.
echo.
echo  Installing Masari Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\MSR.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\MSR\masari-wallet-gui.exe
exit